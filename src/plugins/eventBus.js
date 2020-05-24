import Vue from "vue";

const eventBus = new Vue({
  methods: {
    sendUserSignUp(user) {
      this.$emit("send-new-user", user);
    },
    receiveUserSignUp(callback) {
      this.$on("send-new-user", callback);
    },

    sendUserSignIn(user) {
      this.$emit("send-current-user", user);
    },
    receiveUserSignIn(callback) {
      this.$on("send-current-user", callback);
    },
  },
});

export default function install(Vue) {
  Object.defineProperties(Vue.prototype, {
    $bus: {
      get() {
        return eventBus;
      },
    },
  });
}
