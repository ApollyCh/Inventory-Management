<template>
  <div>
    <h2>Registration Form</h2>

    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="userData.username">
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="userData.email">
    </div>

    <button @click="VendorsList.registerVendor">Register</button>
  </div>
</template>

<script>
import VendorsList from "@/components/VendorsList.vue";

export default {
  name: 'AddVendorForm',
  computed: {
    VendorsList() {
      return VendorsList
    }

  },
  components: 'VendorsList',
  data() {
    return {
      userData: {
        username: '',
        email: ''
      }
    };
  },
};
</script>

<style>
/* Style your registration form here */
</style>