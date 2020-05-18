<template>
  <div id="app">
    <section>
      <SignOut v-on:receive-user="user = $event"></SignOut>
    </section>

    <section>
      <SignIn></SignIn>
    </section>

    <section style="flex-direction: column;color:#fff">
      <template v-if="user">
        <p>Name: {{ user.name }}</p>
        <p>
          Date of birth. <br />
          day:{{ user.date.day }} day:{{ user.date.mouth }} day:{{
            user.date.year
          }}
        </p>
        <p>Email:{{ user.email }}</p>
        <p>Password{{ user.password }}</p>
        <p>Keep email:{{ user.keepEmail }}</p>
      </template>
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
    return {
      user: undefined,
    };
  },
  methods: {},
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
.form-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
form .form-row {
  position: relative;
  width: 18rem;
  margin-bottom: 1rem;
}
form .form-input {
  font-family: "Work Sans", sans-serif;
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
form button:hover {
  background-color: rgb(137, 82, 192);
  transition: all 200ms linear;
}
.div-refresh-icon {
  text-align: right;
  width: 18rem;
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0 0.25rem;
}
.refresh-icon {
  color: #9d9d9e;
  transition: all 200ms;
}
.refresh-icon:hover {
  color: #474747;
  cursor: pointer;
  transform: scale(1.15);
}
.refresh-icon:active {
  color: #bdbdbd;
}
.spin-class {
  animation: spin 0.45s;
  animation-delay: 100ms;
  animation-fill-mode: none;
}
@keyframes spin {
  from {
    transform: scale(0.9) rotate(0deg);
  }
  to {
    transform: scale(0.9) rotate(360deg);
  }
}
form .form-row .pretty input:checked ~ .state label::after {
  background-color: rebeccapurple !important;
}
</style>
