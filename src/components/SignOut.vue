<template>
  <form action="#" class="sign-in">
    <div class="div-refresh-icon">
      <font-awesome-icon
        icon="sync"
        class="refresh-icon"
        :class="spin ? 'spin-class' : ''"
        @click="clearInputs(), setAnimationSpin()"
      />
    </div>

    <div class="form-row">
      <input
        v-model="formValue.name"
        placeholder="Username *"
        type="text"
        name="username"
        class="form-input"
      />
      <font-awesome-icon icon="user" class="input-icon" />
    </div>
    <label>Date of birth</label>
    <div class="form-row row-inline">
      <input
        v-model="formValue.date.month"
        placeholder="Month *"
        type="text"
        name="month"
        class="form-input input-month"
      />
      <input
        v-model="formValue.date.day"
        placeholder="Day *"
        type="text"
        name="dat"
        class="form-input input-day"
      />

      <input
        v-model="formValue.date.year"
        placeholder="Year *"
        type="text"
        name="year"
        class="form-input input-year"
      />
    </div>

    <div class="form-row">
      <input
        v-model="formValue.email"
        placeholder="Email *"
        type="email"
        name="email"
        class="form-input"
      />
      <font-awesome-icon icon="envelope" class="input-icon" />
    </div>
    <div class="form-row">
      <input
        v-model="formValue.password"
        placeholder="Password *"
        type="password"
        name="password"
        class="form-input"
        ref="passwordInput"
      />
      <font-awesome-icon
        :icon="eyeIcon"
        @click="changePasswordVisibility('')"
        class="input-icon"
        style="cursor:pointer"
      />
    </div>
    <div class="form-row row-inline">
      <p-check name="check" v-model="formValue.keepEmail"
        >Keep my email</p-check
      >
    </div>
    <button type="submit" @click.prevent="checkForm()">
      Sign Out
    </button>
  </form>
</template>

<script>
import eventBus from "@/eventBus.js";

export default {
  name: "SignOut",
  data() {
    return {
      formValue: {
        name: "",
        email: "",
        password: "",
        date: { day: "", month: "", year: "" },
        keepEmail: false,
      },
      spin: false,
      eyeIcon: "eye-slash",
    };
  },

  methods: {
    changePasswordVisibility() {
      let input = this.$refs.passwordInput;
      input.type = input.type === "password" ? "text" : "password";

      this.eyeIcon === "eye"
        ? (this.eyeIcon = "eye-slash")
        : (this.eyeIcon = "eye");
    },
    setAnimationSpin() {
      this.spin = true;
      setTimeout(() => {
        this.spin = false;
      }, 555);
    },
    checkForm() {
      eventBus.sendUser(this.formValue);
      this.clearInputs();
    },
    clearInputs() {
      this.formValue.name = "";
      this.formValue.date.day = "";
      this.formValue.date.month = "";
      this.formValue.date.year = "";
      this.formValue.email = "";
      this.formValue.password = "";
      this.formValue.password = "";
    },
  },
};
</script>

<style scoped>
.row-inline .form-input {
  margin: 0;
}
.row-inline .input-day {
  width: 25% !important;
}
.row-inline .input-month {
  width: 28% !important;
}
.row-inline .input-year {
  width: 40%;
}
button {
  margin-top: 0.5rem;
}
</style>
