<template>
  <form action="#">
    <div class="div-refresh-icon">
      <font-awesome-icon
        icon="sync"
        class="refresh-icon"
        :class="spin ? 'spin-class' : ''"
        @click="runClearAnimation()"
      />
    </div>

    <div class="form-row">
      <input
        placeholder="Email *"
        type="email"
        name="email"
        @input="$v.formValues.email.$touch()"
        :class="['form-input', { 'invalid-input': emailIsInvalid }]"
        v-model="formValues.email"
      />
      <font-awesome-icon icon="envelope" class="input-icon" />
    </div>

    <div class="form-row">
      <input
        type="password"
        name="password"
        placeholder="Password *"
        ref="passwordInput"
        :class="['form-input', { 'invalid-input': passwordIsInvalid }]"
        @input="$v.formValues.password.$touch()"
        v-model="formValues.password"
      />
      <font-awesome-icon
        :icon="currentPasswordIcon"
        @click="changePasswordVisibility()"
        class="input-icon"
        style="cursor:pointer"
      />
    </div>
    <button
      type="button"
      @click.prevent="submitForm()"
      :class="{ 'sucess-input': buttonText === 'Sended' }"
    >
      {{ buttonText }}
    </button>
  </form>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "SignIn",
  data() {
    return {
      formValues: {
        email: "",
        password: "",
      },
      spin: false,
      currentPasswordIcon: "eye-slash",
      buttonText: "Sign In",
    };
  },
  validations: {
    formValues: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  deactivated() {
    this.clearForm();
  },
  methods: {
    submitForm() {
      if (!this.$v.$invalid) {
        let user = { ...this.formValues };
        this.$bus.sendUserSignIn(user);

        this.clearForm();
        this.showSucess();
      } else {
        this.$v.$touch();
      }
    },
    clearForm() {
      this.$v.$reset();
      this.formValues.email = "";
      this.formValues.password = "";
    },
    showSucess() {
      this.buttonText = "Sended";

      setTimeout(() => {
        this.buttonText = "Sign In";
      }, 1400);
    },
    changePasswordVisibility() {
      let input = this.$refs.passwordInput;
      input.type = input.type === "password" ? "text" : "password";

      this.currentPasswordIcon === "eye"
        ? (this.currentPasswordIcon = "eye-slash")
        : (this.currentPasswordIcon = "eye");
    },
    runClearAnimation() {
      this.spin = true;

      setTimeout(() => {
        this.clearForm();
        this.spin = false;
      }, 555);
    },
  },
  computed: {
    emailIsInvalid() {
      return (
        this.$v.formValues.email.$invalid && this.$v.formValues.email.$dirty
      );
    },
    passwordIsInvalid() {
      return (
        this.$v.formValues.password.$invalid &&
        this.$v.formValues.password.$dirty
      );
    },
  },
};
</script>
