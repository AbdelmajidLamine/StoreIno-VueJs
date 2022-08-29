<template>
    <div class="container">
        <div class="img-box img-box--mobile"><a class="image image-adapt" :href="banner.items.item_0.button.url" style="
                                    
                                        padding-top: 40.625%
                                    "><img
                    srcset="//cdn.shopify.com/s/files/1/0300/9884/9928/files/banner-slideshow_1920x.jpg?v=1642992099 1x, //cdn.shopify.com/s/files/1/0300/9884/9928/files/banner-slideshow_1920x@2x.jpg?v=1642992099 2x"
                    :src="banner.banner_1.image ? banner.banner_1.image.src : $store.state.defaults.sliderImage"
                    alt="Halo - Shopify Theme" loading="lazy"></a><a class="image image-mobile image-adapt"
                href="https://demo-default.myshopify.com/pages/new-arrivals" style="padding-top: 116.46408839779006%">

            </a>
        </div>
        <div class="item item-1b33c8e3-cc88-4df4-be53-85de993829bd">
            <div class="banner-item ">
                <div class="img-box img-box--mobile"><a class="image image-adapt" :href="banner.items.item_0.button.url"
                        style="
                                    
                                        padding-top: 31.25%
                                    "><img
                            srcset="//cdn.shopify.com/s/files/1/0300/9884/9928/files/fullwidth-banner-2_1920x.jpg?v=1616398814 1x, //cdn.shopify.com/s/files/1/0300/9884/9928/files/fullwidth-banner-2_1920x@2x.jpg?v=1616398814 2x"
                            :src="banner.banner_2.image ? banner.banner_2.image.src : $store.state.defaults.sliderImage"
                            alt="Halo - Shopify Theme" loading="lazy"></a><a class="image image-mobile image-adapt"
                        href="https://demo-default.myshopify.com/pages/new-arrivals"
                        style="padding-top: 116.42335766423356%">

                    </a></div>
            </div>
        </div>
        <div class="item item-6d301401-012f-4fda-a2aa-b7861eafd4d5">
            <div class="banner-item ">
                <div class="img-box img-box--mobile"><a class="image image-adapt" :href="banner.items.item_0.button.url"
                        style="
                                    
                                        padding-top: 40.72916666666667%
                                    "><img
                            srcset="//cdn.shopify.com/s/files/1/0300/9884/9928/files/fullwidth-banner-3_1920x.jpg?v=1616398848 1x, //cdn.shopify.com/s/files/1/0300/9884/9928/files/fullwidth-banner-3_1920x@2x.jpg?v=1616398848 2x"
                            :src="banner.banner_3.image ? banner.banner_3.image.src : $store.state.defaults.sliderImage"
                            alt="Halo - Shopify Theme" loading="lazy"></a><a class="image image-mobile image-adapt"
                        href="https://demo-default.myshopify.com/pages/new-arrivals"
                        style="padding-top: 116.42335766423356%">

                    </a></div>
            </div>
        </div>


    </div>


</template>
<script>
export default {
    data() {
        return {
            banner: this.$settings.sections.banner
        }
    },
}
</script>
<style>
.slider-item.last {
    position: absolute;
}

.slider-item:not(.active):not(.last) {
    position: absolute;
    top: 0;
    transform: translateX(-110%);
}

.slider-item.active {
    transform: none;
    transition: .5s;
}

.img-box--adapt .image-adapt .placeholder-svg,
.img-box .image img {

    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
    object-position: center;
    padding-top: 20px;
}
</style>

<style>
</style>