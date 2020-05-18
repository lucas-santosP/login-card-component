<template>
  <form action="#" class="sign-in">
    <h2 class="form-title">Sign In</h2>
    <div class="div-refresh-icon">
      <font-awesome-icon icon="sync" class="refresh-icon" />
    </div>
    <div class="form-row">
      <input
        class="form-input"
        placeholder="Email"
        type="email"
        name="email"
        id="inputEmail"
      />
    </div>
    <div class="form-row">
      <input
        class="form-input"
        placeholder="Password"
        type="password"
        name="password"
        id="inputPassword"
      />
    </div>
    <button type="submit" @click.prevent="checkForm()">Sign In</button>
  </form>
</template>

<script>
export default {
  name: "SignOut",
};
</script>

<style scoped></style>
