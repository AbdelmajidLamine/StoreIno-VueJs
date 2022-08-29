<template>
    <div>
        <div class="design header__desktop">

            <nav class="flex px-5">

                <div class="flex">
                    <div class="customer_service_icon">
                        <si-svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true"
                                focusable="false" role="presentation">
                                <path fill="#FFA726"
                                    d="M10 22A4 4 0 1 0 10 30 4 4 0 1 0 10 22zM38 22A4 4 0 1 0 38 30 4 4 0 1 0 38 22z">
                                </path>
                                <path fill="#FFB74D"
                                    d="M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z">
                                </path>
                                <path fill="#FF5722"
                                    d="M24,3C14.6,3,7,10.6,7,20c0,1.2,0,3.4,0,3.4L9,25v-3l21-9.8l9,9.8v3l2-1.6c0,0,0-2.1,0-3.4C41,12,35.3,3,24,3z">
                                </path>
                                <path fill="#784719"
                                    d="M31 24A2 2 0 1 0 31 28 2 2 0 1 0 31 24zM17 24A2 2 0 1 0 17 28 2 2 0 1 0 17 24z">
                                </path>
                                <path fill="#757575"
                                    d="M43,24c-0.6,0-1,0.4-1,1v-7c0-8.8-7.2-16-16-16h-7c-0.6,0-1,0.4-1,1s0.4,1,1,1h7c7.7,0,14,6.3,14,14v10c0,0.6,0.4,1,1,1s1-0.4,1-1v2c0,3.9-3.1,7-7,7H24c-0.6,0-1,0.4-1,1s0.4,1,1,1h11c5,0,9-4,9-9v-5C44,24.4,43.6,24,43,24z">
                                </path>
                                <g>
                                    <path fill="#37474F"
                                        d="M43 22h-1c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-4C45 22.9 44.1 22 43 22zM24 36A2 2 0 1 0 24 40 2 2 0 1 0 24 36z">
                                    </path>
                                </g>
                            </svg>
                        </si-svg>

                    </div>
                    <div class="customer_service_text">
                        Call Us <a href="tel:(+84)%90-12345/">(+84) 00-12345</a> or<br> <a class="btn" href="#"
                            role="button"><strong>Live Chat</strong></a>
                    </div>
                </div>

                <div class="collapse navbar-collapse " id="navbarSupportedContent">

                    <ul class="team navbar-nav mr-auto flex text-center">

                        <li v-for="(item, i) in menu.items" :key="i"
                            class="dropdown nav-item flex d-md-flex align-items-center ">
                            <div @mouseenter="isOpen.splice(i, 1, true)" class="menu-item menu__global__items">
                                <a class="nav-link" :href="item.url">{{ item.text }} <span
                                        class="sr-only">(current)</span></a>
                            </div>

                        </li>

                    </ul>
                </div>

                <div class="pos">
                    <button type="button"
                        class="disclosure__button dropdown-toggle localization-form__select localization-selector link"
                        aria-controls="HeaderLanguageList" aria-describedby="HeaderLanguageLabel" aria-label="English"
                        @click="activeId = !activeId">
                        <span class="icon">
                            <si-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                    <path fill="#3f51b5"
                                        d="M19,4.656c-4.055,1.046-7.612,3.316-10.243,6.413L19,17.331V4.656z"
                                        aria-hidden="true" focusable="false" role="presentation"></path>
                                    <path fill="#3f51b5"
                                        d="M8.605,36.764c2.644,3.185,6.265,5.515,10.395,6.581V30.41L8.605,36.764z">
                                    </path>
                                    <path fill="#fff" d="M4.656,29c0.013,0.052,0.026,0.103,0.04,0.155L4.948,29H4.656z">
                                    </path>
                                    <path fill="#3f51b5"
                                        d="M39.576,11.469C36.916,8.168,33.228,5.746,29,4.656v13.277L39.576,11.469z">
                                    </path>
                                    <path fill="#3f51b5"
                                        d="M29,43.344c4.303-1.11,8.041-3.603,10.711-6.994L29,29.804V43.344z"></path>
                                    <path fill="#fff"
                                        d="M4.753,18.621C4.718,18.746,4.688,18.874,4.656,19h0.717L4.753,18.621z">
                                    </path>
                                    <path fill="#fff"
                                        d="M43.751,21c-0.095-0.63-0.218-1.249-0.37-1.858L40.342,21H43.751z"></path>
                                    <path fill="#fff"
                                        d="M5.373,19H4.656c-0.169,0.655-0.304,1.321-0.407,2h4.396L5.373,19z"></path>
                                    <path fill="#fff"
                                        d="M43.44,28.629c0.127-0.535,0.228-1.079,0.311-1.629h-2.977L43.44,28.629z">
                                    </path>
                                    <path fill="#fff" d="M8.22,27H4.249c0.102,0.679,0.238,1.345,0.407,2h0.293L8.22,27z">
                                    </path>
                                    <path fill="#fff"
                                        d="M21,18.553V4.249c-0.679,0.102-1.345,0.238-2,0.407v12.675L21,18.553z">
                                    </path>
                                    <path fill="#fff"
                                        d="M27,28.582v15.169c0.679-0.102,1.345-0.238,2-0.407v-13.54L27,28.582z">
                                    </path>
                                    <path fill="#fff"
                                        d="M19,30.41v12.934c0.655,0.169,1.321,0.304,2,0.407V29.188L19,30.41z">
                                    </path>
                                    <path fill="#fff"
                                        d="M27.185,18.694l0.284,0.174L29,17.932V4.656c-0.655-0.169-1.321-0.304-2-0.407v14.748L27.185,18.694z">
                                    </path>
                                    <path fill="#fff"
                                        d="M8.645,21h9.39L21,19.188v-0.634l-2-1.223L8.757,11.069c-0.854,1.006-1.613,2.094-2.258,3.257 L14.05,19H8.594l-3.293-2.047c-0.206,0.546-0.39,1.101-0.549,1.668L5.373,19L8.645,21z">
                                    </path>
                                    <path fill="#fff"
                                        d="M27.469,18.868L30.957,21h9.385l3.039-1.858c-0.325-1.3-0.775-2.547-1.341-3.732L36.278,19h-5.456 l9.812-6.1c-0.331-0.494-0.687-0.969-1.059-1.431L29,17.932L27.469,18.868z">
                                    </path>
                                    <path fill="#e53935"
                                        d="M14.05,19L6.5,14.326c-0.465,0.839-0.856,1.72-1.198,2.627L8.594,19H14.05z">
                                    </path>
                                    <path fill="#e53935"
                                        d="M36.278,19l5.763-3.59c-0.415-0.87-0.874-1.714-1.406-2.509L30.822,19H36.278z">
                                    </path>
                                    <path fill="#fff"
                                        d="M27,27v1.582l2,1.222l10.711,6.547c0.772-0.981,1.456-2.033,2.036-3.15L34.971,29h5.456l2.459,1.534 c0.215-0.622,0.4-1.256,0.553-1.904L40.774,27H27z">
                                    </path>
                                    <polygon fill="#fff" points="30.957,21 27.469,18.868 27.185,18.694 27,18.997 27,21">
                                    </polygon>
                                    <path fill="#fff"
                                        d="M21,29.188V27H8.22l-3.272,2l-0.253,0.155c0.352,1.321,0.832,2.587,1.433,3.786L12.329,29h5.456 L7.603,35.433c0.318,0.456,0.648,0.904,1.002,1.331L19,30.41L21,29.188z">
                                    </path>
                                    <polygon fill="#fff" points="18.035,21 21,21 21,19.188"></polygon>
                                    <path fill="#e53935"
                                        d="M34.971,29l6.775,4.2c0.444-0.854,0.821-1.746,1.14-2.667L40.427,29H34.971z">
                                    </path>
                                    <path fill="#e53935"
                                        d="M12.329,29l-6.201,3.941c0.435,0.868,0.923,1.702,1.475,2.492L17.785,29H12.329z">
                                    </path>
                                    <path fill="#e53935"
                                        d="M30.957,21H27v6h13.774h2.977C43.899,26.019,44,25.022,44,24s-0.101-2.019-0.249-3h-3.409H30.957z">
                                    </path>
                                    <path fill="#e53935"
                                        d="M21,27v-6h-2.965h-9.39H4.249C4.101,21.981,4,22.978,4,24s0.101,2.019,0.249,3H8.22H21z">
                                    </path>
                                    <path fill="#e53935"
                                        d="M27,43.751V28.582V27v-6v-2.003V4.249C26.019,4.101,25.022,4,24,4s-2.019,0.101-3,0.249v14.304v0.634 V21v6v2.188v14.563C21.981,43.899,22.978,44,24,44S26.019,43.899,27,43.751z">
                                    </path>
                                </svg></si-svg>
                        </span></button>
                    <div class="flex">
                        <ul v-for="(items, i) in otherMenu" :key="i" class="flex" v-if="activeId">
                            <div v-for="(item, i) in items.childrens" :key="i" class="bg-gray-100">
                                <a class="p-2 m-1 rounded-md bg-gray-50 hover:bg-white hover:text-green-700 flex"
                                    :href="item.url">{{ item.text }}</a>
                                <ul class="p-2" v-if="item.childrens && item.childrens.length > 0">
                                    <li v-for="(child, ii) in item.childrens" :key="ii">
                                        <a class="p-2 m-1 rounded-md bg-gray-50 hover:bg-white hover:text-green-700 flex"
                                            :href="child.url">
                                            {{ child.text }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>

        <div class="header__mobile">
            <div class="flex fixed inset-0 z-20" v-if="show">
                <div v-if="$store.state.showHeaderMenu" :class="$store.state.showHeaderMenu ? 'opacity-50' : 'opacity-0'"
                    class="flex transition-all delay-500 fixed inset-0 bg-black"
                    @click="$store.state.showHeaderMenu = false"></div>
                <transition name="slideleft">
                    <div :class="$store.state.showHeaderMenu ? 'move-in' : 'move-out'"
                        class="transition-all delay-500 max-w-full relative flex flex-col bg-gray-100 w-80">
                        <div class="w-full flex justify-end bg-white">
                            <button @click="$store.state.showHeaderMenu = false" aria-label="Search button"
                                class="item p-1 bg-gray-100 rounded-md m-1 hover:bg-gray-200">
                                <si-svg><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times"
                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                                        class="w-5 h-5 translate">
                                        <path fill="currentColor"
                                            d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                                            class=""></path>
                                    </svg></si-svg>
                            </button>
                        </div>
                        <div v-if="menu">
                            <ul v-for="(item, i) in menu.items" :key="i" class="flex flex-col">
                                <li class="flex items-center mb-1 justify-between w-full rounded-md bg-white">
                                    <router-link class="p-2 m-1 w-full flex hover:text-green-700" :to="item.url">{{
                                            item.text
                                    }}</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="border-t border-b p-2 bg-white my-2 flex justify-center">
                            <router-link v-if="$settings.sections.header.icons.account" to="/account/orders"
                                title="Account"
                                class="item p-2 bg-white-100 rounded-md mx-1 hover:bg-white-200 header__icon">
                                <si-svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"
                                        focusable="false" role="presentation" class="icon icon-account">
                                        <path
                                            d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 16 8 C 13.25 8 11 10.25 11 13 C 11 14.515625 11.707031 15.863281 12.78125 16.78125 C 10.53125 17.949219 9 20.300781 9 23 L 11 23 C 11 20.226563 13.226563 18 16 18 C 18.773438 18 21 20.226563 21 23 L 23 23 C 23 20.300781 21.46875 17.949219 19.21875 16.78125 C 20.292969 15.863281 21 14.515625 21 13 C 21 10.25 18.75 8 16 8 Z M 16 10 C 17.667969 10 19 11.332031 19 13 C 19 14.667969 17.667969 16 16 16 C 14.332031 16 13 14.667969 13 13 C 13 11.332031 14.332031 10 16 10 Z">
                                        </path>
                                    </svg></si-svg>
                            </router-link>
                            <router-link v-if="$settings.sections.header.icons.wishlist" to="/wishlist" title="Wishlist"
                                class="item p-2 bg-white-100 rounded-md mx-1 hover:bg-white-200 header__icon relative">
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
                        </div>
                        <div>
                            <ul v-for="(item, i) in otherMenu" :key="i" class="flex flex-col">
                                <li class="flex items-center mb-1 justify-between w-full rounded-md bg-white">
                                    <a class="p-2 m-1 w-full flex hover:text-green-700" :href="item.url">{{ item.text
                                    }}</a>
                                    <button class="bg-white p-2 mx-1"
                                        @click="activeId = activeId != item._id ? item._id : null">
                                        <svg v-if="item.childrens && item.childrens.length > 0" class="w-3 transform"
                                            :class="activeId == item._id ? 'rotate-180' : ''"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                                            viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;"
                                            xml:space="preserve">
                                            <path
                                                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                                        </svg>
                                    </button>
                                </li>
                                <transition name="slide">
                                    <div v-if="item._id == activeId">
                                        <div v-for="(item, i) in item.childrens" :key="i" class="bg-gray-100">
                                            <a class="p-2 m-1 rounded-md bg-gray-50 hover:bg-white hover:text-green-700 flex"
                                                :href="item.url">{{ item.text }}</a>
                                            <ul class="p-2" v-if="item.childrens && item.childrens.length > 0">
                                                <li v-for="(child, ii) in item.childrens" :key="ii">
                                                    <a class="p-2 m-1 rounded-md bg-gray-50 hover:bg-white hover:text-green-700 flex"
                                                        :href="child.url">
                                                        {{ child.text }}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </transition>
                            </ul>
                        </div>
                    </div>
                </transition>
            </div>

            <div class="bottombar">
                <div class="bottomMenu">
                    <router-link to="/" title="HOME"
                        class="item p-2 bg-white-100 rounded-md mx-1 header__icon"><svg aria-hidden="true" class="icon"
                            focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M573.48 219.91L310.6 8a35.85 35.85 0 0 0-45.19 0L2.53 219.91a6.71 6.71 0 0 0-1 9.5l14.2 17.5a6.82 6.82 0 0 0 9.6 1L64 216.72V496a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V216.82l38.8 31.29a6.83 6.83 0 0 0 9.6-1l14.19-17.5a7.14 7.14 0 0 0-1.11-9.7zM240 480V320h96v160zm240 0H368V304a16 16 0 0 0-16-16H224a16 16 0 0 0-16 16v176H96V190.92l187.71-151.4a6.63 6.63 0 0 1 8.4 0L480 191z">
                            </path>
                        </svg>
                        <span class="label">Home</span>
                    </router-link>
                </div>

                <div class="bottomMenu">
                    <router-link to="/" title="Account"
                        class="item p-2 bg-white-100 rounded-md mx-1 header__icon"><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon-search"
                            aria-hidden="true" focusable="false" role="presentation">
                            <path
                                d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z">
                            </path>
                        </svg>
                        <span class="label">Search</span>
                    </router-link>
                </div>
                <div class="bottomMenu">
                    <router-link to="/shop" title="Account"
                        class="item p-2 bg-white-100 rounded-md mx-1 header__icon"><svg
                            xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 384.97 384.97"
                            aria-hidden="true" focusable="false" role="presentation"
                            xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">
                            <path
                                d="M144.364,0H24.061C10.767,0,0,10.767,0,24.061v120.303c0,13.281,10.767,24.061,24.061,24.061h120.303    c13.293,0,24.061-10.779,24.061-24.061V24.061C168.424,10.767,157.657,0,144.364,0z M144.364,144.364H24.061V24.061h120.303    V144.364z">
                            </path>
                            <path
                                d="M360.909,0H240.606c-13.293,0-24.061,10.767-24.061,24.061v120.303c0,13.281,10.767,24.061,24.061,24.061h120.303    c13.281,0,24.061-10.779,24.061-24.061V24.061C384.97,10.767,374.191,0,360.909,0z M360.909,144.364H240.606V24.061h120.303    V144.364z">
                            </path>
                            <path
                                d="M360.909,216.545H240.606c-13.293,0-24.061,10.779-24.061,24.061v120.303c0,13.293,10.767,24.061,24.061,24.061h120.303    c13.281,0,24.061-10.767,24.061-24.061V240.606C384.97,227.313,374.191,216.545,360.909,216.545z M360.909,360.909H240.606    V240.606h120.303V360.909z">
                            </path>
                            <path
                                d="M144.364,216.545H24.061C10.767,216.545,0,227.325,0,240.606v120.303c0,13.293,10.767,24.061,24.061,24.061h120.303    c13.293,0,24.061-10.767,24.061-24.061V240.606C168.424,227.313,157.657,216.545,144.364,216.545z M144.364,360.909H24.061    V240.606h120.303V360.909z">
                            </path>
                        </svg>
                        <span class="label">Collection</span>
                    </router-link>
                </div>

                <div class="bottomMenu">
                    <router-link to="/account/orders" title="Account"
                        class="item p-2 bg-white-100 rounded-md mx-1 header__icon"><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false"
                            role="presentation" class="icon icon-account">
                            <path
                                d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 16 8 C 13.25 8 11 10.25 11 13 C 11 14.515625 11.707031 15.863281 12.78125 16.78125 C 10.53125 17.949219 9 20.300781 9 23 L 11 23 C 11 20.226563 13.226563 18 16 18 C 18.773438 18 21 20.226563 21 23 L 23 23 C 23 20.300781 21.46875 17.949219 19.21875 16.78125 C 20.292969 15.863281 21 14.515625 21 13 C 21 10.25 18.75 8 16 8 Z M 16 10 C 17.667969 10 19 11.332031 19 13 C 19 14.667969 17.667969 16 16 16 C 14.332031 16 13 14.667969 13 13 C 13 11.332031 14.332031 10 16 10 Z">
                            </path>
                        </svg>
                        <span class="label">
                            Account
                        </span>
                    </router-link>
                </div>
                <div class="bottomMenu">
                    <router-link to="/cart" title="Account"
                        class="item p-2 bg-white-100 rounded-md mx-1 header__icon"><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon-cart"
                            aria-hidden="true" focusable="false" role="presentation">
                            <path fill="#ffffff"
                                d="M 16 3 C 13.253906 3 11 5.253906 11 8 L 11 9 L 6.0625 9 L 6 9.9375 L 5 27.9375 L 4.9375 29 L 27.0625 29 L 27 27.9375 L 26 9.9375 L 25.9375 9 L 21 9 L 21 8 C 21 5.253906 18.746094 3 16 3 Z M 16 5 C 17.65625 5 19 6.34375 19 8 L 19 9 L 13 9 L 13 8 C 13 6.34375 14.34375 5 16 5 Z M 7.9375 11 L 11 11 L 11 14 L 13 14 L 13 11 L 19 11 L 19 14 L 21 14 L 21 11 L 24.0625 11 L 24.9375 27 L 7.0625 27 Z">
                            </path>
                        </svg>
                        <small
                            class="-top-5 -right-2 rounded-full absolute w-5 h-5 p-2 bg-red-700 text-white flex justify-center items-center">
                            {{ $store.state.cart.length }}</small>
                        <span class="label">Cart</span>
                    </router-link>
                </div>
            </div>
        </div>

    </div>

</template>
<script>
export default {
    data() {
        return {
            show: false,
            activeId: null,
            isOpen: [false, false, false, false, false, false, false, false],
            menu: this.$settings.sections.header.menu,
            otherMenu: [
                {
                    _id: "lang",
                    text: this.$store.state.language.code,
                    active: this.$settings.sections.header.icons.language,
                    childrens: this.$settings.store_languages.map(l => {
                        return {
                            _id: l.code,
                            text: l.name,
                            url: `?lang=${l.code}`
                        }
                    })
                },
                {
                    _id: "currency",
                    text: this.$store.state.currency.code,
                    active: this.$settings.sections.header.icons.currency,
                    childrens: this.$settings.store_currencies.map(c => {
                        return {
                            _id: c.code,
                            text: c.name,
                            url: `?cur=${c.code}`
                        }
                    })
                }
            ].filter(item => item.active)
        }
    },
    watch: {
        "$route.params": {
            handler(params) {
                this.$store.state.showHeaderMenu = false
            },
            deep: true
        },
        "$store.state.showHeaderMenu"(val) {
            if (val) {
                this.show = val;
            } else {
                setTimeout(() => {
                    this.show = val;
                }, 500);
            }
        },


    },
    methods: {
        display() {
            let counter = 0;
            let elem = true;
            for (elem of this.isOpen) {
                if (elem == true) {
                    counter++;
                }
            }

            if (counter > 1) {
                this.isOpen.splice(0, 8, false, false, false, false, false, false, false, false);
                return false;
            } else if (counter == 1) {
                return true;
            }
            return false;
        }
    },

}
</script>
<style>
.design {
    width: 100%;
    text-align: center;

}

.anim {
    display: flex;
    width: 100%;
}

.menu__global__items {
    padding-left: 30px;
}

.animation_dropdown {
    display: flex;
    width: 100%;
    position: relative;
    top: 30px;
    left: 10px;
    /* padding-top: ; */
    height: 400px;
    overflow-x: hidden;
    overflow-y: scroll;

}

.disclosure__button {
    width: 30px;
    height: 30px;
    padding-top: 10px;
}


.animation_dropdown .dropdown_menu {
    padding-left: 50px;
    font-family: 'Anton', sans-serif;
    font-family: 'Arvo', serif;
    font-family: 'EB Garamond', serif;
    font-family: 'Jost', sans-serif;
    font-family: 'Mingzat', sans-serif;

}

.customer_service_icon {
    width: 25px;
    height: 25px;
    margin: 15px 8px 0 0;
}

.customer_service_text {
    font-size: 15px;
    padding-top: 10px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}



.pos {
    position: relative;
    left: 40px;
}

.team {
    text-align: center;
    padding-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
}

.team>li {
    padding-left: 15px;
}

a:hover {
    text-decoration: underline;
}

a {
    margin: 0 0 0 0;
    display: inline;

}


.fade-enter-active,
.fade-leave-active {
    transition: all .5s ease-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.bottombar {
    overflow: hidden;
    background-color: rgb(0, 0, 0);
    position: fixed;
    bottom: 0;
    z-index: 9;
    width: 100%;
    height: 70px;
}

.bottombar a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}



.label {
    font-size: 14px;
    text-align: center;
}


[dir='ltr'] .move-out {
    transform: translateX(-40em);
}

[dir='ltr'] .move-in {
    transform: translateX(-20em);
}

[dir="rtl"] .move-out {
    transform: translateX(40em);
}

[dir="rtl"] .move-in {
    transform: translateX(20em);
}
</style>