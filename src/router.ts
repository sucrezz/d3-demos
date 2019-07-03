import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "*",
          name: "Chart",
          component: resolve => require(["./views/index/index.vue"], resolve)
        },
        {
          path: "/chart",
          name: "Chart",
          component: resolve => require(["./views/charts/chart.vue"], resolve)
        }
      ]
    }
  ]
});
