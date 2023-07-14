<script lang="ts">
import {defineComponent} from "vue";


export default defineComponent({
  name: 'VendorCardOnPage',
  props: ['id', 'name_of_company', 'num', 'email']
})
</script>

<template>
  <div class="vendor">
    <img
        src="https://www.appsheet.com/image/getremoteimageurl?url=https%3A%2F%2Ffonts.gstatic.com%2Fs%2Fi%2Fgooglematerialicons%2Fapartment%2Fv5%2Fgm_grey-48dp%2F2x%2Fgm_apartment_gm_grey_48dp.png&width=600">
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
  box-shadow: 0px 6px 6px rgb(143, 143, 143);
  cursor: pointer;
  transition: box-shadow 0.3s;
}

h2 {
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  color: #202124;
  position: relative;
  margin-left: 0px;

}

h3 {
  font-family: 'Rubik', sans-serif;
  font-size: 12px;
  position: relative;
  color: #202124;
  opacity: 80%;
  margin-left: 0px;

}

.info {
  position: relative;
  top: -75px;
  left: 90px;
}

img {
  width: 75px;
  height: 75px;
}
</style>