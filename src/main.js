import Vue from "vue";
import App from "./App.vue";
import "@/css/reset.css";

//FontAwesome
import {
  faSync,
  faUser,
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSync, faEnvelope, faUser, faEye, faEyeSlash);
Vue.component("font-awesome-icon", FontAwesomeIcon);

//PrettyCheckbox
import "pretty-checkbox/dist/pretty-checkbox.min.css";
import PrettyCheck from "pretty-checkbox-vue/check";
Vue.component("p-check", PrettyCheck);

//Vuelidate
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

//Plugin EventBus
import EventBus from "./plugins/eventBus";
Vue.use(EventBus);

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount("#app");
