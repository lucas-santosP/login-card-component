<template>
  <form action="#" class="sign-in">
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
        placeholder="Username *"
        type="text"
        name="username"
        :class="['form-input', { 'invalid-input': usernameIsInvalid }]"
        @input="$v.formValues.username.$touch()"
        v-model="formValues.username"
      />
      <font-awesome-icon icon="user" class="input-icon" />
    </div>

    <label>Date of birth*</label>
    <div class="form-row row-inline">
      <select
        v-model="formValues.birthMonth"
        type="text"
        name="month"
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

    <div class="form-row">
      <input
        placeholder="Email *"
        type="email"
        name="email"
        :class="['form-input', { 'invalid-input': emailIsInvalid }]"
        @input="$v.formValues.email.$touch()"
        v-model="formValues.email"
      />
      <font-awesome-icon icon="envelope" class="input-icon" />
    </div>

    <div class="form-row">
      <input
        type="password"
        name="password"
        ref="passwordInput"
        placeholder="Password *"
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

    <div class="form-row row-inline">
      <p-check name="check" v-model="formValues.keepEmail"
        >Keep my email</p-check
      >
    </div>

    <button type="submit" @click.prevent="submitForm()">
      Sign Up
    </button>
  </form>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "SignUp",

  data() {
    return {
      formValues: {
        username: "",
        email: "",
        password: "",
        keepEmail: true,
        birthDay: 1,
        birthMonth: 0,
        birthYear: 2000,
      },
      spin: false,
      currentPasswordIcon: "eye-slash",
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
        minLength: minLength(4),
      },
      password: {
        required,
        minLength: minLength(4),
      },
    },
  },
  deactivated() {
    this.clearForm();
  },
  methods: {
    submitForm() {
      if (!this.$v.$invalid) {
        let newUser = { ...this.formValues };
        this.$bus.sendNewUser(newUser);
        this.clearForm();
      } else {
        this.$v.$touch();
      }
    },
    clearForm() {
      this.$v.$reset();
      this.formValues.username = "";
      this.formValues.email = "";
      this.formValues.password = "";
      this.formValues.keepEmail = true;
      this.formValues.birthDay = 1;
      this.formValues.birthMonth = 0;
      this.formValues.birthYear = 2000;
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
select {
  font-size: 15px !important;
}
</style>
