<template>
    <div class="copyright">
        <div class="container mx-auto px-4 py-2">
            <div>
                <h3 class=" text-white">{{ $settings.sections.footer.methods.title }}</h3>
                <div class="methods_icon flex flex-wrap p-2">
                    <div v-for="item in methods.filter(m => $settings.sections.footer.methods[m.name])" :key="item.name"
                        class="w-20 h-12 mx-2 flex items-center justify-center border p-2">
                        <si-image width="80" height="40" :src="item.image" :alt="item.name"
                            class="h-full object-contain" />
                    </div>
                </div>
            </div>
            <div class="copyright__text flex items-center flex-wrap">

                <h2 class="text-white p-5">
                    {{ title }}
                </h2>
                <div class="text-white" v-html="description.replace(/__YEAR__/gi, year)">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            year: new Date().getFullYear(),
            title: this.$settings.sections.footer.copyright.store_name,
            description: this.$settings.sections.footer.copyright.text,
            methods: [
                {
                    name: 'visa',
                    image: 'https://storeno.b-cdn.net/themes/palest/visa.png'
                },
                {
                    name: 'mastercard',
                    image: 'https://storeno.b-cdn.net/themes/palest/mastercard.png'
                },
                {
                    name: 'transfer',
                    image: 'https://storeno.b-cdn.net/themes/palest/transfer.png'
                },
                {
                    name: 'cash',
                    image: 'https://storeno.b-cdn.net/themes/palest/cod.png'
                }
            ],
        }
    },
}
</script>

<style>
.copyright {
    text-align: center;
    background-color: rgb(56, 54, 54);
}

.methods_icon {
    position: relative;
    left: 400px;
}

.copyright__text {
    padding-left: 300px;
}
</style>