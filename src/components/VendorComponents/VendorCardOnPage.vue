<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VendorCardOnPage",
  props: ["id", "name_of_company", "num", "email", "logo"],
});
</script>

<template>
  <div class="vendor">
    <img :src="logo" alt="company logo" />
    <div class="info">
      <h2>{{ name_of_company }}</h2>
      <h3>{{ num }}</h3>
    </div>
  </div>
</template>

<style scoped>
.vendor {
  background-color: rgb(254, 254, 254);
  width: 380px;
  height: 86px;
  margin-top: 30px;
  border: solid 1px #dbdbdb;
}

.vendor:hover {
  box-shadow: 0 6px 6px rgb(143, 143, 143);
  cursor: pointer;
  transition: box-shadow 0.3s;
}

h2 {
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  color: #202124;
  position: relative;
  margin-left: 0;
}

h3 {
  font-family: "Rubik", sans-serif;
  font-size: 12px;
  position: relative;
  color: #202124;
  opacity: 80%;
  margin-left: 0;
}

.info {
  display: block;
  position: relative;
  margin-top: -75px;
  margin-left: 90px;
}

img {
  width: 75px;
  height: 75px;
}

@media only screen and (max-width: 380px) {
  .vendor {
    width: 340px;
  }
}

@media only screen and (max-width: 280px) {
  .vendor {
    width: 260px;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1400px) {
  .vendor {
    width: 320px;
  }
}
</style>