import Vue from "vue";

const eventBus = new Vue({
  methods: {
    sendNewUser(user) {
      this.$emit("send-new-user", user);
    },
    receiveNewUser(callback) {
      this.$on("send-new-user", callback);
    },

    sendCurrentUser(user) {
      this.$emit("send-current-user", user);
    },
    receiveCurrentUser(callback) {
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
