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

    <label class="form-label" for="signUpUsername">Username:</label>
    <div class="form-row">
      <input
        id="signUpUsername"
        type="text"
        :class="['form-input', { 'invalid-input': usernameIsInvalid }]"
        @input="$v.formValues.username.$touch()"
        v-model="formValues.username"
      />
      <font-awesome-icon icon="user" class="input-icon" />
    </div>

    <label class="form-label">Date of birth:</label>
    <div class="form-row row-inline">
      <select
        v-model="formValues.birthMonth"
        type="text"
        class="form-input input-month"
      >
        <option value="" disabled>Month</option>
        <option
          v-for="(month, index) in months"
          :value="index"
          :key="index + '-' + month"
          >{{ month }}</option
        >
      </select>

      <select
        v-model="formValues.birthDay"
        type="text"
        name="dat"
        :class="{ 'invalid-input': dateIsInvalid() }"
        class="form-input input-day"
      >
        <option value="" disabled>Day</option>
        <option v-for="day in days" :key="'day-' + day" :value="day">{{
          day
        }}</option>
      </select>

      <select
        name="year"
        class="form-input input-year"
        v-model="formValues.birthYear"
      >
        <option value="" disabled>Year</option>
        <option v-for="year in years" :key="'year-' + year" :value="year">{{
          year
        }}</option>
      </select>
    </div>

    <label class="form-label" for="signUpEmail">Email:</label>
    <div class="form-row">
      <input
        id="signUpEmail"
        type="email"
        :class="['form-input', { 'invalid-input': emailIsInvalid }]"
        @input="$v.formValues.email.$touch()"
        v-model="formValues.email"
      />
      <font-awesome-icon icon="envelope" class="input-icon" />
    </div>

    <label class="form-label" for="signUpPassword">Password:</label>
    <div class="form-row">
      <input
        id="signUpPassword"
        type="password"
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
    <label class="form-label" for="signUpRepeatPassword"
      >Repeat Password:</label
    >
    <div class="form-row">
      <input
        id="signUpRepeatPassword"
        type="password"
        ref="passwordRepeatInput"
        :class="['form-input', { 'invalid-input': passwordRepeatIsInvalid }]"
        @input="$v.passwordRepeat.$touch()"
        v-model="passwordRepeat"
      />
    </div>

    <div class="form-row row-inline">
      <p-check name="check" v-model="formValues.subscribeEmail"
        >Subscribe to our Newsletter</p-check
      >
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
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  name: "SignUp",
  data() {
    return {
      formValues: {
        username: "",
        email: "",
        password: "",
        subscribeEmail: true,
        birthDay: 1,
        birthMonth: 0,
        birthYear: 2000,
      },
      passwordRepeat: "",
      spin: false,
      currentPasswordIcon: "eye-slash",
      buttonText: "Sign Up",
    };
  },
  validations: {
    formValues: {
      username: {
        required,
        minLength: minLength(4),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
    passwordRepeat: {
      required,
      sameAsPassword: sameAs(function() {
        return this.formValues.password;
      }),
    },
  },
  deactivated() {
    this.clearForm();
  },
  methods: {
    submitForm() {
      if (!this.$v.$invalid && !this.dateIsInvalid()) {
        let newUser = { ...this.formValues };
        this.$bus.sendUserSignUp(newUser);
        this.clearForm();
        this.showSucess();
      } else {
        this.$v.$touch();
      }
    },
    clearForm() {
      this.$v.$reset();
      this.formValues.username = "";
      this.formValues.email = "";
      this.formValues.password = "";
      this.formValues.subscribeEmail = true;
      this.formValues.birthDay = 1;
      this.formValues.birthMonth = 0;
      this.formValues.birthYear = 2000;
    },
    showSucess() {
      this.buttonText = "Sended";
      setTimeout(() => {
        this.buttonText = "Sign Up";
      }, 1400);
    },
    changePasswordVisibility() {
      let input = this.$refs.passwordInput;
      let inputRepeat = this.$refs.passwordRepeatInput;
      input.type = input.type === "password" ? "text" : "password";
      inputRepeat.type = inputRepeat.type === "password" ? "text" : "password";

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
    dateIsInvalid() {
      for (let i = 0; i < this.days.length; i++) {
        if (this.days[i] === this.formValues.birthDay) {
          return false;
        }
      }
      this.formValues.birthDay = null;
      return true;
    },
  },
  computed: {
    usernameIsInvalid() {
      return (
        this.$v.formValues.username.$invalid &&
        this.$v.formValues.username.$dirty
      );
    },
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
    passwordRepeatIsInvalid() {
      return this.$v.passwordRepeat.$invalid && this.$v.passwordRepeat.$dirty;
    },
    months() {
      return [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    },
    days() {
      let daysArray = [];
      let starterDay = new Date(
        this.formValues.birthYear,
        this.formValues.birthMonth,
        1
      );

      while (starterDay.getMonth() === this.formValues.birthMonth) {
        daysArray.push(new Date(starterDay).getDate());
        starterDay.setDate(starterDay.getDate() + 1);
      }
      return daysArray;
    },
    years() {
      let yearArry = [];
      let starterYear = 1900;
      let currentYear = new Date().getFullYear();

      while (currentYear >= starterYear) {
        yearArry.push(parseInt(currentYear--, 10));
      }
      return yearArry;
    },
  },
};
</script>

<style scoped>
.row-inline .form-input {
  margin: 0;
}
.row-inline .input-month {
  width: 40% !important;
}
.row-inline .input-day {
  width: 25% !important;
}
.row-inline .input-year {
  width: 28%;
}
select.form-input {
  font-size: 15px !important;
}
</style>
