<template>

  <div class="latest__news">
    <div height="300" class="center" @mouseenter="toggle()">
      <div>

        <transition>
          <div v-if="isActive" class="icon__collections">
            <button rounded color="white">
              <si-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" aria-hidden="true" focusable="false"
                  role="presentation" class="icon__collection icon-eyes">
                  <path
                    d="M 13 6.15625 C 7.980469 6.15625 3.289063 8.652344 0.46875 12.8125 C -0.0585938 13.59375 0.160156 14.628906 0.9375 15.15625 C 1.230469 15.355469 1.546875 15.46875 1.875 15.46875 C 2.421875 15.46875 2.984375 15.203125 3.3125 14.71875 C 3.417969 14.5625 3.546875 14.429688 3.65625 14.28125 C 4.996094 18.160156 8.664063 20.9375 13 20.9375 C 17.335938 20.9375 21.003906 18.160156 22.34375 14.28125 C 22.453125 14.429688 22.582031 14.5625 22.6875 14.71875 C 23.210938 15.496094 24.28125 15.683594 25.0625 15.15625 C 25.839844 14.628906 26.058594 13.589844 25.53125 12.8125 C 22.714844 8.648438 18.019531 6.15625 13 6.15625 Z M 16.96875 10.25 C 18.636719 10.847656 20.125 11.839844 21.375 13.125 C 20.441406 16.882813 17.042969 19.6875 13 19.6875 C 8.957031 19.6875 5.558594 16.882813 4.625 13.125 C 5.867188 11.847656 7.375 10.882813 9.03125 10.28125 C 8.496094 11.054688 8.1875 11.988281 8.1875 13 C 8.1875 15.65625 10.34375 17.8125 13 17.8125 C 15.65625 17.8125 17.8125 15.65625 17.8125 13 C 17.8125 11.980469 17.511719 11.027344 16.96875 10.25 Z">
                  </path>
                </svg></si-svg>
            </button>
            <button rounded color="white" v-if="$store.state.wishlist.find(i => i._id == item._id)"
              @click="removeFromWishlist">
              <si-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false"
                  role="presentation" class="icon__collection icon-wishlist">
                  <path
                    d="M 9.5 5 C 5.363281 5 2 8.402344 2 12.5 C 2 13.929688 2.648438 15.167969 3.25 16.0625 C 3.851563 16.957031 4.46875 17.53125 4.46875 17.53125 L 15.28125 28.375 L 16 29.09375 L 16.71875 28.375 L 27.53125 17.53125 C 27.53125 17.53125 30 15.355469 30 12.5 C 30 8.402344 26.636719 5 22.5 5 C 19.066406 5 16.855469 7.066406 16 7.9375 C 15.144531 7.066406 12.933594 5 9.5 5 Z M 9.5 7 C 12.488281 7 15.25 9.90625 15.25 9.90625 L 16 10.75 L 16.75 9.90625 C 16.75 9.90625 19.511719 7 22.5 7 C 25.542969 7 28 9.496094 28 12.5 C 28 14.042969 26.125 16.125 26.125 16.125 L 16 26.25 L 5.875 16.125 C 5.875 16.125 5.390625 15.660156 4.90625 14.9375 C 4.421875 14.214844 4 13.273438 4 12.5 C 4 9.496094 6.457031 7 9.5 7 Z">
                  </path>
                </svg></si-svg>
            </button>

            <button rounded color="white" v-else @click="addToWishlist">
              <si-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false"
                  role="presentation" class="icon__collection icon-wishlist">
                  <path
                    d="M 9.5 5 C 5.363281 5 2 8.402344 2 12.5 C 2 13.929688 2.648438 15.167969 3.25 16.0625 C 3.851563 16.957031 4.46875 17.53125 4.46875 17.53125 L 15.28125 28.375 L 16 29.09375 L 16.71875 28.375 L 27.53125 17.53125 C 27.53125 17.53125 30 15.355469 30 12.5 C 30 8.402344 26.636719 5 22.5 5 C 19.066406 5 16.855469 7.066406 16 7.9375 C 15.144531 7.066406 12.933594 5 9.5 5 Z M 9.5 7 C 12.488281 7 15.25 9.90625 15.25 9.90625 L 16 10.75 L 16.75 9.90625 C 16.75 9.90625 19.511719 7 22.5 7 C 25.542969 7 28 9.496094 28 12.5 C 28 14.042969 26.125 16.125 26.125 16.125 L 16 26.25 L 5.875 16.125 C 5.875 16.125 5.390625 15.660156 4.90625 14.9375 C 4.421875 14.214844 4 13.273438 4 12.5 C 4 9.496094 6.457031 7 9.5 7 Z">
                  </path>
                </svg></si-svg>
            </button>
            <a href="#"> <button rounded color="white">
                <si-svg><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="random" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon__collection icon-compare">
                    <path
                      d="M0 128v-8c0-6.6 5.4-12 12-12h105.8c3.3 0 6.5 1.4 8.8 3.9l89.7 97-21.8 23.6L109 140H12c-6.6 0-12-5.4-12-12zm502.6 278.6l-64 64c-20.1 20.1-54.6 5.8-54.6-22.6v-44h-25.7c-3.3 0-6.5-1.4-8.8-3.9l-89.7-97 21.8-23.6L367 372h17v-52c0-28.5 34.5-42.7 54.6-22.6l64 64c12.5 12.5 12.5 32.7 0 45.2zm-19.8-25.4l-64-64c-2.5-2.5-6.8-.7-6.8 2.8v128c0 3.6 4.3 5.4 6.8 2.8l64-64c1.6-1.5 1.6-4.1 0-5.6zm19.8-230.6l-64 64c-20.1 20.1-54.6 5.8-54.6-22.6v-52h-17L126.6 400.1c-2.3 2.5-5.5 3.9-8.8 3.9H12c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h97l240.4-260.1c2.3-2.5 5.5-3.9 8.8-3.9H384V64c0-28.5 34.5-42.7 54.6-22.6l64 64c12.5 12.5 12.5 32.7 0 45.2zm-19.8-25.4l-64-64c-2.5-2.5-6.8-.7-6.8 2.8v128c0 3.6 4.3 5.4 6.8 2.8l64-64c1.6-1.5 1.6-4.1 0-5.6z">
                    </path>
                  </svg></si-svg>
              </button></a>

          </div>
        </transition>
        <button color="red" class="custom__label sale" small dark v-if="sale">SALE</button>
        <br>
        <button color="black" class="custom__label" small dark>CUSTOM LABEL</button>
      </div>
      <nuxt-link :to="`/posts/${item.title}`" :title="item.title" :aria-label="item.title">
        <img :src="item.image.url"
          sizes="(min-width: 1100px) 535px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
          alt="(Product 10) Sample - Clothing And Accessory Boutiques For Sale"
          class="image__cloths ls-is-cached lazyloaded">

      </nuxt-link>


      <div>
        <div class="card__text">
          <div class="flex">
            <nuxt-link :to="`/posts/${item.name}`" :title="item.name" :aria-label="item.title">
              <strong :class="isActive ? 'red--text' : 'black--text'">{{
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
            <p>{{ item.description }}</p>
          </div>

          <div class="button__cart">
            <button color="black">MORE DETAILS</button>
          </div>



        </div>


      </div>

    </div>
  </div>

</template>
<script>
import { KeyObject } from 'crypto';

export default {
  props: {
    item: Object,
    i: KeyObject,
  },

  data() {
    return {
      isActive: false,
      price: "$ 145.00",
      sale: true,
    }
  },
  methods: {
    toggle() {
      if (!this.isActive) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
  },
}
</script>

<style>
</style>