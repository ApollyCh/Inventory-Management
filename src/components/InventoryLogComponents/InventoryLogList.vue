<template>
  <div class="inventory-log-list">
    <InventoryLogOnPage
      v-for="inventoryLog in inventoryLogs"
      :key="inventoryLog.id"
      :id="inventoryLog.id"
      :name="inventoryLog.name"
      :date="inventoryLog.date"
      :time="inventoryLog.time"
      :countChange="inventoryLog.countChange"
      :imageItemUrl="inventoryLog.imageItemUrl"
    >
    </InventoryLogOnPage>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

import { collection, getDocs } from 'firebase/firestore'
import InventoryLogOnPage from './InventoryLogOnPage.vue'
import db from '../dataBase'
import type { Log } from '@/lib/log'
import type { Item } from '@/lib/item'

export const inventoryLogs = ref<Log[]>([])

export default defineComponent({
  name: 'InventoryLogList',
  components: {
    InventoryLogOnPage,
  },
  setup() {
    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, 'InventoryLog'))
      let ils = ref<Log[]>([])
      querySnapshot.forEach((doc) => {
        const il = {
          id: doc.id,
          name: doc.data().name,
          date: doc.data().date,
          time: doc.data().time,
          itemId: doc.data().itemId,
          countChange: doc.data().countChange,
          timestamp: doc.data().timestamp,
          imageItemUrl: '',
        }
        ils.value.push(il)
      })
      ils.value.sort((a: Log, b: Log) => {
        let tmpA: number = a.timestamp
        let tmpB: number = b.timestamp
        return tmpB - tmpA
      })
      inventoryLogs.value = ils.value

      const querySnapshot2 = await getDocs(collection(db, 'Items'))
      let items = ref<Item[]>([])
      querySnapshot2.forEach((doc) => {
        const item = {
          id: doc.id,
          itemId: doc.data().itemId,
          ImageItemUrl: doc.data().ImageItemUrl,
          Name: doc.data().Name,
          PurchaseCost: doc.data().PurchaseCost,
          SalePrice: doc.data().SalePrice,
          Vendor: doc.data().Vendor,
          Description: doc.data().Description,
          TotalStockAvailable: doc.data().TotalStockAvailable,
          CurrentStockCostValue: doc.data().CurrentStockCostValue,
        }
        items.value.push(item)
      })

      for (let i = 0; i < inventoryLogs.value.length; i++) {
        for (let j = 0; j < items.value.length; j++) {
          if (inventoryLogs.value[i].itemId === items.value[j].itemId) {
            inventoryLogs.value[i].imageItemUrl = items.value[j].ImageItemUrl
          }
        }
      }

      console.log(inventoryLogs.value)
    })
  },

  data() {
    return {
      inventoryLogs,
      selectedInventoryLog: null,
    }
  },
})
</script>
