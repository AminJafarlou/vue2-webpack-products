import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Category from "./pages/Category.vue";
import Home from "./pages/Home.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/category/:category", component: Category }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  render: h => h(App),
  router
});
