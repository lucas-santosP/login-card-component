import Vue from "vue";

export default new Vue({
  methods: {
    sendUser(formValues) {
      let user = { ...formValues };
      user.date = { ...formValues.date };
      console.log("user", user);
      this.$emit("show-user", user);
    },
    receiveUser(callback) {
      this.$on("show-user", callback);
    },
  },
});
