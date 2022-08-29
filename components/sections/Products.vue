<template>
    <div class="container">
        <div class="wrap">
            <h2 class="centre-line">
                <span>
                    {{ $settings.sections.products_3.title }}
                </span>
            </h2>
        </div>
        <div class="cards__cloths" v-if="newArrival.length > 0">
            <si-carousel v-if="$settings.sections.products_2.active" component="si-product"
                :title="$settings.sections.products_3.title" :list="newArrival" itemClass="w-full"></si-carousel>
        </div>

        <div v-if="!loading && items.length == 0" class="flex flex-wrap items-center bg-white p-2 mx-2 border rounded">
            <div class="w-full md:w-1/2">
                <svg class="h-40 max-w-full text-gray-400 translate" xmlns="http://www.w3.org/2000/svg" version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512"
                    height="512" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512"
                    xml:space="preserve">
                    <g>
                        <g xmlns="http://www.w3.org/2000/svg" id="Send_package" data-name="Send package">
                            <path
                                d="M61,44H54V43a1,1,0,0,0-1-1H45a1,1,0,0,0-1,1v1.719l-6.256-1.564a3.012,3.012,0,0,0-1.5.013L20.32,47.434a3.964,3.964,0,0,0-2.259,1.629l-9.753-5.63a4,4,0,0,0-4,6.933L22.035,60.6a3,3,0,0,0,1.5.4H40.528a3.014,3.014,0,0,0,1.341-.316L44,59.618V61a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V60h7a1,1,0,0,0,1-1V45A1,1,0,0,0,61,44ZM40.975,58.9a1.016,1.016,0,0,1-.447.1H23.536a1,1,0,0,1-.5-.134L5.312,48.635A2.007,2.007,0,0,1,4.588,45.9a2.034,2.034,0,0,1,2.722-.731l10.074,5.816a3.982,3.982,0,0,0,5.007,4.179l11.925-3.195a1,1,0,0,0-.517-1.932l-11.926,3.2a2,2,0,1,1-1.035-3.863L36.76,45.1a1,1,0,0,1,.5,0L44,46.781v10.6ZM52,60H46V44h6Zm8-2H54V46h6Z"
                                fill="currentColor" data-original="#000000" style=""></path>
                            <path
                                d="M41.9,10.553l-4-8A1,1,0,0,0,37,2H9a1,1,0,0,0-.895.553l-4,8A1.78,1.78,0,0,0,4,11V39a1,1,0,0,0,1,1H41a1,1,0,0,0,1-1V11A1.78,1.78,0,0,0,41.9,10.553ZM39.382,10H27.78l-1.5-6h10.1ZM20,12h6v9.382l-2.553-1.277a1,1,0,0,0-.894,0L20,21.382Zm4.219-8,1.5,6H20.281l1.5-6ZM9.618,4h10.1l-1.5,6H6.618ZM40,38H6V12H18V23a1,1,0,0,0,1.447.895L23,22.118,26.553,23.9A1,1,0,0,0,28,23V12H40Z"
                                fill="currentColor" data-original="#000000" style=""></path>
                        </g>
                    </g>
                </svg>
            </div>
            <div class="w-full md:w-1/2 border-l pl-4">
                <h2>{{ 'You don\'t have any products' }}</h2>
                <p>{{ 'Go to your store admin > products >' }} <a href="//business.storeino.com/stores/products"
                        target="_blank" class=" text-blue-600">{{ 'Add new' }}</a></p>
                <a href="https://palest.storeino.com" target="_blank"
                    class="text-blue-600 border p-2 rounded-md inline-block mt-1">{{ 'View theme demo' }}</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        section: { type: Object, required: true }
    },
    data() {
        return {
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
            newArrival: [],
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
        }
    },
    watch: {
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
        await this.getNewArrival();
        await this.getCollections();
        await this.getBrands();
    },
    methods: {
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
        async getNewArrival() {
            this.newArrival = this.items.filter(function (elt) { return elt.tags[0] == "newArrival"; });
        },
    },
};
</script>
