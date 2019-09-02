import Vue from "vue";
import Router from "vue-router";
import Availability from "./views/Availability.vue";
import Dashboard from "./views/Dashboard.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/availability",
      name: "availability",
      component: Availability
    }
  ]
});
