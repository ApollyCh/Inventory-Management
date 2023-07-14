<script lang="ts">
import VendorsList from "@/components/VendorComponents/VendorsList.vue";
import {defineComponent} from "vue";
import TopPanel from "@/components/TopPanel.vue";
import BottomPanel from "@/components/BottomPanel.vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: 'VendorsPage',
  components: {
    VendorsList,
    TopPanel,
    BottomPanel
  },
  data() {
    return {
      showComponent: false
    }
  },
  setup() {
    const router = useRouter()
    const click = () => {
      router.push({
        path: '/vendors/add'
      })
    }
    return {
      click
    }
  }
})
</script>


<template>
  <div>
    <top-panel name_of_page="Vendors"></top-panel>
    <bottom-panel></bottom-panel>
    <VendorsList>
    </VendorsList>

    <div class="add-buttons">
      <button class="round-button" data-toggle="tooltip" data-placement="right" title="Add"
              @click="click">+
      </button>
      <add-vendor-form v-if="showComponent"></add-vendor-form>
    </div>
  </div>
</template>


<style scoped>
.top-panel {
  visibility: visible;
}

.bottom-panel {
  visibility: visible;
}

.vendors_list {
  justify-content: center;
  position: relative;
  top: 60px;
}


.round-button {
  position: fixed;
  width: 80px;
  height: 80px;
  line-height: 70px;
  border: 2px solid #f5f5f5;
  border-radius: 50%;
  color: #f5f5f5;
  text-align: center;
  text-decoration: none;
  background: #565ed7;
  box-shadow: 0 0 3px gray;
  font-size: 45px;
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  top: 510px;
  left: 93%;

}

.round-button:hover {
  background: #848cff;
  transition: background-color 0.3s;
  cursor: pointer;
}

</style>
