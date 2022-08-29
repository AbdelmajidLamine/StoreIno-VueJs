<template>
    <div>
        <si-app-loader placement="BEFORE_HEADER" />
        <div class="header__desktop bg-black p-1 relative">
            <div class="flex p-2 justify-between items-center container">
                <div class="flex h-full justify-start items-center w-2/5">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto flex mx-5">
                           
                            <router-link to="/">
                        <si-image width="70" height="50" property="height" class="h-12 w-full w-full object-contain"
                            :src="section.logo ? section.logo.src : $store.state.defaults.logo" alt="Store logo" />
                    </router-link>

                        </ul>
                    </div>



                    <button @click="iconMenu = iconMenu == 'currency' ? null : 'currency'"
                        v-if="$settings.sections.header.icons.currency && $settings.store_currencies.length > 1"
                        title="Currency" class="item hidden md:block p-1.5 bg-gray-100 rounded-md hover:bg-gray-200">
                        <span class="text-sm">{{ $store.state.currency.code }}</span>
                    </button>
                    <div v-if="$settings.sections.header.icons.language && $settings.store_languages.length > 1"
                        class="relative mx-1">
                        <div v-if="iconMenu == 'language'"
                            class="absolute rounded-md flex flex-col top-5 z-50 bg-gray-100">
                            <a class="whitespace-nowrap m-1 p-2 bg-white" v-for="lang of $settings.store_languages"
                                :key="lang.code" :href="`?lang=${lang.code}`">{{ lang.name }} ( {{ lang.code }} )</a>
                        </div>
                    </div>
                    <button @click="iconMenu = iconMenu == 'language' ? null : 'language'"
                        v-if="$settings.sections.header.icons.language && $settings.store_languages.length > 1"
                        title="Language" class="item hidden md:block p-1.5 bg-gray-100 rounded-md hover:bg-gray-200">
                        <span class="text-sm">{{ $store.state.language.code }}</span>
                    </button>
                </div>
                <div class="logo flex justify-center items-center px-5 w-1/5">
                    <!-- <router-link to="/">
                        <si-image width="70" height="50" property="height" class="h-12 w-full w-full object-contain"
                            :src="section.logo ? section.logo.src : $store.state.defaults.logo" alt="Store logo" />
                    </router-link> -->
                </div>
                <div class="icons flex items-center justify-end w-2/5">
                    <form @submit.prevent="search" class="flex form" action="/shop?"
                        v-if="$settings.sections.header.icons.search">

                        <button class="button__search" aria-label="Search for anything">
                            <si-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"
                                    focusable="false" role="presentation" class="icon">
                                    <path fill="#ffffff"
                                        d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z">
                                    </path>
                                </svg></si-svg>
                        </button>
                        <input type="search" name="q" v-model="q" class="form-input" :placeholder="'Search for products'">


                        <small v-if="$route.query.search"
                            class="-top-1 -right-1 rounded-full absolute w-1 h-1 p-1 bg-green-700 text-white flex justify-center items-center"></small>
                    </form>
                    <router-link v-if="$settings.sections.header.icons.account" to="/account/orders" title="Account" class="p-2 rounded-md mx-3 header__icon relative">
                        <si-svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"
                                focusable="false" role="presentation" class="icon icon-account">
                                <path fill="#ffffff"
                                    d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 16 8 C 13.25 8 11 10.25 11 13 C 11 14.515625 11.707031 15.863281 12.78125 16.78125 C 10.53125 17.949219 9 20.300781 9 23 L 11 23 C 11 20.226563 13.226563 18 16 18 C 18.773438 18 21 20.226563 21 23 L 23 23 C 23 20.300781 21.46875 17.949219 19.21875 16.78125 C 20.292969 15.863281 21 14.515625 21 13 C 21 10.25 18.75 8 16 8 Z M 16 10 C 17.667969 10 19 11.332031 19 13 C 19 14.667969 17.667969 16 16 16 C 14.332031 16 13 14.667969 13 13 C 13 11.332031 14.332031 10 16 10 Z">
                                </path>
                            </svg></si-svg>

                    </router-link>

                    <router-link v-if="$settings.sections.header.icons.wishlist" to="/wishlist" title="Wishlist"
                        class="item md:block p-2 rounded-md mx-3 header__icon relative">
                        <si-svg><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon icon-wishlist">
                                <path fill="#ffffff"
                                    d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                                    class=""></path>
                            </svg></si-svg>
                        <small
                            class="-top-2 -right-2 rounded-full absolute w-5 h-5 p-2 bg-red-700 text-white flex justify-center items-center">{{
                                    $store.state.wishlist.length
                            }}</small>
                    </router-link>
                    <router-link v-if="$settings.sections.header.icons.cart" to="/cart" title="Cart" id="cart-icon"
                        class="item md:block p-2 rounded-md mx-3 header__icon relative">
                        <si-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon-cart"
                                aria-hidden="true" focusable="false" role="presentation">
                                <path fill="#ffffff"
                                    d="M 16 3 C 13.253906 3 11 5.253906 11 8 L 11 9 L 6.0625 9 L 6 9.9375 L 5 27.9375 L 4.9375 29 L 27.0625 29 L 27 27.9375 L 26 9.9375 L 25.9375 9 L 21 9 L 21 8 C 21 5.253906 18.746094 3 16 3 Z M 16 5 C 17.65625 5 19 6.34375 19 8 L 19 9 L 13 9 L 13 8 C 13 6.34375 14.34375 5 16 5 Z M 7.9375 11 L 11 11 L 11 14 L 13 14 L 13 11 L 19 11 L 19 14 L 21 14 L 21 11 L 24.0625 11 L 24.9375 27 L 7.0625 27 Z">
                                </path>
                            </svg></si-svg>
                        <small
                            class="-top-2 -right-2 rounded-full absolute w-5 h-5 p-2 bg-red-700 text-white flex justify-center items-center">{{
                                    $store.state.cart.length
                            }}</small>
                    </router-link>
                </div>

            </div>



        </div>

        <div class="header__mobile">
            <div class="bg-white mb-2 relative">
                <div class="flex p-2 justify-between items-center container">
                    <div class="flex h-full justify-start items-center w-1/3">
                        <button @click="$store.state.showHeaderMenu = !$store.state.showHeaderMenu"
                            aria-label="Search button"
                            class="flex flex-col p-2 bg-gray-100 rounded-md hover:bg-gray-200">
                            <si-svg><svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="bars"
                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                    class="w-5 h-5 translate">
                                    <g class="fa-group">
                                        <path fill="currentColor"
                                            d="M16 288h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16z"
                                            class="fa-secondary"></path>
                                        <path fill="currentColor"
                                            d="M432 384H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 80v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16z">
                                        </path>
                                    </g>
                                </svg></si-svg>
                        </button>
                        <div v-if="$settings.sections.header.icons.currency && $settings.store_currencies.length > 1"
                            class="relative mx-1">
                            <div v-if="iconMenu == 'currency'"
                                class="absolute rounded-md flex flex-col top-5 z-50 bg-gray-100">
                                <a class="whitespace-nowrap m-1 p-2 bg-white" v-for="cur of $settings.store_currencies"
                                    :key="cur.code" :href="`?cur=${cur.code}`">{{ cur.name }} ( {{ cur.code }} )</a>
                            </div>
                        </div>
                        <button @click="iconMenu = iconMenu == 'currency' ? null : 'currency'"
                            v-if="$settings.sections.header.icons.currency && $settings.store_currencies.length > 1"
                            title="Currency"
                            class="item hidden md:block p-1.5 bg-gray-100 rounded-md hover:bg-gray-200">
                            <span class="text-sm">{{ $store.state.currency.code }}</span>
                        </button>
                        <div v-if="$settings.sections.header.icons.language && $settings.store_languages.length > 1"
                            class="relative mx-1">
                            <div v-if="iconMenu == 'language'"
                                class="absolute rounded-md flex flex-col top-5 z-50 bg-gray-100">
                                <a class="whitespace-nowrap m-1 p-2 bg-white" v-for="lang of $settings.store_languages"
                                    :key="lang.code" :href="`?lang=${lang.code}`">{{ lang.name }} ( {{ lang.code }}
                                    )</a>
                            </div>
                        </div>
                        <button @click="iconMenu = iconMenu == 'language' ? null : 'language'"
                            v-if="$settings.sections.header.icons.language && $settings.store_languages.length > 1"
                            title="Language"
                            class="item hidden md:block p-1.5 bg-gray-100 rounded-md hover:bg-gray-200">
                            <span class="text-sm">{{ $store.state.language.code }}</span>
                        </button>
                    </div>
                    <div class="logo flex justify-center items-center w-1/3">
                        <router-link to="/">
                            <si-image width="70" height="50" property="height" class="h-12 w-full w-full object-contain"
                                :src="section.logo ? section.logo.src : $store.state.defaults.logo" alt="Store logo" />
                        </router-link>
                    </div>
                    <div class="icons flex items-center justify-end w-1/3">
                        <button v-if="$settings.sections.header.icons.search" @click="showSearch = true"
                            aria-label="Search button"
                            class="item p-2 bg-white-100 rounded-md mx-1 hover:bg-white-200 header__icon relative">
                            <si-svg><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="search"
                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                    class="w-5 h-5 translate">
                                    <path fill="currentColor"
                                        d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                                        class=""></path>
                                </svg></si-svg>
                            <small v-if="$route.query.search"
                                class="-top-1 -right-1 rounded-full absolute w-1 h-1 p-1 bg-green-700 text-white flex justify-center items-center"></small>
                        </button>
                        <router-link v-if="$settings.sections.header.icons.account" to="/account/orders" title="Account"
                            class="item hidden md:block p-2 bg-white-100 rounded-md mx-1 hover:bg-white-200 header__icon">
                            <si-svg><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user"
                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                    class="w-5 h-5 translate">
                                    <path fill="currentColor"
                                        d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                                        class=""></path>
                                </svg></si-svg>

                        </router-link>
                        <router-link v-if="$settings.sections.header.icons.wishlist" to="/wishlist" title="Wishlist"
                            class="item hidden md:block p-2 bg-white-100 rounded-md mx-1 hover:bg-white-200 header__icon relative">
                            <si-svg><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart"
                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                    class="icon icon-wishlist">
                                    <path
                                        d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                                        class=""></path>
                                </svg></si-svg>
                            <small
                                class="-top-2 -right-2 rounded-full absolute w-5 h-5 p-2 bg-red-700 text-white flex justify-center items-center">{{
                                        $store.state.wishlist.length
                                }}</small>
                        </router-link>
                        <router-link v-if="$settings.sections.header.icons.cart" to="/cart" title="Cart" id="cart-icon"
                            class="item p-2 bg-white-100 rounded-md mx-1 hover:bg-white-200 header__icon relative">
                            <si-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon-cart"
                                    aria-hidden="true" focusable="false" role="presentation">
                                    <path
                                        d="M 16 3 C 13.253906 3 11 5.253906 11 8 L 11 9 L 6.0625 9 L 6 9.9375 L 5 27.9375 L 4.9375 29 L 27.0625 29 L 27 27.9375 L 26 9.9375 L 25.9375 9 L 21 9 L 21 8 C 21 5.253906 18.746094 3 16 3 Z M 16 5 C 17.65625 5 19 6.34375 19 8 L 19 9 L 13 9 L 13 8 C 13 6.34375 14.34375 5 16 5 Z M 7.9375 11 L 11 11 L 11 14 L 13 14 L 13 11 L 19 11 L 19 14 L 21 14 L 21 11 L 24.0625 11 L 24.9375 27 L 7.0625 27 Z">
                                    </path>
                                </svg></si-svg>
                            <small
                                class="-top-2 -right-2 rounded-full absolute w-5 h-5 p-2 bg-red-700 text-white flex justify-center items-center">{{
                                        $store.state.cart.length
                                }}</small>
                        </router-link>
                    </div>
                </div>
                <div v-if="showSearch" class="flex items-center justify-center absolute inset-0 z-20">
                    <div class="bg-white absolute w-full p-2">
                        <form @submit.prevent="search"
                            class="search flex container bg-gray-50 p-2 rounded-md border border-gray-200"
                            action="/shop?">
                            <button type="button" @click="showSearch = false" aria-label="Search button">
                                <si-svg><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times"
                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                                        class="w-5 h-5 translate">
                                        <path fill="currentColor"
                                            d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                                            class=""></path>
                                    </svg></si-svg>
                            </button>
                            <input autofocus v-model="q" class="bg-transparent outline-none w-full px-2"
                                :placeholder="'Search for products'" type="search" name="q">
                            <button aria-label="Search button">
                                <si-svg><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="search"
                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                        class="w-5 h-5 translate">
                                        <path fill="currentColor"
                                            d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                                            class=""></path>
                                    </svg></si-svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <si-app-loader placement="AFTER_HEADER" />
    </div>
</template>
<script>

export default {
    data() {
        return {
            showSearch: false,
            iconMenu: null,
            q: this.$route.query.search,
            section: this.$settings.sections.header
        }
    },
    watch: {
        showSearch(val) {
            if (val) {
                this.$nextTick(() => {
                    document.querySelector('form.search input').focus();
                })
            }
        }


    },
    methods: {
        search() {
            this.$store.state.search = this.q;
            this.$router.push({ path: '/shop', query: { search: this.q } });
            this.showSearch = false;
        }
    },
}
</script>


<style>
.animateli {
    color: rgb(255, 255, 255);
}

.animateli:hover {
    color: rgb(206, 32, 32);
    text-decoration: none;
}


.form {

    position: relative;
    padding-left: 12px;
    margin-right: 10px;
    text-indent: 30px;
    border-radius: 20px;
    background-color: rgb(66, 64, 64);
}

.form .fa-search {

    position: absolute;
    top: 12px;
    left: 18px;
    color: #f6f9fc;



}

.form-input {

    height: 40px;
    width: 250px;
    margin-right: 20px;
    padding-left: 12px;
    background-color: rgb(66, 64, 64);
    font-size: 14px;
    color: white;
    font-family: Arial, sans-serif;
}

.header__icon svg path {
    fill: #ffffff;
    color: #ffffff;
}


.header__icon .icon {
    display: block;
    width: 35px;
    height: 35px;
    fill: currentColor;
    stroke: transparent;
}


.header__icon svg path :hover {
    fill: currentcolor;
    color: red
}

.button__search .icon {
    height: 20px;
    width: 20px;
    padding-top: 5px;
}

.header__mobile {
    display: none;
}

@media (max-width: 768px) {

       .halo__image {
        padding-top: 20px;
        position: relative;
        left: 170px;
        width: 150px;
        height: 75px;
    }

    .halo__button {
        margin-left: -30px;
        display: grid;
        margin-bottom: 70px;
        padding-bottom: 70px;
    }

    .header__icon .icon {
        display: block;
        width: 25px;
        height: 25px;
        fill: currentColor;
        stroke: transparent;
    }

    .descr {
        position: relative;
        top: 40px;
        left: 20px;
    }

    .hashtag__desktop {
        display: none;
    }

    .hashtag__mobile {
        display: flex;
    }

    .search__mobile{
        position: relative;
        top: -80px;
    }

 
    @keyframes scroll {
    100% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);

    }
   }
    .header__desktop {
        display: none;
    }

    .header__mobile {
        display: grid;
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

    .icon__collections {


        position: relative;
        top: 100px;
        left: 400px;
        width: 20px;
        height: 20px;
        display: grid;


    }

    .button__bunner__right {
        position: relative;
        top: 250px;
        left: 390px;
    }

 
    .footer_menu_mobile{
        display: grid;
        width: 100%;
    }

    .footer_menu_desktop{
        display: none;
    }

    .methods_icon{
    position: relative;
    left: 40px;
  }

  .copyright__text{
    padding-left:30px;
  }

  .bottomMenu{
    padding-left: 20px;
  }

   .copyright{
    text-align: center;
    background-color: rgb(56, 54, 54);
    margin-bottom: 70px;
  }
}

@media only screen and (max-width:968px) and (min-width:600px)

{
  .header__desktop {
        display: none;
    }

    .header__mobile {
        display: grid;
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

    .icon__collections {


        position: relative;
        top: 100px;
        left: 400px;
        width: 20px;
        height: 20px;
        display: grid;


    }

    .button__bunner__right {
        position: relative;
        top: 250px;
        left: 550px;
    }

    .halo__image {
        padding-top: 20px;
        position: relative;
        left: 280px;
        width: 150px;
        height: 75px;
    }

    .halo__button {
        margin-left: -30px;
        display: grid;
        margin-bottom: 70px;
        padding-bottom: 70px;
    }

    .header__icon .icon {
        display: block;
        width: 25px;
        height: 25px;
        fill: currentColor;
        stroke: transparent;
    }

    .descr {
        position: relative;
        top: 40px;
        left: 20px;
    }

    .hashtag__desktop {
        display: none;
    }

    .hashtag__mobile {
        display: flex;
    }

    .search__mobile{
        position: relative;
        top: -80px;
    }

    .footer_menu_mobile{
        display: grid;
        width: 100%;
    }

    .footer_menu_desktop{
        display: none;
    }

    .methods_icon{
    position: relative;
    left: 40px;
  }

  .copyright__text{
    padding-left:30px;
  }

  .bottomMenu{
    padding-left: 50px;
  }

 

}

</style>
