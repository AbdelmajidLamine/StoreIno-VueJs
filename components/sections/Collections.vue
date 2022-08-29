<template>

  <div class="container">
    <div class="wrap">
      <h2 class="centre-line">
        <span>
          {{ $settings.sections.products_2.title }}
        </span>
      </h2>
    </div>
    <div class="cards__cloths" v-if="items.length > 0">
      <si-carousel v-if="$settings.sections.products_2.active" component="si-product"
        :title="$settings.sections.products_2.title" :list="trending" itemClass="w-full"></si-carousel>
    </div>

    <div class="item item-1b33c8e3-cc88-4df4-be53-85de993829bd">
      <div class="banner-item ">
        <div class="img-box img-box--mobile"><a class="image image-adapt" :href="banner.items.item_0.button.url" style="
                                    
                                        padding-top: 31.25%
                                    "><img
              srcset="//cdn.shopify.com/s/files/1/0300/9884/9928/files/fullwidth-banner-4_1920x.jpg?v=1616553789 1x, //cdn.shopify.com/s/files/1/0300/9884/9928/files/fullwidth-banner-4_1920x@2x.jpg?v=1616553789 2x"
              :src="banner.banner_4.image ? banner.banner_4.image.src : $store.state.defaults.sliderImage"
              alt="Halo - Shopify Theme" loading="lazy">

          </a></div>
      </div>
    </div>

    <div class="wrap">
      <h2 class="centre-line">
        <span>
          {{ $settings.sections.collections.title }}
        </span>
      </h2>
    </div>

    <div>
      <div class="categories__card" v-if="categories.length > 0">
        <si-carousel v-if="$settings.sections.collections.active" component="si-collection"
          :title="$settings.sections.collections.title" :list="categories" itemClass="w-full"></si-carousel>
      </div>

    </div>

    <div class="item item-1b33c8e3-cc88-4df4-be53-85de993829bd">
      <div class="banner-item ">
        <div class="img-box img-box--mobile"><a class="image image-adapt" :href="banner.items.item_0.button.url"
            style="padding-top: 31.25%"><img
              srcset="//cdn.shopify.com/s/files/1/0300/9884/9928/files/fullwidth-banner-5_1920x.jpg?v=1616573204 1x, //cdn.shopify.com/s/files/1/0300/9884/9928/files/fullwidth-banner-5_1920x@2x.jpg?v=1616573204 2x"
              :src="banner.banner_5.image ? banner.banner_5.image.src : $store.state.defaults.sliderImage"
              alt="Halo - Shopify Theme" loading="lazy">

          </a></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      width: 33.33,
      screenWidth: 1200,
      clothes: this.$settings.sections.products_2.collections,
      banner: this.$settings.sections.banner,
      categories: this.$settings.sections.collections.items,
      loading: {
        products: true,
        filters: true,
        collections: true,
        brands: true,
      },
      query: {},
      param: [],
      filters: null,
      showSideBar: false,
      gridClass: 'w-full md:w-1/2 lg:w-1/3',
      items: [],
      trending: [],
      collections: [],
      brands: [],
      paginate: { page: 1, limit: this.$settings.sections.shop.pagination.limit, total: 12 },
      params: { page: 1, search: this.$route.query.search, limit: this.$settings.sections.shop.pagination.limit, 'collections.slug-in': [], sort: { createdAt: -1 } },
      lastParams: { page: 1, search: this.$route.query.search, limit: this.$settings.sections.shop.pagination.limit, 'collections.slug-in': [], sort: { createdAt: -1 } },
      sorts: [
        { field: { 'price.salePrice': 1 }, name: this.$settings.sections.shop.sorts.price_asc },
        { field: { 'price.salePrice': -1 }, name: this.$settings.sections.shop.sorts.price_desc },
        { field: { 'review.rating': -1 }, name: this.$settings.sections.shop.sorts.rating_desc },
        { field: { 'review.rating': 1 }, name: this.$settings.sections.shop.sorts.rating_asc },
        { field: { 'name': 1 }, name: this.$settings.sections.shop.sorts.name_asc },
        { field: { 'name': -1 }, name: this.$settings.sections.shop.sorts.name_desc },
        { field: { createdAt: -1 }, name: this.$settings.sections.shop.sorts.newest },
        { field: { createdAt: 1 }, name: this.$settings.sections.shop.sorts.oldest }
      ],
      girds: [
        { number: 6, width: 16, class: 'w-full md:w-1/2 lg:w-1/2' },
        { number: 9, width: 21, class: 'w-full md:w-1/2 lg:w-1/3' },
        { number: 12, width: 26, class: 'w-1/2 md:w-1/3 lg:w-1/4' }
      ]

    };
  },
  watch: {
    screenWidth(val) {
      if (val < 640) this.width = 100;
      if (val >= 640 && val < 768) this.width = 50;
      if (val >= 768 && val < 1024) this.width = 33.33;
      if (val >= 1024) this.width = 25;
    },
    params: {
      handler(val) {
        if (JSON.stringify(val) !== JSON.stringify(this.lastParams)) {
          this.getItems();
        }
      },
      deep: true
    },
    "$route.query.search"(val) {
      this.$set(this.params, 'search', val);
    }
  },
  async fetch() {
    this.$store.state.seo.title = this.$settings.sections.shop.title + ' - ' + this.$settings.store_name;
    this.$store.state.seo.description = this.$settings.sections.shop.description || this.$settings.store_description;
    if (this.$route.params.slug) {
      this.param = this.$route.params.slug.split(',');
      this.$route.params.slug.split(',').forEach(item => {
        this.params['collections.slug-in'].push(item);
      });
    }
    for (const key in this.$route.query) {
      if (!this.$route.query[key]) continue;
      switch (key) {
        case 'price-from': this.$set(this.params, 'price.salePrice-from', this.$route.query[key]); break;
        case 'price-to': this.$set(this.params, 'price.salePrice-to', this.$route.query[key]); break;
        case 'colors-size': this.$set(this.params, 'options.values.value1', this.$route.query[key].split(',')); break;
        case 'tags': this.$set(this.params, 'tags-in', this.$route.query[key].split(',')); break;
        case 'brands': this.$set(this.params, 'brand.slug-in', this.$route.query[key].split(',')); break;
        case 'page': this.$set(this.params, 'page', this.$route.query[key]); break;
      }
    }
    this.lastParams = this.params;
    await this.getFilters();
    await this.getItems();
    await this.getTrending();
    await this.getCollections();
    await this.getBrands();
  },
  methods: {
    move(n) {
      if (!document.querySelector('.carousel-item')) return;
      var get = 'pop', set = 'unshift', width = document.querySelector('.carousel-item').offsetWidth;
      if (n == 1) { get = 'shift', set = 'push', width = `-${width}` };
      document.querySelector('.carousel').style.transform = `translateX(${width}px)`;
      document.querySelector('.carousel').style.transition = `500ms`;
      setTimeout(() => {
        document.querySelector('.carousel').style.transform = `translateX(0px)`;
        document.querySelector('.carousel').style.transition = `none`;
        const el = this.categories[get]();
        this.categories[set](el);
      }, 500);
    },

    setParams(e, key, value) {
      if (key.indexOf('price') >= 0 || key.indexOf('page') >= 0) {
        this.$set(this.params, key, e.target.value);
        return false;
      } else {
        if (e.target.checked) {
          if (!this.params[key]) this.params[key] = this.$set(this.params, key, []);
          this.params[key].push(value);
        } else {
          this.params[key] = this.params[key].filter(item => item !== value);
        }
      }
      for (const key in this.params) {
        switch (key) {
          case 'collections.slug-in': this.param = this.params[key]; break;
          case 'price.salePrice-from': this.query['price-from'] = this.params[key]; break;
          case 'price.salePrice-to': this.query['price-to'] = this.params[key]; break;
          case 'options.values.value1': this.query['colors-size'] = this.params[key]; break;
          case 'tags-in': this.query['tags'] = this.params[key]; break;
          case 'brand.slug-in': this.query['brands'] = this.params[key]; break;
          case 'page': this.query['page'] = [this.params[key]]; break;
        }
      }
      let url = `/shop/`;
      url += this.param.length > 0 ? [...new Set(this.param)].join(',') : '';
      for (const key in this.query) {
        url += url.indexOf('?') == -1 ? '?' : '&';
        if (typeof this.query[key] == 'object') {
          url += `${key}=${this.query[key].join(',')}`;
        } else url += `${key}=${this.query[key]}`;
      }
      window.history.pushState({}, '', url);
    },
    async getFilters() {
      this.filters = null;
      this.loading.filters = true;
      try {
        const { data } = await this.$storeino.products.filters({});
        this.filters = data;
      } catch (e) {
        console.log({ e });
      }
      this.loading.filters = false;
    },
    async getCollections() {
      this.collections = [];
      this.loading.collections = true;
      try {
        const { data } = await this.$storeino.collections.search({});
        this.collections = data.results;
      } catch (e) {
        console.log({ e });
      }
      this.loading.collections = false;
    },
    async getBrands() {
      this.brands = [];
      this.loading.brands = true;
      try {
        const { data } = await this.$storeino.brands.search({});
        this.brands = data.results;
      } catch (e) {
        console.log({ e });
      }
      this.loading.brands = false;
    },
    async getItems(page = null) {
      if (page != null) this.setParams({ target: { value: page } }, 'page', page);
      this.items = [];
      this.loading.products = true;
      try {
        this.params.search = this.$route.query.search;
        this.params.page = page || this.paginate.current_page;
        this.params.limit = this.$settings.sections.shop.pagination.limit;
        this.lastParams = this.$tools.copy(this.params);
        const { data } = await this.$storeino.products.search(this.params);
        this.items = data.results;
        this.paginate = data.paginate;
      } catch (e) {
        console.log({ e });
      }
      this.loading.products = false;
    },
    async getTrending() {
      this.trending = this.items.filter(function (elt) { return elt.tags[0] == "trending"; });
    },
  },
  mounted() {
    this.screenWidth = window.innerWidth;
    window.onresize = (ev) => { this.screenWidth = window.innerWidth }
  },
};
</script>

<style>
.wrap {
  position: relative;
  margin-top: 50px;
  font-family: 'Anton', sans-serif;
  font-family: 'Arvo', serif;
  font-family: 'EB Garamond', serif;
  font-family: 'Jost', sans-serif;
  font-family: 'Mingzat', sans-serif;
  font-family: 'Roboto Mono', monospace;
  font-family: 'Rubik Moonrocks', cursive;
}

h2.centre-line {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
}

h2.centre-line:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  top: 50%;
  left: 0;
  z-index: -1;
  background: rgb(5, 5, 5);
}

h2.centre-line span {
  background-color: rgb(255, 255, 255);
  padding: 1rem;
  display: inline-block;
}

/* .card__cloths {
  position: relative;
  margin-top: -60px;
} */



.image__cloths {
  transition-property: transform;
  -webkit-transition-property: transform;
  transition-duration: .5s;
  transition-timing-function: ease-out;
}

.cards__cloths {
  position: relative;
  top: -70px;
  display: flex;
}

.custom__label {
  background-color: aliceblue;
  font-size: 12px;
  padding: 5px;
  position: relative;
  margin-top: 10px;
  top: 70px;
  left: 10px;

}

.sale {
  color: red;

}

.icon__collections {


  position: relative;
  top: 100px;
  left: 240px;
  width: 20px;
  height: 20px;
  display: grid;


}

.icon__collection {
  background-color: rgb(255, 255, 255);
  border: 1px solid white;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.card__text {
  margin-top: 20px;
}

.button__cart {
  background-color: black;
  color: white;
  width: 100%;
  height: 55px;
  text-align: center;
  padding-top: 15px;
  margin-top: 20px;

}

.button__cart:hover {
  background-color: rgb(255, 0, 0);
  color: white;
  width: 100%;
  height: 55px;
  text-align: center;
  padding-top: 15px;
  margin-top: 20px;


}

.description__cart {
  padding-top: 10px;
  font-size: 13px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.categories__card {
  margin-top: 80px;
  display: flex;
}
</style>