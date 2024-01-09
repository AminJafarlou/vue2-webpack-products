<template>
  <div class="products">
    <div v-if="loading">Loading ...</div>
    <div v-else>
      <p
        class="category-item"
        v-for="category in categoriesList"
        @click="redirect(category)"
      >
        {{ category | uppercase }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueWebpackCategoriesList",

  data() {
    return {
      loading: false,
      categoriesList: []
    };
  },

  filters: {
    uppercase: function(value) {
      return value.toUpperCase();
    }
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.loading = true;

      fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(json => {
          this.categoriesList = json;
          this.loading = false;
        });
    },

    redirect(value) {
      this.$router.push(`/category/${value}`);
    }
  }
};
</script>

<style>
.products {
  flex: 1;
  border-bottom: 1px solid #333;
}
.category-item {
  height: 40px;
  display: flex;
  padding-inline: 8px;
  align-items: center;
  justify-content: center;
}
</style>
