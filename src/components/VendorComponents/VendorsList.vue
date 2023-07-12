<template>
  <div class="vendors_list">
    <VendorCardOnPage
      v-for="vendor in vendors"
      :key="vendor.id"
      :name_of_company="vendor.name"
      :num="vendor.phone"
      @click="goToVendor(vendor.id)"
    >
    </VendorCardOnPage>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import VendorCardOnPage from "@/components/VendorComponents/VendorCardOnPage.vue";

const firebaseConfig = {
  apiKey: "AIzaSyANJLDf9txyAU8N1Y8jT7cFY6Ny1szHC9s",
  authDomain: "inventory-manager-b4ad1.firebaseapp.com",
  projectId: "inventory-manager-b4ad1",
  storageBucket: "inventory-manager-b4ad1.appspot.com",
  messagingSenderId: "661733570798",
  appId: "1:661733570798:web:73df74cd973d17fb34dbff",
  measurementId: "G-06C0XGZQJ0",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

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
        };
        vs.push(v);
      });
      vendors.value = vs;
    });
  },

  data() {
    return {
      vendors,
      selectedVendor: null
    };
  },

  methods: {
    goToVendor(vendorId) {
      this.$router.push(`/vendors/${vendorId}`);
    },
  }
});
</script>

<style scoped>
.vendors_list {
  display: grid;
  grid-template-columns: repeat(3, 0.3fr);
}
</style>
