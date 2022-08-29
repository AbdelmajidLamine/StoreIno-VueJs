<template>
<div class="footer__first">

    <si-app-loader placement="BEFORE_FOOTER"/>
    <div class="container py-2">
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/3">
                <div class="p-2" v-html="$settings.sections.footer.about"></div>
            </div>
            
            <div class="search__mobile w-full md:w-1/3">
                 <form  class="flex form__subscribe" action="/shop?" >
              
               
                    <input type="text"   class="input__subscribe" :placeholder="'Search for products'" >
                   <button class="button__subscribe" aria-label="Search for anything">
                                SUBSCRIBE
                            </button>
                  
                    <small v-if="$route.query.search" class="-top-1 -right-1 rounded-full absolute w-1 h-1 p-1 bg-green-700 text-white flex justify-center items-center"></small>
                </form>
            </div>

            <div class="w-full md:w-1/3">
                <div class="p-2">
                   
                    <h3 class=" text-lg">{{ $settings.sections.footer.social_media.title }}</h3>
                    <div class="flex flex-wrap">
                        <div v-for="item in socialMedia.filter(s=>$settings.sections.footer.social_media[s.name])" :key="item.name" class="h-12 m-2 flex items-center justify-center">
                            <a class="h-full flex" :href="$settings.sections.footer.social_media[item.name]" target="_blank" rel="noopener noreferrer">
                                <si-image class="h-12 w-12" width="40" height="40" :src="item.image" :alt="item.name"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <si-app-loader placement="AFTER_FOOTER"/>
</div>
</template>
<script>
export default {
    data() {
        return {
            
            socialMedia: [
                {
                    name: 'facebook',
                    image: 'https://storeno.b-cdn.net/themes/palest/facebook.png'
                },
                {
                    name: 'twitter',
                    image: 'https://storeno.b-cdn.net/themes/palest/twitter.png'
                },
                {
                    name: 'instagram',
                    image: 'https://storeno.b-cdn.net/themes/palest/instagram.png'
                },
                {
                    name: 'youtube',
                    image: 'https://storeno.b-cdn.net/themes/palest/youtube.png'
                },
                {
                    name: 'whatsapp',
                    image: 'https://storeno.b-cdn.net/themes/palest/whatsapp.png'
                },
                {
                    name: 'linkedin',
                    image: 'https://storeno.b-cdn.net/themes/palest/linkedin.png'
                },
                {
                    name: 'snapchat',
                    image: 'https://storeno.b-cdn.net/themes/palest/snapchat.png'
                },
                {
                    name: 'tiktok',
                    image: 'https://storeno.b-cdn.net/themes/palest/tiktok.png'
                }
            ]
        }
    },
}
</script>

<style>
.footer__first{
    background-color: rgb(56, 54, 54);
    color: aliceblue;
}

.form__subscribe{

    position: relative;
    top: 80px;
    padding-left: 12px;
    margin-right: 10px;
     text-indent: 30px;
    border-radius: 30px;
    background-color: rgb(66, 64, 64);
    width: 400px;
    height: 60px;
}

.form__subscribe .fa-search{

    position: absolute;
    top:12px;
    left: 10px;
    color: #f6f9fc;

   

}
.input__subscribe{

    width: 400px;
    height: 60px;
    margin-right: 20px;
     padding-left: 12px;
         border-radius: 30px;
    background-color: rgb(66, 64, 64);
    font-size: 14px;
    font-family:Arial, sans-serif;
}
.button__subscribe{
    position: relative;
    left: -15px;
}
</style>