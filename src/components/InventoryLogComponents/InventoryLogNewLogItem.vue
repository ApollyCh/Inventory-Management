<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import TopPanel from '@/components/TopPanel.vue'
import BottomPanel from '@/components/BottomPanel.vue'
import InventoryLogNewLogItemList from './InventoryLogNewLogItemList.vue'
import { addDoc, collection, getDocs, updateDoc } from 'firebase/firestore'
import db from '@/components/dataBase'
import router from '@/router'
import type { Item } from '@/lib/item'

export const items = ref<Item[]>([])

export default defineComponent({
  name: 'InventoryLogPage',
  components: {
    TopPanel,
    BottomPanel,
    InventoryLogNewLogItemList,
  },
  data() {
    return {
      itemId: '',
      countChange: 0,
      items,
      minForSlider: -100,
      status: ref(false),
    }
  },
  methods: {
    async addInventoryLog() {
      await addDoc(collection(db, 'InventoryLog'), {
        itemId: this.itemId,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        name: this.findItemNameByItemId(this.itemId),
        countChange: this.countChange,
        timestamp: Date.now(),
      })

      const querySnapshot = await getDocs(collection(db, 'Items'))

      querySnapshot.forEach((doc) => {
        if (doc.data().itemId === this.itemId) {
          updateDoc(doc.ref, {
            itemId: doc.data().itemId,
            ImageItemUrl: doc.data().ImageItemUrl,
            Name: doc.data().Name,
            PurchaseCost: doc.data().PurchaseCost,
            SalePrice: doc.data().SalePrice,
            Vendor: doc.data().Vendor,
            Description: doc.data().Description,
            TotalStockAvailable:
              +doc.data().TotalStockAvailable + +this.countChange,
          })
        }
      })

      console.log('+')
      this.status = true
      if (this.status) await router.push('/log')
    },

    checkCurrentItem() {
      console.log(this.itemId)
    },

    findItemNameByItemId(itemId: string) {
      for (let i = 0; i < items.value.length; i++) {
        if (items.value[i].itemId === itemId) {
          return items.value[i].Name
        }
      }
      return null
    },

    changeMinSliderValue(itemId: string) {
      for (let i = 0; i < items.value.length; i++) {
        if (items.value[i].itemId === itemId) {
          this.minForSlider = -items.value[i].TotalStockAvailable
        }
      }
      return null
    },
  },
  setup() {
    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, 'Items'))
      let ils = ref<Item[]>([])
      querySnapshot.forEach((doc) => {
        const il = {
          id: doc.id,
          itemId: doc.data().itemId,
          Name: doc.data().Name,
          ImageItemUrl: doc.data().ImageItemUrl,
          TotalStockAvailable: doc.data().TotalStockAvailable,
          PurchaseCost: doc.data().PurchaseCost,
          SalePrice: doc.data().SalePrice,
          Vendor: doc.data().Vendor,
          Description: doc.data().Description,
          CurrentStockCostValue: doc.data().CurrentStockCostValue,
        }
        ils.value.push(il)
      })
      items.value = ils.value
    })
  },
})
</script>

<template>
  <TopPanel name_of_page="Add new log"></TopPanel>
  <div class="new-log-form">
    <form @submit.prevent="addInventoryLog">
      <div class="chosen-item">
        <label for="itemId">Item ID</label>
        <select v-model="itemId" id="itemId" required>
          <InventoryLogNewLogItemList
            v-for="item in items"
            :key="item.id"
            :id="item.id"
            :itemId="item.itemId"
            :name="item.Name"
            :imageItemUrl="item.ImageItemUrl"
          >
          </InventoryLogNewLogItemList>
        </select>
      </div>

      <div class="count-change">
        <label for="countChange">Count Change </label>
        <span class="slider-value">{{ countChange }}</span>
        <input
          @focus="changeMinSliderValue(itemId)"
          type="range"
          :min="minForSlider"
          max="100"
          v-model="countChange"
          id="countChange"
          required
        />
      </div>

      <button class="submitButton" type="submit">Add</button>
    </form>
    <button class="cancelButton" @click="$router.back">Cancel</button>
  </div>

  <BottomPanel></BottomPanel>
</template>

<style>
.new-log-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
}

.new-log-form form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  max-width: 90vw;
  min-width: 35vw;
  height: 60vh;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);

  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 2%;
}

.new-log-form form .chosen-item {
  display: flex;
  flex-direction: column;
  justify-content: left;
}

.new-log-form form .chosen-item label {
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #202124;

  margin-bottom: 1%;
}

.new-log-form form .chosen-item select {
  width: 100%;
  height: 48px;
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
  color: #202124;
  border-radius: 6px;
  border: solid 1px #8f8f8f;
  transition: all 0.3s ease-in-out;
}

.new-log-form form .chosen-item select:hover {
  border: solid 1px #f2984a8c;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}

.new-log-form form .count-change {
  display: flex;
  flex-direction: column;
  justify-content: left;
}

.new-log-form form .count-change label {
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #202124;

  margin-bottom: 1%;
}

.new-log-form form .count-change input {
  width: 100%;
  height: 48px;
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
  color: #202124;
  border-radius: 6px;
  border: solid 1px #8f8f8f;
  transition: all 0.3s ease-in-out;
}

.new-log-form form .count-change input:hover {
  border: solid 1px #f2984a8c;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}

.new-log-form form .count-change .slider-value {
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #202124;
}

.new-log-form form .buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.new-log-form form .submitButton {
  width: 100%;
  height: 48px;
  background: #f2994a;
  border-radius: 6px;
  border: none;
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  transition: all 0.3s ease-in-out;
}

.new-log-form form .submitButton:hover {
  background: #f2994a;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}

.new-log-form .cancelButton {
  position: absolute;
  top: calc(76%);

  max-width: 90vw;
  min-width: 35vw;
  height: 48px;
  background: #ffffff;
  border-radius: 6px;
  border-left: 1px solid #8f8f8f;
  border-right: 1px solid #8f8f8f;
  border-bottom: 1px solid #8f8f8f;
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #202124;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
}

.new-log-form .cancelButton:hover {
  background: #ffffff;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25);
}
</style>
