<template>
  <div class="items_list">
    <ItemCardOnPage
      v-for="item in items"
      :key="item.id"
      :name="item.name"
      :description="item.description"
      :image="item.img"
      @click="goToVendor(vendor.id)"

    >
    </ItemCardOnPage>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

import { collection, getDocs } from "firebase/firestore";
import db from "../dataBase";
import ItemCardOnPage from "../ItemComponents/ItemCardOnPage.vue";

export const items = ref([]) as any;
export default defineComponent({
  name: "ItemsList",
  components: {
    ItemCardOnPage,
  },
  setup() {
    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, "Items"));
      let its = [] as any;
      querySnapshot.forEach((doc) => {
        const v = {
          id: doc.id,
          name: doc.data().Name,
          description: doc.data().Description,
          img: doc.data().ImageItemUrl,
        };
        its.push(v);
      });
      items.value = its;
    });
  },

  data() {
    return {
      items,
      selectedVendor: null,
    };
  },

  methods: {
    goToVendor(itemId) {
      console.log(this.items);

      this.$router.push(`/items/${itemId}`);
    },
  },
});
</script>

<style scoped>
.items_list {
  display: grid;
  grid-template-columns: repeat(4, 0.3fr);
}
</style>
