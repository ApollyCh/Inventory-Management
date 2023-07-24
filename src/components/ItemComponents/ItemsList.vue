<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

import { collection, getDocs } from 'firebase/firestore'
import db from '../dataBase'
import ItemCardOnPage from '../ItemComponents/ItemCardOnPage.vue'
import type { Item } from '@/lib/item'

export const items = ref<Item[]>([])
export default defineComponent({
  name: 'ItemsList',
  components: {
    ItemCardOnPage,
  },
  setup() {
    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, 'Items'))
      let its = ref<Item[]>([])
      querySnapshot.forEach((doc) => {
        const v = {
          id: doc.id,
          Name: doc.data().Name,
          itemId: doc.data().ItemId,
          Description: doc.data().Description,
          Vendor: doc.data().Vendor,
          PurchaseCost: doc.data().PurchaseCost,
          SalePrice: doc.data().SalePrice,
          CurrentStockCostValue: doc.data().CurrentStockCostValue,
          TotalStockAvailable: doc.data().TotalStockAvailable,
          ImageItemUrl: doc.data().ImageItemUrl,
        }
        its.value.push(v)
      })
      items.value = its.value
    })
  },

  data() {
    return {
      items,
      selectedItem: null,
    }
  },

  methods: {
    goToItem(itemId: string) {
      this.$router.push(`/items/${itemId}`)
    },
  },
})
</script>

<template>
  <div class="items_list">
    <ItemCardOnPage
      v-for="item in items"
      :key="item.itemId"
      :name="item.Name"
      :description="item.Description"
      :image="item.ImageItemUrl"
      @click="goToItem(item.id)"
    >
    </ItemCardOnPage>
  </div>
</template>

<style scoped>
.items_list {
  display: grid;
  grid-template-columns: repeat(4, 0.3fr);
  justify-content: center;
  position: relative;
  top: 40px;
  padding-bottom: 60px;
} 

@media only screen and (max-width: 890px) {
  .items_list {
    grid-template-columns: repeat(1, auto);
  }
}

@media only screen and (min-width: 780px) and (max-width: 1024px) {
  .items_list {
    grid-template-columns: repeat(2, 0.6fr);
    padding-left: 4vw;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1400px) {
  .items_list {
    grid-template-columns: repeat(3, 0.5fr);
    padding-left: 4vw;
  }
}

@media only screen and (min-width: 1400px) {
  .items_list {
    padding-left: 4vw;
  }
}
</style>
