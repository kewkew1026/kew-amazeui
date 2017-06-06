import Vue from "vue";
import router from "./router/index";
import amazeuiVue from "./components/main";
import App from "./App";

Vue.config.productionTip = false

Vue.use(amazeuiVue);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
