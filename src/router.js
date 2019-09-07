import Vue from "vue";
import Router from "vue-router";
import Availability from "./views/Availability.vue";
import Status from "./views/Status.vue";
import Calender from "./components/NewCalender.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "availability",
      component: Availability
    },
    {
      path: "/status/:id",
      name: "status",
      component: Status
    }
  ]
});
