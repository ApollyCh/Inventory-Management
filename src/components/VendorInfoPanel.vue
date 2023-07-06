<script lang="ts">

import TopPanel from "@/components/TopPanel.vue";
import BottomPanel from "@/components/BottomPanel.vue";
import {useRouter} from "vue-router";
import {defineComponent} from "vue";
import vendorsList from "@/components/VendorsList.vue";

export default defineComponent({
  name: 'VendorInfoPanel',
  components: {
    BottomPanel,
    TopPanel
  },

  setup() {
    const router = useRouter()
    const click = () => {
      router.push({
        path: history.go(-1)
      })
    }
    return {
      click
    }
  },
  data() {
    return {
      vendor: null
    }
  },
  methods: {
    fetchVentor(id) {
      this.vendor = vendorsList.data().vendors.find(item => item.id === Number(id));
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  created() {
    this.fetchVentor(this.id);
  }
})


</script>

<template>
  <top-panel name_of_page="Details"></top-panel>
  <bottom-panel></bottom-panel>
  <button class="button-left-arrow" @click="click">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left"
         viewBox="0 0 16 16">
      <path fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
    </svg>
  </button>

  <div class="container-of-vendor">
    <img
        src="https://www.appsheet.com/image/getremoteimageurl?url=https%3A%2F%2Ffonts.gstatic.com%2Fs%2Fi%2Fgooglematerialicons%2Fapartment%2Fv5%2Fgm_grey-48dp%2F2x%2Fgm_apartment_gm_grey_48dp.png&width=600">

    <div class="all-container">
      <div class="name">
        <p class="type-of-inf">Name</p>
        <p class="information">{{ vendor.name_of_company}}</p>
      </div>

      <div class="name">
        <p class="type-of-inf">URL</p>
        <p class="information">{{vendor.url}}</p>
      </div>

      <div class="name">
        <p class="type-of-inf">Phone</p>
        <p class="information">{{vendor.num}}</p>
      </div>

      <div class="name">
        <p class="type-of-inf">Email</p>
        <p class="information">{{vendor.email}}</p>
      </div>

      <div class="name">
        <p class="type-of-inf">Address</p>
        <p class="information">{{vendor.address}}</p>
      </div>
    </div>

  </div>


</template>


<style scoped>

vendors-list {
  visibility: hidden;
}

.button-left-arrow {
  position: relative;
  width: 30px;
  height: 30px;
  border: 0;
  background-color: white;
  margin-top: 15px;
}

.button-left-arrow:hover {
  cursor: pointer;
}

.some-kind-of-body {
  justify-content: center;
  background-color: #565ed7;
  width: 1000px;
  height: 1000px;
}

.container-of-vendor {
  width: 768px;
  height: max-content;
  background-color: white;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin-top: 17px;
}

img {
  width: 100px;
  height: 100px;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto
}

p.type-of-inf {
  font-family: 'Rubik', sans-serif;
  font-size: 13px;
  color: #202124;
  position: relative;
  opacity: 80%;

}

p.information {
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
  color: #202124;
  position: relative;
  margin-left: 0px;
  font-weight: bold;
  margin-top: -5px;
}

.name {
  margin-left: 15px;
  padding-bottom: 20px;
}

.all-container {
  padding-top: 12px;
}

</style>