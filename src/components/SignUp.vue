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
        v-model="formValues.name"
        placeholder="Username *"
        type="text"
        name="username"
        class="form-input"
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
        v-model="formValues.email"
        placeholder="Email *"
        type="email"
        name="email"
        class="form-input"
      />
      <font-awesome-icon icon="envelope" class="input-icon" />
    </div>
    <div class="form-row">
      <input
        v-model="formValues.password"
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
      <p-check name="check" v-model="formValues.keepEmail"
        >Keep my email</p-check
      >
    </div>
    <button type="submit" @click.prevent="checkForm()">
      Sign Up
    </button>
  </form>
</template>

<script>
import {
  required,
  minLength,
  alpha,
  email,
  between,
} from "vuelidate/lib/validators";

export default {
  name: "SignUp",
  validations: {
    formValues: {
      name: {
        alpha,
        required,
        minLength: minLength(4),
      },
      email: {
        email,
        required,
        minLength: minLength(4),
      },
      birthDay: {
        between: between(1, 31),
      },
    },
  },
  data() {
    return {
      formValues: {
        name: "",
        email: "",
        password: "",
        keepEmail: false,
        birthDay: 1,
        birthMonth: 0,
        birthYear: 2000,
      },
      spin: false,
      eyeIcon: "eye-slash",
    };
  },
  methods: {
    onlyNumber($event) {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if (keyCode < 48 || keyCode > 57) {
        $event.preventDefault();
      }
    },
    lengthLimit($event, inputName, maxLength) {
      let currentLength = 0;
      switch (inputName) {
        case "month":
          currentLength = this.formValues.birthMonth.length;
          break;
        case "day":
          currentLength = this.formValues.birthDay.length;
          break;
        default:
          currentLength = this.formValues.birthYear.length;
          break;
      }

      if (currentLength === maxLength) $event.preventDefault();
    },
    checkForm() {
      let user = { ...this.formValues };
      user.date = { ...this.formValues.date };

      this.$bus.sendNewUser(user);
      this.clearInputs();
    },
    clearInputs() {
      this.formValues.name = "";
      this.formValues.email = "";
      this.formValues.password = "";
      this.formValues.birthDay = 1;
      this.formValues.birthMonth = 0;
      this.formValues.birthYear = 2000;
    },
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
  },
  computed: {
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
button {
  margin-top: 0.5rem;
}
</style>
