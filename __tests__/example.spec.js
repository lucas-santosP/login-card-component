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
import Vuelidate from "vuelidate";

import { shallowMount } from "@vue/test-utils";
import SignIn from "@/components/SignIn.vue";
import Vue from "vue";
Vue.use(Vuelidate);
Vue.component("font-awesome-icon", FontAwesomeIcon);

describe("HelloWorld.vue", () => {
  it("check if SignIn is a vue component", () => {
    const wrapper = shallowMount(SignIn);

    expect(wrapper.isVueInstance).toBeTruthy;
  });
});
