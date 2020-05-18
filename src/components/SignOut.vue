<template>
  <form action="#" class="sign-in">
    <h2 class="form-title">Sign Out</h2>
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
      <font-awesome-icon icon="user" class="icon" />
    </div>
    <label>Date of birth *</label>
    <div class="form-row row-inline">
      <input
        v-model="formValue.date.month"
        placeholder="Month"
        type="text"
        name="month"
        class="form-input input-month"
      />
      <input
        v-model="formValue.date.day"
        placeholder="Day"
        type="text"
        name="dat"
        class="form-input input-day"
      />
      <input
        v-model="formValue.date.year"
        placeholder="Year"
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
      <font-awesome-icon icon="envelope" class="icon" />
    </div>
    <div class="form-row">
      <input
        v-model="formValue.password"
        placeholder="Password *"
        type="password"
        name="password"
        class="form-input"
      />
      <font-awesome-icon icon="key" class="icon" />
    </div>
    <div class="form-row row-inline">
      <p-check name="check" v-model="formValue.keepEmail"
        >Keep my email</p-check
      >
    </div>
    <button type="submit" @click.prevent="checkForm()">Sign Out</button>
  </form>
</template>

<script>
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
    };
  },

  methods: {
    setAnimationSpin() {
      this.spin = true;
      setTimeout(() => {
        this.spin = false;
      }, 555);
    },
    checkForm() {
      let values = { ...this.formValue };
      this.$emit("receive-user", values);
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
.row-inline {
  width: 18rem;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
}
.row-inline .form-input {
  margin: 0;
}
.row-inline .input-day,
.row-inline .input-month {
  width: 80px !important;
}
.row-inline .input-year {
  width: 100px;
}
.icon {
  position: absolute;
  right: 2%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: rebeccapurple;
}
button {
  margin-top: 0.5rem;
}
</style>
