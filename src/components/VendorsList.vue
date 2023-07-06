<template>
  <div class="vendors_list">
    <VendorCardOnPage
        v-for="vendor in vendors"
        :key="vendor.id"
        :name_of_company="vendor.name_of_company"
        :num="vendor.num"
    @click="goToVendor(vendor.id)">
    </VendorCardOnPage>
  </div>
</template>


<script lang="ts">
import {computed, defineComponent} from "vue";
import VendorCardOnPage from "@/components/VendorCardOnPage.vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: 'VendorList',
  components: {
    VendorCardOnPage
  },
  data() {
    return {
      selectedVendor: null,
      vendors: [
        {
          id: 1,
          name_of_company: 'Company 1',
          num: '8-800-555-35-35',
          email: 'jfjfjffj@email.com',
          url: 'www.jfjfjffj.com',
          address: 'St. Big, 6'
        },
        {
          id: 2,
          name_of_company: 'Company 2',
          num: '222-22-22',
          email: 'fff',
          url: 'www.jfjfjffj.com',
          address: 'St. Big, 6'
        },
        {
          id: 3,
          name_of_company: 'Company 3',
          num: '8-961-540-34-36',
          email: 'fff',
          url: 'www.jfjfjffj.com',
          address: 'St. Big, 6'
        },
        {
          id: 4,
          name_of_company: 'Company 4',
          num: '8-945-293-29-29',
          email: 'fff',
          url: 'www.jfjfjffj.com',
          address: 'St. Big, 6'
        },
      ],
    }
  },
  methods: {
    registerVendor(name: string, email: string, phone: string) {
      const newVendor = {
        id: this.vendors.length + 1,
        name_of_company: name,
        email: email,
        num: phone
      };

      this.vendors.push(newVendor);
      this.vendorName = '';
      this.vendorEmail = '';
      this.vendorPhone = '';
    },
    goToVendor(vendorId) {
      this.selectedVendor = this.vendors.find(vendor => vendor.id === vendorId);
      console.log(this.selectedVendor)
      this.$router.push(`/vendors/${vendorId}`);
    }
  },



})
</script>

<style scoped>
.vendors_list {
  display: grid;
  grid-template-columns: repeat(3, 0.3fr);
}

</style>