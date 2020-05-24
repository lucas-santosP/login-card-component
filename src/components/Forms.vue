<template>
  <div class="forms-container">
    <nav class="nav-tab">
      <ul>
        <li
          @click="navTab = 'SignUp'"
          :class="['form-title', { 'active-tab': navTab === 'SignUp' }]"
        >
          Sign Up
        </li>
        <li
          @click="navTab = 'SignIn'"
          :class="['form-title', { 'active-tab': navTab === 'SignIn' }]"
        >
          Sign In
        </li>
      </ul>
    </nav>

    <div class="form-main">
      <transition name="slide-fade" mode="out-in">
        <keep-alive>
          <component :is="navTab" />
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";

export default {
  name: "Forms",
  components: {
    SignIn,
    SignUp,
  },
  data() {
    return {
      navTab: "SignUp",
    };
  },
};
</script>

<style>
.forms-container .form-title {
  text-align: center;
  font-size: 2rem;
}
.forms-container .form-main {
  background-color: #fff;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
.forms-container .nav-tab {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
.forms-container .nav-tab ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.forms-container .nav-tab ul li {
  transition: all 400ms ease;
  flex: 1;
  height: 100%;
  color: rgba(255, 255, 255, 0.575);
  background-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  cursor: pointer;
  padding-top: 5px;
  padding-bottom: 5px;
}
.forms-container .nav-tab ul li:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.301);
}
.forms-container .nav-tab ul li.active-tab {
  cursor: default;
  border-bottom: none;
  color: #2c3e50;
  background-color: white;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-items: center;
  min-height: 520px;
  padding: 1rem 2rem;
  padding-bottom: 2rem;
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
  transition: all 400ms ease;
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
  margin-top: auto;
}
form button:hover {
  background-color: rgb(137, 82, 192);
  transition: all 200ms linear;
}
form button.sucess-input {
  transition: all 500ms ease;
  background-color: green !important;
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
  margin-top: 0.25rem;
  margin-bottom: 0.6rem;
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
form .form-input.invalid-input {
  border-color: red;
}
/* overwrite checkbox default color */
form .form-row .pretty input:checked ~ .state label::after {
  background-color: rebeccapurple !important;
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

.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter {
  transform: translateY(-50px);
  opacity: 0;
}
.slide-fade-leave-to {
  opacity: 0;
}
</style>
