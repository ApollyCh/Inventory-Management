<script lang="ts">
import VendorsList from "@/components/VendorComponents/VendorsList.vue";
import { defineComponent } from "vue";
import TopPanel from "@/components/TopPanel.vue";
import BottomPanel from "@/components/BottomPanel.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "VendorsPage",
  components: {
    VendorsList,
    TopPanel,
    BottomPanel,
  },
  data() {
    return {
      showComponent: false,
    };
  },
  setup() {
    const router = useRouter();
    const click = () => {
      router.push({
        path: "/vendors/add",
      });
    };
    return {
      click,
    };
  },
});
</script>

<template>
  <div>
    <top-panel name_of_page="Vendors"></top-panel>
    <bottom-panel></bottom-panel>
    <VendorsList> </VendorsList>

    <div class="add-buttons">
      <button
        class="round-button"
        data-toggle="tooltip"
        data-placement="right"
        title="Add"
        @click="click"
      >
        +
      </button>
      <!--      <add-vendor-form v-if="showComponent"></add-vendor-form>-->
    </div>
  </div>
</template>

<style scoped>
.round-button {
  position: fixed;
  width: 80px;
  height: 80px;
  line-height: 60px;
  border: 2px solid #f5f5f5;
  border-radius: 50%;
  color: #f5f5f5;
  text-align: center;
  text-decoration: none;
  background: #565ed7;
  box-shadow: 0 0 3px gray;
  font-size: 45px;
  font-family: "Rubik", sans-serif;
  font-weight: bold;
  top: 550px;
  left: 93%;
}

.round-button:hover {
  background: #848cff;
  transition: background-color 0.3s;
  cursor: pointer;
}

@media only screen and (max-width: 480px) {
  VendorsList {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .round-button {
    width: 60px;
    height: 60px;
    left: 80%;
    top: 80%;
    line-height: 50px;
    z-index: 10;

  }
}

@media only screen and (min-width: 480px) and (max-width: 1024px){
  VendorsList {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .round-button {
    width: 70px;
    height: 70px;
    left: 80%;
    top: 77%;
    line-height: 50px;
    z-index: 10;

  }
}

</style>
