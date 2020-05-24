<template>
  <div id="app">
    <section>
      <Forms />
    </section>
  </div>
</template>

<script>
import Forms from "./components/Forms.vue";

export default {
  name: "App",
  components: {
    Forms,
  },
  data() {
    return {};
  },
  mounted() {
    this.$bus.receiveUserSignUp((user) => {
      console.log("SignUp user: ", user);
      //fetch post to add new user
    });

    this.$bus.receiveUserSignIn((user) => {
      console.log("SignIn user: ", user);
      //fetch check if user exist in the database
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700&display=swap");

body {
  width: 100%;
  height: 100vh;
  font-family: "Work Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #673ab7;
  background: -webkit-linear-gradient(to top, #512da8, #673ab7);
  background: linear-gradient(to top, #512da8, #673ab7);
}
#app {
  width: 100%;
  height: 100%;
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 600px;
}
</style>
