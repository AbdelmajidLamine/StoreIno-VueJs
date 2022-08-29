<template>
      <div>
       <div height="300" class="center">
        <nuxt-link :to="item.childrens.length > 0 ? `/collections/${item.slug}` : `/shop/${item.slug}`">
           <img :src="item.image ? item.image.src : null" 
                sizes="(min-width: 1100px) 535px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                alt="(Product 10) Sample - Clothing And Accessory Boutiques For Sale" class=" ls-is-cached lazyloaded">
        </nuxt-link>
            <div>
              <div class="card__text">
                <div class="flex">
                  <strong>{{
                      item.name
                  }}</strong>
                  <span class="icon__star">
                    <i class="spr-icon spr-icon-star"></i>
                    <i class="spr-icon spr-icon-star"></i>
                    <i class="spr-icon spr-icon-star"></i>
                    <i class="spr-icon spr-icon-star"></i>
                    <i class="spr-icon spr-icon-star"></i>
                  </span>
                </div>
                <div class="description__cart">
                  <p>{{ description}}</p>
                </div>

                <div class="button__cart">
                  <button color="black">SHOP {{ item.name }}</button>
                </div>
              </div>
            </div>

          </div>      
      </div>

</template>
<script>
export default {
    props: {
        item: Object,
    },
    data() {
        return {
            hover: [false, false, false, false],
            description: "(Product 8) Sample - Clothing And Accessory Boutiques For Sale",
        }
    },
}
</script>