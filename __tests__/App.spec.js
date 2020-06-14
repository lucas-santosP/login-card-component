//EventBus
import EventBus from "@/plugins/eventBus";
Vue.use(EventBus);

import Vue from "vue";
import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App", () => {
  it("Componente é uma instacia Vue", () => {
    const wrapper = shallowMount(App);

    expect(wrapper.isVueInstance).toBeTruthy;
  });
});
