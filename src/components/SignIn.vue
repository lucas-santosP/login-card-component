<template>
  <form action="#" class="sign-in">
    <h2 class="form-title">Sign In</h2>
    <div class="div-refresh-icon">
      <font-awesome-icon
        icon="sync"
        class="refresh-icon"
        @click="clearInputs()"
      />
    </div>

    <div class="input-row">
      <input
        v-model="formValue.name"
        placeholder="Username *"
        type="text"
        name="username"
      />
      <font-awesome-icon icon="user" class="icon" />
    </div>
    <label>Date of birth *</label>
    <div class="input-row row-inline">
      <input
        v-model="formValue.date.month"
        placeholder="Month"
        type="number"
        name="month"
        class="input-month"
      />
      <input
        v-model="formValue.date.day"
        placeholder="Day"
        type="number"
        name="dat"
        class="input-day"
      />
      <input
        v-model="formValue.date.year"
        placeholder="Year"
        type="number"
        name="year"
        class="input-year"
      />
    </div>

    <div class="input-row">
      <input
        v-model="formValue.email"
        placeholder="Email *"
        type="email"
        name="email"
      />
      <font-awesome-icon icon="envelope" class="icon" />
    </div>
    <div class="input-row">
      <input
        v-model="formValue.password"
        placeholder="Password *"
        type="password"
        name="password"
      />
      <font-awesome-icon icon="key" class="icon" />
    </div>
    <button type="submit" @click.prevent="checkForm()">Submit</button>
  </form>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      formValue: {
        name: "",
        email: "",
        password: "",
        date: { day: "", month: "", year: "" },
      },
    };
  },
  methods: {
    checkForm() {
      let values = { ...this.formValue };
      console.log(values);
      this.clearInputs();
    },
    clearInputs() {
      this.formValue.name = "";
      this.formValue.date = "";
      this.formValue.email = "";
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
.row-inline input {
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
.div-refresh-icon {
  text-align: right;
  width: 18rem;
  margin: 0;
  margin-bottom: 0.5rem;
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
  transition: all 200ms;
}
button {
  margin-top: 0.5rem;
}
</style>
