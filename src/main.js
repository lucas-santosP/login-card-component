import Vue from "vue";
import App from "./App.vue";
import "@/css/reset.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSync,
  faUser,
  faEnvelope,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSync, faEnvelope, faKey, faUser);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
