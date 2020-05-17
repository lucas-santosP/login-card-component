<template>
  <div id="app">
    <section>
      <SignIn></SignIn>
    </section>
    <section>
      <SignOut></SignOut>
    </section>
  </div>
</template>

<script>
import SignIn from "./components/SignIn.vue";
import SignOut from "./components/SignOut.vue";

export default {
  name: "App",
  components: {
    SignIn,
    SignOut,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
body {
  width: 100%;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  background: rebeccapurple;
  border-bottom: 2px solid black;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem;
  align-items: center;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 0px 50px 10px #00000071;
}

form .input-row {
  position: relative;
  width: 18rem;
  margin-bottom: 1rem;
}
form input {
  width: 100%;
  height: 3rem;
  padding: 0.5rem;
  font-size: 1rem;
  color: #2c3e50;
  border: 2px rgb(125, 91, 160) solid;
  border-radius: 0.25rem;
}

form button {
  cursor: pointer;
  width: 15rem;
  height: 3rem;
  font-size: 1rem;
  color: #fff;
  border-radius: 0.5rem;
  background-color: rebeccapurple;
  box-shadow: 0px 0px 10px 2px #00000071;
}

.form-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
</style>
