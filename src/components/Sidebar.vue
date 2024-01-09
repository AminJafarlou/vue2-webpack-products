<template>
  <div class="sidebar">
    <app-categories-list></app-categories-list>
    <app-vendors-list></app-vendors-list>
  </div>
</template>

<script>
import CategoriesList from "./CategoriesList.vue";
import VendorsList from "./VendorsList.vue";

export default {
  name: "app-sidebar",

  components: {
    "app-categories-list": CategoriesList,
    "app-vendors-list": VendorsList
  }
};
</script>

<style scoped>
.sidebar {
  width: 288px;
  display: flex;
  margin-right: 12px;
  flex-direction: column;
  background-color: #fff;
  height: calc(100vh - 60px);
}
</style>
