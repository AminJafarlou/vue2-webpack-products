<template>
  <div>
    <div v-if="loading">Loading ...</div>
    <div v-else>
      <div class="product-list">
        <app-product-card
          v-for="product in productList"
          :key="product.id"
          :id="product.id"
          :category="product.category"
          :description="product.description"
          :image="product.image"
          :price="product.price"
          :rating="product.rating"
          :title="product.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  data() {
    return {
      loading: false,
      productList: []
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.loading = true;
      fetch(
        `https://fakestoreapi.com/products/category/${this.$route.params.category}`
      )
        .then(res => {
          return res.json();
        })
        .then(json => {
          this.loading = false;
          this.productList = json;
        });
    }
  },
  components: {
    "app-product-card": ProductCard
  }
};
</script>

<style lang="" scoped>
.product-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
