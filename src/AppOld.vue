<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import VendorElement from './components/VendorComponents/VendorCardOnPage.vue'
import VendorInfo from './components/VendorComponents/VendorsList.vue'
import { defineComponent, reactive, VueElement, ref } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    VendorElement
  }
})


const items = ref([{ name: 'Company 1', num:"8-800-555-35-35" }, {name:'Company 2', num: '229-29-29'}])

</script>

<template>
  <div>
  </div>
  <div class="vendors_list">
    <VendorElement></VendorElement>
    <RouterView></RouterView>
  </div>

</template>

<style scoped>
.vendors_list {
  display: grid;
  grid-template-columns: repeat(3, 0.3fr);}

</style>
