<template>
  <div class="container">
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

<style scoped>
.container {
  background: none;
}
.form-title {
  text-align: center;
  font-size: 2rem;
}
.form-main {
  background-color: #fff;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
.nav-tab {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
.nav-tab ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.nav-tab ul li {
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
.nav-tab ul li:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.301);
}
.nav-tab ul li.active-tab {
  cursor: default;
  border-bottom: none;
  color: #2c3e50;
  background-color: white;
}

.slide-fade-enter {
  transform: translateY(-50px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(50px);
  opacity: 0;
}
</style>
