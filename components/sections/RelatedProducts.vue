<template>
  <div class="container" v-if="items.length > 0">
    <div class="m-2">
      <h2 class="text-2xl">{{ $settings.sections.product.title }}</h2>
    </div>
    <div v-if="loading" class="flex justify-center items-center my-5">
      <si-loader></si-loader>
    </div>
    <div class="flex flex-wrap">
      <div v-for="(item, i) in items" :key="i" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <si-product :item="item"></si-product>
      </div>
    </div>
    <div class="flex justify-center" v-if="$settings.sections.products_1.show_more_text">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {
      loading: true,
      items: [],
    };
  },
  async fetch() {
    try {
      const ids = this.item.collections.map(c => c._id);
      const { data } = await this.$storeino.products.search({
        "_id-ne": this.item._id,
        "collections._id-in": ids
      })
      this.items = data.results
    } catch (e) {
      console.log({ e });
    }
    this.loading = false;
  }
};
</script>