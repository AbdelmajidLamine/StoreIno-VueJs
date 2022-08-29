<template>
    <div class="menu__footer">
        <div class="footer_menu_desktop flex flex-wrap justify-start container">
            <div v-for="(itemFooter, i) in menuFooter.items" :key="i" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
                <div class="p-5">
                    <h4 class="text-xl menu-title px-2">
                        {{ itemFooter.text }}
                    </h4>

                    <ul class="p-5" v-if="itemFooter.childrens && itemFooter.childrens.length > 0">
                        <li v-for="(child, ii) in itemFooter.childrens" :key="ii" class="menu__footer__childrens">
                            {{ child.text }}
                        </li>

                    </ul>
                </div>
            </div>

            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-2/5">
                <div class="p-5">
                    <h4 class="text-xl menu-title px-2">
                        HALO APP
                    </h4>
                    <ul class="p-5">
                        <li class="menu__footer__childrens">
                            <div class="flex">
                                <div>
                                    <img src="https://cdn.shopify.com/s/files/1/0300/9884/9928/files/logo-footer.png?v=1616029850"
                                        srcset="https://cdn.shopify.com/s/files/1/0300/9884/9928/files/logo-footer.png?v=1616029850"
                                        alt="Halo" title="Halo" loading="lazy">

                                </div>
                                <div class="mx-5">
                                    <h2>Download today to get extra 10% off of all deals!</h2>
                                    <p>* Apply To Select Products. Limited Time Only.</p>
                                </div>

                            </div>
                            <div class="flex pt-5">
                                <img src="https://cdn.shopify.com/s/files/1/0300/9884/9928/files/apple-app-logo.png?v=1615976181"
                                    srcset="https://cdn.shopify.com/s/files/1/0300/9884/9928/files/apple-app-logo.png?v=1615976181"
                                    alt="App Store" title="App Store" loading="lazy">
                                <img src="https://cdn.shopify.com/s/files/1/0300/9884/9928/files/google-app-logo.png?v=1615976173"
                                    srcset="https://cdn.shopify.com/s/files/1/0300/9884/9928/files/google-app-logo.png?v=1615976173"
                                    alt="Google Play" title="Google Play" loading="lazy">

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="footer_menu_mobile grid grid-wrap justify-start container">
            <div v-for="(itemFooter, i) in menuFooter.items" :key="i" class="w-full">
                <div class="p-5">
                    <div class="flex">
                        <h6 class="text-xl menu-title px-2">
                            {{ itemFooter.text }}
                        </h6>
                        <button @click="Actived(i)">+</button>

                    </div>
                    <hr height="100%">

                    <ul class="p-5" v-if="itemFooter.childrens && itemFooter.childrens.length > 0 && menuActived[i]">
                        <li v-for="(child, ii) in itemFooter.childrens" :key="ii" class="menu__footer__childrens">
                            {{ child.text }}
                        </li>

                    </ul>
                </div>
            </div>

            <div class="w-full">
                <div class="p-5">
                    <h4 class="text-xl menu-title px-2">
                    {{$settings.sections.footer.halo.title}}
                    </h4>
                    <ul class="p-5">
                        <li class="menu__footer__childrens">
                            <div class="flex">
                                <div>
                                    <img :src="$settings.sections.footer.halo.logo ? $settings.sections.footer.halo.logo.src : null "
                                        srcset="https://cdn.shopify.com/s/files/1/0300/9884/9928/files/logo-footer.png?v=1616029850"
                                        alt="Halo" title="Halo" loading="lazy">
                                </div>
                                <div class="mx-5">
                                    <h2>{{$settings.sections.footer.halo.text1}}</h2>
                                    <p>{{$settings.sections.footer.halo.text2}}</p>
                                </div>

                            </div>
                            <div class="flex pt-5">
                                <img src="https://cdn.shopify.com/s/files/1/0300/9884/9928/files/apple-app-logo.png?v=1615976181"
                                    srcset="https://cdn.shopify.com/s/files/1/0300/9884/9928/files/apple-app-logo.png?v=1615976181"
                                    alt="App Store" title="App Store" loading="lazy">
                                <img src="https://cdn.shopify.com/s/files/1/0300/9884/9928/files/google-app-logo.png?v=1615976173"
                                    srcset="https://cdn.shopify.com/s/files/1/0300/9884/9928/files/google-app-logo.png?v=1615976173"
                                    alt="Google Play" title="Google Play" loading="lazy">

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menuActived: [false, false, false],
            menuFooter: this.$settings.sections.footer.menu,

        };
    },
    methods: {
        Actived(i) {
            if (!this.menuActived[i]) {
                this.menuActived.splice(i, 1, true);
            } else {
                this.menuActived.splice(i, 1, false);
            }
        }
    }
};
</script>
<style>
.menu__footer {
    height: 100%;
    background-color: black;
    color: white;

}

.menu__footer__childrens {
    padding-top: 30px;
}

.footer_menu_mobile {
    display: none;
}
</style>