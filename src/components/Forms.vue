<template>
  <div class="container">
    <nav class="nav-tab">
      <ul>
        <li
          @click="navTab = 'signUp'"
          :class="{ active: navTab === 'signUp' }"
          class="form-title"
        >
          Sign Up
        </li>
        <li
          @click="navTab = 'signIn'"
          :class="{ active: navTab === 'signIn' }"
          class="form-title"
        >
          Sign In
        </li>
      </ul>
    </nav>
    <div class="form-main">
      <transition name="slide-fade" mode="out-in">
        <SignIn v-if="navTab === 'signIn'"></SignIn>
        <SignUp v-else></SignUp>
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
      navTab: "signUp",
    };
  },
};
</script>

<style scoped>
.container {
  background: none;
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
  transition: all 500ms ease;
  flex: 1;
  height: 100%;
  color: rgba(255, 255, 255, 0.575);
  background-color: transparent;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  cursor: pointer;
}
.nav-tab ul li.active {
  border-bottom: none;
  color: black;
  background-color: white;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
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
