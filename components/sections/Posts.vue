<template>
  <div class="container">
    <div class="wrap">
      <h2 class="centre-line">
        <span>
          {{ $settings.sections.products_4.title }}
        </span>
      </h2>
    </div>
    <div class="cards__cloths" v-if="bestSellers.length > 0">
      <si-carousel v-if="$settings.sections.products_2.active" component="si-product"
        :title="$settings.sections.products_4.title" :list="bestSellers" itemClass="w-full"></si-carousel>
    </div>
    <div class="item item-1b33c8e3-cc88-4df4-be53-85de993829bd">
      <div class="banner-item ">
        <div class="img-box img-box--mobile"><a class="image image-adapt" :href="banner.items.item_0.button.url"
            style="display: flex; padding-top: 20px;">
            <div class="img__box__">
              <img
                srcset="//cdn.shopify.com/s/files/1/0300/9884/9928/files/custom-banner-1.jpg?v=1629278133 1x, //cdn.shopify.com/s/files/1/0300/9884/9928/files/custom-banner-1@2x.jpg?v=1629278133 2x"
                :src="banner.banner_6.image ? banner.banner_6.image.src : $store.state.defaults.sliderImage"
                alt="Halo - Shopify Theme" loading="lazy">
            </div>
            <div class="img__box__">
              <img
                srcset="//cdn.shopify.com/s/files/1/0300/9884/9928/files/custom-banner-2.jpg?v=1629278174 1x, //cdn.shopify.com/s/files/1/0300/9884/9928/files/custom-banner-2@2x.jpg?v=1629278174 2x"
                :src="banner.banner_7.image ? banner.banner_7.image.src : $store.state.defaults.sliderImage"
                alt="Halo - Shopify Theme" loading="lazy">
            </div>


          </a></div>
      </div>
    </div>

    <div class="item item-1b33c8e3-cc88-4df4-be53-85de993829bd">
      <div class="banner-item ">
        <div class="img-box img-box--mobile"><a class="image image-adapt" :href="banner.items.item_0.button.url"
            style="display: flex; padding-top: 20px;">
            <img
              srcset="//cdn.shopify.com/s/files/1/0300/9884/9928/files/fullwidth-banner-beauty-4_b349a027-415c-44eb-b511-45e34c6bc1d7_1920x.jpg?v=1620982611 1x, //cdn.shopify.com/s/files/1/0300/9884/9928/files/fullwidth-banner-beauty-4_b349a027-415c-44eb-b511-45e34c6bc1d7_1920x@2x.jpg?v=1620982611 2x"
              :src="banner.banner_8.image ? banner.banner_8.image.src : $store.state.defaults.sliderImage"
              alt="Halo - Shopify Theme" loading="lazy">

          </a></div>
      </div>
    </div>

    <div class="wrap">
      <h2 class="centre-line">
        <span>
          {{ $settings.sections.products_5.title }}
        </span>
      </h2>
    </div>
    <div class="m-2 flex justify-between items-center">
      <div class="flex">
        <button class="button__bunner__left p-2 bg-gray-100 rounded-md mx-1 hover:bg-gray-200" @click="move(-1)"><svg
            class="w-5 h-5 translate" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left"
            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path fill="currentColor"
              d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
              class=""></path>
          </svg></button>
        <button class="button__bunner__right p-2 bg-gray-100 rounded-md mx-1 hover:bg-gray-200" @click="move(1)"><svg
            class="w-5 h-5 translate" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"
            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
              class=""></path>
          </svg></button>
      </div>
    </div>
    <div class="overflow-hidden carousel-container" dir="ltr">
      <div class="flex carousel">
        <div v-for="(item, i) in stories" :key="i" class="carousel-item p-2" :class="itemClass">
          <div class="center" @mouseenter="hover.splice(i, 1, !hover[i])" @mouseout="hover.splice(i, 1, !hover[i])">
            <transition>
              <div class="icon__collections__stories">
                <div>
                  <div class="card__text text__stories">
                    <div class="flex ">
                      <nuxt-link :to="`/posts/${item.name}`" :title="item.name" :aria-label="item.title">
                        <strong :class="hover[i] ? 'red--text' : 'black--text'">{{
                            item.name
                        }}</strong>
                      </nuxt-link>
                      <span class="icon__star">
                        <i class="spr-icon spr-icon-star"></i>
                        <i class="spr-icon spr-icon-star"></i>
                        <i class="spr-icon spr-icon-star"></i>
                        <i class="spr-icon spr-icon-star"></i>
                        <i class="spr-icon spr-icon-star"></i>
                      </span>
                    </div>
                    <div class="description__cart">
                      <p>{{ description }}</p>
                    </div>
                  </div>


                </div>
              </div>
            </transition>

            <nuxt-link :to="`/posts/${item.name}`" :title="item.name" :aria-label="item.name">
              <img :src="item.image.src"
                sizes="(min-width: 1100px) 535px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                alt="(Product 10) Sample - Clothing And Accessory Boutiques For Sale" class=" ls-is-cached lazyloaded">

            </nuxt-link>




          </div>
        </div>
      </div>
    </div>
    <div class="halo__parag">

      <div class="item item-1b33c8e3-cc88-4df4-be53-85de993829bd">
        <div class="halo__image text-center">
          <div class="img-box img-box--mobile"><a class="image image-adapt" href="">
              <img
                srcset="//cdn.shopify.com/s/files/1/0300/9884/9928/files/logo-block.png?v=1616725450 1x, //cdn.shopify.com/s/files/1/0300/9884/9928/files/logo-block@2x.png?v=1616725450 2x"
                :src="$settings.sections.stories.image" loading="lazy" alt="Halo - Shopify Theme" width="319"
                height="75">
            </a></div>
        </div>

        <div class="halo__text_first text-center">
          <span>
            {{ $settings.sections.stories.parag1 }}
          </span>
        </div>
        <div class="halo__text_seconde text-center">
          <span>
            {{ $settings.sections.stories.parag2 }}
          </span>
        </div>

        <div class="halo__button">
          <div style=" padding:30px; display: flex ;background-color: white;">
            <div style=" width: 30px; height: 30px;margin-right: 10px;">
              <si-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true" focusable="false"
                  role="presentation">
                  <path fill="#b0bec5"
                    d="M35,5H7C4.791,5,3,6.791,3,9v17c0,2.208,1.791,4,4,4h28c2.209,0,4-1.792,4-4V9 C39,6.791,37.209,5,35,5z">
                  </path>
                  <path fill="#607d8b"
                    d="M4.088,6.273C3.627,6.766,3.293,7.371,3.127,8.047L21,21L38.873,8.047 c-0.166-0.676-0.5-1.281-0.961-1.773L21,18.531L4.088,6.273z">
                  </path>
                  <path fill="#cfd8dc"
                    d="M41,16H13c-2.209,0-4,1.791-4,4v17c0,2.208,1.791,4,4,4h28c2.209,0,4-1.792,4-4V20 C45,17.791,43.209,16,41,16z">
                  </path>
                  <path fill="#78909c"
                    d="M10.088,17.273c-0.461,0.492-0.795,1.098-0.961,1.773L27,32l17.873-12.953 c-0.166-0.676-0.5-1.281-0.961-1.773L27,29.531L10.088,17.273z">
                  </path>
                  <path fill="#2196f3" d="M48 40L39 32 39 48z"></path>
                  <path fill="#2196f3" d="M27 37H40V43H27z"></path>
                </svg></si-svg>
            </div>

            <span>
              Write US A Few Words
            </span>
          </div>
          <div style="padding:30px;margin-left:30px ;display: flex ;background-color: white;">
            <div style="width: 30px; height: 30px;margin-right: 10px;">
              <si-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true" focusable="false"
                  role="presentation">
                  <path fill="#FFA726"
                    d="M10 22A4 4 0 1 0 10 30 4 4 0 1 0 10 22zM38 22A4 4 0 1 0 38 30 4 4 0 1 0 38 22z"></path>
                  <path fill="#FFB74D"
                    d="M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z">
                  </path>
                  <path fill="#FF5722"
                    d="M24,3C14.6,3,7,10.6,7,20c0,1.2,0,3.4,0,3.4L9,25v-3l21-9.8l9,9.8v3l2-1.6c0,0,0-2.1,0-3.4C41,12,35.3,3,24,3z">
                  </path>
                  <path fill="#784719"
                    d="M31 24A2 2 0 1 0 31 28 2 2 0 1 0 31 24zM17 24A2 2 0 1 0 17 28 2 2 0 1 0 17 24z"></path>
                  <path fill="#757575"
                    d="M43,24c-0.6,0-1,0.4-1,1v-7c0-8.8-7.2-16-16-16h-7c-0.6,0-1,0.4-1,1s0.4,1,1,1h7c7.7,0,14,6.3,14,14v10c0,0.6,0.4,1,1,1s1-0.4,1-1v2c0,3.9-3.1,7-7,7H24c-0.6,0-1,0.4-1,1s0.4,1,1,1h11c5,0,9-4,9-9v-5C44,24.4,43.6,24,43,24z">
                  </path>
                  <g>
                    <path fill="#37474F"
                      d="M43 22h-1c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-4C45 22.9 44.1 22 43 22zM24 36A2 2 0 1 0 24 40 2 2 0 1 0 24 36z">
                    </path>
                  </g>
                </svg></si-svg>
            </div>
            <span>Live Chat With Us</span>
          </div>

        </div>
      </div>

    </div>

    <div class="wrap">
      <h2 class="centre-line">


        <span>

          <si-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true" focusable="false"
              role="presentation">
              <path
                d="M 16.5 5 C 10.159 5 5 10.159 5 16.5 L 5 31.5 C 5 37.841 10.159 43 16.5 43 L 31.5 43 C 37.841 43 43 37.841 43 31.5 L 43 16.5 C 43 10.159 37.841 5 31.5 5 L 16.5 5 z M 34 12 C 35.105 12 36 12.895 36 14 C 36 15.104 35.105 16 34 16 C 32.895 16 32 15.104 32 14 C 32 12.895 32.895 12 34 12 z M 24 14 C 29.514 14 34 18.486 34 24 C 34 29.514 29.514 34 24 34 C 18.486 34 14 29.514 14 24 C 14 18.486 18.486 14 24 14 z M 24 17 A 7 7 0 1 0 24 31 A 7 7 0 1 0 24 17 z">
              </path>
            </svg></si-svg>
          <span style="position:relative;top:-24px">
           {{$settings.sections.posts.title}}
          </span>
        </span>
      </h2>
    </div>

    <span class="descr">
      Use hashtag <span style="color: #d12442">#halostyles</span> to show how beautiful you look in our clothings and
      win a chance to be featured here!
    </span>
    <div class="hashtag__desktop flex m-5">
      <div v-for="(item, i) in hashtag" :key="i" :class="item.class" v-if="i < 4">
        <div class="center" @mouseenter="hover.splice(i, 1, !hover[i])" @mouseout="hover.splice(i, 1, !hover[i])">
          <transition>
            <div class="icon__collections__hashtag">
              <div>
                <div class="card__text text__stories">
                  <div class="flex ">
                    <nuxt-link :to="`/shop`" :title="item.title" :aria-label="item.title">
                      <div class="button__hashtag">
                        <button color="black">SHOP THIS LOOK</button>
                      </div>
                    </nuxt-link>

                  </div>

                </div>


              </div>
            </div>
          </transition>

          <nuxt-link :to="`/posts/${item.title}`" :title="item.title" :aria-label="item.title">
            <img :src="item.image ? item.image.url : null"
              sizes="(min-width: 1100px) 535px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
              alt="(Product 10) Sample - Clothing And Accessory Boutiques For Sale" class=" ls-is-cached lazyloaded">

          </nuxt-link>




        </div>
      </div>
    </div>
    <div class="hashtag__desktop flex m-5">

      <div v-for="(item, i) in hashtag" :key="i" :class="item.class" v-if="i >= 4 && i < 8">
        <div class="center" @mouseenter="hover.splice(i, 1, !hover[i])" @mouseout="hover.splice(i, 1, !hover[i])">
          <transition>
            <div class="icon__collections__hashtag">
              <div>
                <div class="card__text text__stories">
                  <div class="flex ">
                    <nuxt-link :to="`/shop`" :title="item.title" :aria-label="item.title">
                      <div class="button__hashtag">
                        <button color="black">SHOP THIS LOOK</button>
                      </div>
                    </nuxt-link>

                  </div>

                </div>


              </div>
            </div>
          </transition>

          <nuxt-link :to="`/posts/${item.title}`" :title="item.title" :aria-label="item.title">
            <img :src="item.image ? item.image.url : null"
              sizes="(min-width: 1100px) 535px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
              alt="(Product 10) Sample - Clothing And Accessory Boutiques For Sale" class=" ls-is-cached lazyloaded">

          </nuxt-link>




        </div>
      </div>
    </div>
    <div class="hashtag__mobile m-5">
      <div v-for="(item, i) in hashtag" :key="i" :class="item.class" v-if="i < 2">
        <div class="center" @mouseenter="hover.splice(i, 1, !hover[i])" @mouseout="hover.splice(i, 1, !hover[i])">
          <transition>
            <div class="icon__collections__hashtag">
              <div>
                <div class="card__text text__stories">
                  <div class="flex ">
                    <nuxt-link :to="`/shop`" :title="item.title" :aria-label="item.title">
                      <div class="button__hashtag">
                        <button color="black">SHOP THIS LOOK</button>
                      </div>
                    </nuxt-link>

                  </div>

                </div>


              </div>
            </div>
          </transition>

          <nuxt-link :to="`/posts/${item.title}`" :title="item.title" :aria-label="item.title">
            <img :src="item.image ? item.image.url : null"
              sizes="(min-width: 1100px) 535px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
              alt="(Product 10) Sample - Clothing And Accessory Boutiques For Sale" class=" ls-is-cached lazyloaded">

          </nuxt-link>




        </div>
      </div>
    </div>




  </div>


</template>
<script>
export default {
  data() {
    return {
      loading: true,
      hover: [false, false, false, false],
      posts: this.$settings.sections.products_4.collections,
      banner: this.$settings.sections.banner,
      description: "(Product 8) Sample - Clothing And Accessory Boutiques For Sale",

      hashtag: [],
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
      bestSellers: [],
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
      ],
      stories: this.$settings.sections.products_5.collections,


    };
  },
  async fetch() {
    const { data } = await this.$storeino.pages.search({ type: 'POST' })
    this.hashtag = data.results
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
    await this.getBestSellers();
    await this.getCollections();
    await this.getBrands();
  },
  watch: {
    parentWidth(val, oldVal) {
      console.log(val, oldVal);
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
  methods: {
    move(n) {
      var get = 'pop', set = 'unshift', width = document.querySelector('.carousel-item') ? document.querySelector('.carousel-item').offsetWidth : 360;
      if (n == 1) { get = 'shift', set = 'push', width = `-${width}` };
      document.querySelector('.carousel').style.transform = `translateX(${width}px)`;
      document.querySelector('.carousel').style.transition = `500ms`;
      setTimeout(() => {
        document.querySelector('.carousel').style.transform = `translateX(0px)`;
        document.querySelector('.carousel').style.transition = `none`;
        const el = this.items[get]();
        this.items[set](el);
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
    async getBestSellers() {
      this.bestSellers = this.items.filter(function (elt) { return elt.tags[0] == "bestSellers"; });
    },
  },
  mounted() {
    this.$nextTick(() => {
      var element = document.querySelector('.carousel-container')
      if (element) {
        this.parentWidth = element.clientWidth;
        window.onresize = (ev) => {
          this.parentWidth = element.clientWidth;
        }
      }
    })
  },
}
</script>
<style>
.img__box__ {
  margin-left: 30px;
  width: 100%;
}

.icon__collections__stories {
  position: relative;
  top: 400px;
  color: rgba(240, 248, 255, 0.343);
  left: 20px;
}

.card__cloths {
  width: 500px;
}

.text__stories {
  color: rgb(0, 0, 0);
}

.descr {
  position: relative;
  top: 40px;
  left: 200px;
}

.icon__collections__hashtag {

  position: relative;
  top: 100px;
  color: rgba(240, 248, 255, 0.343);
  left: 20px;
}

.button__hashtag {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  width: 200px;
  height: 55px;
  text-align: center;
  padding-top: 15px;
  position: relative;
  top: 70px;

}

.button__hashtag:hover {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  width: 200px;
  height: 55px;
  text-align: center;
  padding-top: 15px;
  position: relative;
  top: 70px;
  ;


}

.halo__parag {
  background-color: rgba(184, 187, 190, 0.606);
  margin-top: 30px;
}

.halo__image {
  padding-top: 20px;
  position: relative;
  left: 400px;
  width: 319px;
  height: 75px;
}

.halo__text_first {
  padding-top: 80px;
  padding: 80px 40px 40px 40px;
}

.halo__text_seconde {
  padding-top: 80px;
  padding: 20px 40px 40px 40px;
}

.halo__button {
  margin-top: 40px;
  margin-left: 400px;
  display: flex;
  padding-bottom: 70px;
  margin-bottom: 70px;

}

.hashtag__mobile {
  display: none;
}
</style>