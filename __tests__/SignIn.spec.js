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
//Vuelidade
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
//EventBus
import EventBus from "@/plugins/eventBus";
Vue.use(EventBus);

import Vue from "vue";
import { shallowMount, enableAutoDestroy } from "@vue/test-utils";
import SignIn from "@/components/SignIn.vue";

enableAutoDestroy(afterEach);

describe("HelloWorld.vue", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallowMount(SignIn);
  });
  afterEach(() => {
    resetData(wrapper);
  });

  it("Se o estado do Validation Model é incialmente $invalid === false quando todos campos obrigatorios forem preenchidos", () => {
    setData(wrapper);

    expect(wrapper.vm.$v.$invalid).toBeFalsy();
  });

  it("Se o estado do Validation Model é incialmente $invalid === true", () => {
    expect(wrapper.vm.$v.$invalid).toBeTruthy();
  });

  it("Componente é uma instacia Vue", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  const setData = (wrapper) => {
    wrapper.setData({
      formValues: {
        email: "lucaspolicarpo@gmail.com",
        password: "123456789",
      },
    });
  };
  const resetData = (wrapper) => {
    wrapper.setData({
      formValues: {
        email: "",
        password: "",
      },
    });
  };
});
