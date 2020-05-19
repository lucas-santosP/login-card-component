<template>
  <form action="#" class="sign-in">
    <div class="div-refresh-icon">
      <font-awesome-icon
        icon="sync"
        class="refresh-icon"
        @click="clearInputs()"
      />
    </div>
    <div class="form-row">
      <input
        class="form-input"
        :class="{ 'class-inpt-error': formError.name }"
        placeholder="Email"
        type="email"
        name="email"
        v-model="formValue.name"
      />
    </div>
    <div class="form-row">
      <input
        v-model="formValue.password"
        placeholder="Password *"
        type="password"
        name="password"
        class="form-input"
        :class="{ 'class-inpt-error': formError.password }"
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
      <p-check name="check" v-model="formValue.keepPassword"
        >Keep my password</p-check
      >
    </div>
    <button type="submit" @click.prevent="sendForm()">Sign In</button>
  </form>
</template>

<script>
export default {
  name: "SignOut",
  data() {
    return {
      formValue: {
        name: "",
        password: "",
        keepPassword: false,
      },
      formError: {
        name: false,
        password: false,
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
      let form = { ...this.formValue };
      let formIsValid = true;

      if (form.name === "") {
        formIsValid = false;

        this.formError.name = true;
        this.deBouce(() => {
          this.formError.name = false;
        }, 700);
      }
      if (form.password === "") {
        formIsValid = false;

        this.formError.password = true;
        this.deBouce(() => {
          this.formError.password = false;
        }, 700);
      }

      return formIsValid;
    },
    deBouce(fn, wait) {
      setTimeout(() => {
        fn();
      }, wait);
    },
    clearInputs() {
      this.formValue.name = "";
      this.formValue.password = "";
      this.formValue.keepPassword = false;
    },
    sendForm() {
      if (this.checkForm()) {
        alert("Sended");
        this.clearInputs();
      } else {
        // this.showErrors()
      }
    },
  },
};
</script>

<style scoped></style>
