<template>
    <div class="container my-2 bg-white">
        <div class="img-box img-box--mobile"><a class="image image-adapt" :href="banner.items.item_0.button.url" style="
                                    
                                        padding-top: 40.625%
                                    "><img
                   
                    :src="$settings.sections.blog.image ? $settings.sections.blog.image.src : null"
                    alt="Halo - Shopify Theme" loading="lazy"></a><a class="image image-mobile image-adapt"
                href="https://demo-default.myshopify.com/pages/new-arrivals" style="padding-top: 116.46408839779006%">

            </a>
        </div>
        <div v-if="loading" class="flex justify-center items-center my-5">
            <si-loader></si-loader>
        </div>

        <div class="halo__parag">

            <div v-if="item" class="item text-center item-1b33c8e3-cc88-4df4-be53-85de993829bd bg-white">
                <div class="halo__image bg-white">
                    <div class="img-box img-box--mobile text-7xl">{{ item.title }}</div>
                </div>
                <hr>
                <div class="halo__text_first text-center">


                    <span>
                        <p class="m-2"><small>{{ item.excerpt }}</small></p>
                        <div v-if="item" class="bg-white rounded-md p-2 my-3 mx-2 description" id="description"
                            v-html="item.content"></div>

                        <div v-if="$route.params.slug && $route.params.slug.indexOf('contact') > -1">
                            <si-app-loader :placement="'AFTER_CONTACT_PAGE'" />
                        </div>
                    </span>
                </div>


                <div class="flex items-center">
                    <div class=" flex w-full border-b border-gray-200"></div>
                    <h3 class=" whitespace-nowrap p-2">{{ $settings.sections.post.share_buttons.title }}</h3>
                    <div class=" flex w-full border-b border-gray-200"></div>
                </div>
                <div class=" flex justify-center">
                    <div v-for="item in socialMedia.filter(s => $settings.sections.post.share_buttons[s.name])"
                        :key="item.name" class="h-12 m-2 flex items-center justify-center">
                        <a class="h-full flex" :href="item.url" target="_blank" rel="noopener noreferrer">
                            <si-image class="h-10 w-10" width="40" height="40" :src="item.image" :alt="item.name" />
                        </a>
                    </div>
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
            item: null,
            banner: this.$settings.sections.banner,
            socialMedia: [
                {
                    name: 'whatsapp',
                    url: 'https://api.whatsapp.com/send?text={title}%20{url}',
                    image: 'https://storeno.b-cdn.net/themes/palest/whatsapp.png'
                },
                {
                    name: 'facebook',
                    image: 'https://storeno.b-cdn.net/themes/palest/facebook.png',
                    url: 'https://www.facebook.com/sharer.php?u={url}'
                },
                {
                    name: 'twitter',
                    url: 'https://twitter.com/intent/tweet?url={url}&text={title}',
                    image: 'https://storeno.b-cdn.net/themes/palest/twitter.png'
                },
                {
                    name: 'linkedin',
                    url: 'https://www.linkedin.com/sharing/share-offsite/?url={url}',
                    image: 'https://storeno.b-cdn.net/themes/palest/linkedin.png'
                }
            ]
        }
    },
    async fetch() {
        try {
            const { slug } = this.$route.params;
            const { data } = await this.$storeino.pages.get({ slug, type: 'PAGE' })
            this.item = data;

            this.$store.state.seo.title = this.item.title + ' - ' + this.$settings.store_name;
            this.$store.state.seo.description = this.item.excerpt || this.$settings.store_description;
            if (this.item.image) { this.$store.state.seo.image = this.item.image.url; }

            let url = `https://${this.$store.state.domain}/pages/${slug}`;
            for (const button of this.socialMedia) {
                button.url = button.url.replace(/\{title\}/gi, this.item.title).replace(/\{url\}/gi, url);
            }
            this.loading = false;
        } catch (e) {
            console.log({ e });
            // Redirect to error page if product not exists
            this.$nuxt.error({ statusCode: 404, message: 'post_not_found' })
        }
    },
    mounted() {
        this.$storeino.fbpx('PageView')
    }
}
</script>
