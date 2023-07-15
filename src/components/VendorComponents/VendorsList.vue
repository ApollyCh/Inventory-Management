<template>
  <div class="vendors_list">
    <VendorCardOnPage
      v-for="vendor in vendors"
      :key="vendor.id"
      :name_of_company="vendor.name"
      :num="vendor.phone"
      :logo="vendor.logo"
      @click="goToVendor(vendor.id)"
    >
    </VendorCardOnPage>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

import { collection, getDocs } from "firebase/firestore";
import VendorCardOnPage from "../VendorComponents/VendorCardOnPage.vue";
import db from "../dataBase";

export const vendors = ref([]) as any;
export default defineComponent({
  name: "VendorList",
  components: {
    VendorCardOnPage,
  },
  setup() {
    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, "Vendors"));
      let vs = [] as any;
      querySnapshot.forEach((doc) => {
        const v = {
          id: doc.id,
          name: doc.data().Name,
          address: doc.data().Address,
          phone: doc.data().Phone,
          url: doc.data().URL,
          email: doc.data().Email,
          numOfItems: doc.data().NumOfItems,
          logo: doc.data().LogoPath,
        };
        vs.push(v);
      });
      vendors.value = vs;
    });
  },

  data() {
    return {
      vendors,
      selectedVendor: null,
    };
  },

  methods: {
    goToVendor(vendorId: string) {
      this.$router.push(`/vendors/${vendorId}`);
    },
  },
});
</script>

<style scoped>
.vendors_list {
  display: grid;
  grid-template-columns: repeat(3, 0.3fr);
  justify-content: center;
  position: relative;
  top: 60px;
}

@media only screen and (max-width: 890px) {
  .vendors_list {
    grid-template-columns: repeat(1, auto);

  }
}

</style>
