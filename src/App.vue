<template>
  <div id="app">
    <section>
      <Form></Form>
      <transition name="slide-fade" mode="out-in">
        <div
          v-if="user"
          style="flex-direction: column;color:#fff; font-size: 20px; margin:0 5rem"
        >
          <p>Name: {{ user.name }}</p>

          <p>month:{{ user.date.month }}</p>
          <p>day:{{ user.date.day }}</p>
          <p>year:{{ user.date.year }}</p>

          <p>Email:{{ user.email }}</p>
          <p>Password{{ user.password }}</p>
          <p>Keep email:{{ user.keepEmail }}</p>
        </div>
      </transition>
    </section>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import eventBus from "@/eventBus.js";

export default {
  name: "App",
  components: {
    Form,
  },
  data() {
    return {
      user: undefined,
    };
  },
  created() {
    eventBus.receiveUser((user) => {
      this.user = user;
      console.log(this.user);
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
  border-bottom: 2px solid black;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-items: center;
  min-height: 478px;
  padding: 1rem 2rem;
}
.form-title {
  text-align: center;
  font-size: 2rem;
}
form .form-row {
  position: relative;
  width: 19rem;
  margin-bottom: 1rem;
}
.row-inline {
  width: 19rem;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
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
form .form-input:invalid {
  color: #df0c0c;
}
form .form-input:invalid + .icon {
  color: #df0c0c;
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
  margin-bottom: 2rem;
}
form button:hover {
  background-color: rgb(137, 82, 192);
  transition: all 200ms linear;
}
svg {
  width: 16px !important;
  user-select: none;
  transition: all 200ms linear;
}
.input-icon {
  position: absolute;
  right: 2%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: rebeccapurple;
}
.div-refresh-icon {
  text-align: right;
  width: 18rem;
  margin: 0;
  margin: 0.5rem 0;
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
.class-inpt-error {
  border-color: rgb(238, 9, 9) !important;
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
/* overwrite checkbox default color */
form .form-row .pretty input:checked ~ .state label::after {
  background-color: rebeccapurple !important;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter {
  transform: translateX(-50px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
