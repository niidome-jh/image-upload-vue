import Vue from "vue";
import {
  BootstrapVue,
  ModalPlugin,
  CardPlugin,
  VBScrollspyPlugin,
  DropdownPlugin,
  TablePlugin,
} from "bootstrap-vue";
import App from "./App.vue";
import store from "./store/index";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(ModalPlugin);
Vue.use(CardPlugin);
Vue.use(VBScrollspyPlugin);
Vue.use(DropdownPlugin);
Vue.use(TablePlugin);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
