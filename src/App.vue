<template>
  <div id="app">
    <div class="page">
      <app-header></app-header>
      <div class="body">
        <app-sidebar></app-sidebar>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    "app-header": Header,
    "app-sidebar": Sidebar
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #ddd;
}
.page {
  display: flex;
  flex-direction: column;
}

.body {
  width: 100vw;
  display: flex;
}
.content {
  flex: 1;
}
</style>
