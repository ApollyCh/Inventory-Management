<script setup lang="ts">
const LogIn = () => {
  this.$router.push(`/logIn`)
}
</script>

<template>
  <div class="auth">
    <button class="log-in" @click="LogIn">Log In</button>
    <button class="sign-up">Sing Up</button>
  </div>
</template>

<style scoped>
.auth {
  z-index: 4000;
  position: absolute;
  margin-top: -30px;
  margin-left: 59%;
}

button {
  width: 100px;
  height: 30px;
  margin-right: 15px;
  border: 0;
  border-radius: 6px;
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  box-shadow: 0 4px 4px rgb(192, 190, 190);
}

button:hover {
  box-shadow: 0 6px 6px rgb(143, 143, 143);
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.log-in {
  background-color: #d7d7d7;
  color: #343434;
}

.sign-up {
  background-color: #343434;
  color: whitesmoke;
}
</style>
