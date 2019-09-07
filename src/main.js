import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";

const vuetifyOptions = {};

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify: new Vuetify(vuetifyOptions),
  render: h => h(App)
}).$mount("#app");
