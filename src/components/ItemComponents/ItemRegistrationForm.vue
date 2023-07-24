<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import TopPanel from '../TopPanel.vue'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import db from '@/components/dataBase'
import router from '@/router'
import ItemsChooseVendorList from '@/components/ItemComponents/ItemsChooseVendorList.vue'
import type { Vendor } from '@/lib/vendor'
import { useHead } from '@vueuse/head'

let vendors = ref<Vendor[]>([])
export default defineComponent({
  name: 'ItemRegistrationForm',
  components: { ItemsChooseVendorList, TopPanel },
  data() {
    return {
      itemID: '',
      itemName: '',
      itemDesc: '',
      itemURL: '',
      itemVendor: '',
      itemPCost: null,
      itemSPrice: null,
      status: ref(true),
      countChange: 0,
      vendors,
    }
  },
  setup() {
    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, 'Vendors'))
      const vs = ref<Vendor[]>([])
      querySnapshot.forEach((doc) => {
        const v = {
          id: doc.id,
          Address: doc.data().Address,
          Email: doc.data().Email,
          Name: doc.data().Name,
          Phone: doc.data().Phone,
          URL: doc.data().URL,
          LogoPath: doc.data().LogoPath,
        }
        vs.value.push(v)
      })
      vendors = vs
    }),
      useHead({
        title: 'Add Item',
        meta: [{ name: 'description', content: 'For adding items' }],
      })
  },
  methods: {
    async addItem() {
      let image: string = this.itemURL
      if (image === '')
        image =
          'https://ae01.alicdn.com/kf/S350c52d3415d4f41a4579cbd10d982a6B.jpg'
      await addDoc(collection(db, 'Items'), {
        Name: this.itemName,
        Description: this.itemDesc,
        Vendor: this.itemVendor,
        itemId: this.itemID,
        PurchaseCost: this.itemPCost,
        SalePrice: this.itemSPrice,
        TotalStockAvailable: this.countChange,
        ImageItemUrl: image,
      })
      console.log('+')
      this.status = true
      if (this.status) await router.push('/items')
    },
  },
})
</script>

<template>
  <button class="button-left-arrow" @click="$router.back()" id="but">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      class="bi bi-arrow-left"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
      ></path>
    </svg>
  </button>

  <div class="registration-form">
    <form @submit.prevent="addItem">
      <div class="input-block">
        <p for="xxx_fname" class="form-label required">Item-ID</p>
        <input aria-label="Item-ID" type="text" required v-model="itemID" />
      </div>

      <div class="input-block">
        <p for="xxx_fname" class="form-label required">Name</p>
        <input aria-label="Name" type="text" required v-model="itemName" />
      </div>

      <div class="input-block">
        <p>Description</p>
        <input type="text" id="text" v-model="itemDesc" />
      </div>

      <div class="input-block">
        <p>Path to Image</p>
        <input type="url" placeholder="https://" v-model="itemURL" />
      </div>

      <div class="input-block">
        <p for="xxx_fname" class="form-label required">Vendor</p>
        <select v-model="itemVendor" required>
          <ItemsChooseVendorList
            v-for="vendor in vendors"
            :key="vendor.id"
            :name="vendor.Name"
          >
          </ItemsChooseVendorList>
        </select>
      </div>

      <div class="input-block">
        <p for="xxx_fname" class="form-label required">Purchase Cost ($)</p>
        <input
          type="number"
          step="0.01"
          placeholder="0.00"
          v-model="itemPCost"
          required
        />
      </div>

      <div class="input-block">
        <p for="xxx_fname" class="form-label required">Sale price ($)</p>
        <input
          type="number"
          step="0.01"
          placeholder="0.00"
          v-model="itemSPrice"
          required
        />
      </div>

      <div class="input-block">
        <p for="xxx_fname" class="form-label required">Total Stock Available</p>
        <span class="slider-value">{{ countChange }}</span>
        <input
          type="range"
          max="100"
          v-model="countChange"
          id="countChange"
          required
        />
      </div>
      <div class="bottom-panel" id="bottom-panel">
        <a @click="$router.back()" href="#" class="nav-item">Cancel</a>
        <input type="submit" value="Save" class="nav-item" id="save" />
      </div>
    </form>
  </div>

  <top-panel name_of_page="Add" vis="visible"></top-panel>
</template>

<style scoped>
.registration-form {
  width: 550px;
  height: max-content;
  background-color: #ffffff;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 62px;
  justify-items: center;
  padding: 10px 19px 45px 15px;
}

input {
  width: 100%;
  height: 48px;
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
  color: #202124;
  border-radius: 6px;
  border: solid 1px #8f8f8f;
}

select {
  width: 100%;
  height: 48px;
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
  color: #202124;
  border-radius: 6px;
  border: solid 1px #8f8f8f;
}

select:checked {
  border: solid 3px #464646;
}

p {
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  color: #202124;
  position: relative;
  opacity: 80%;
  padding: 0;
}

.input-block {
  padding-bottom: 20px;
}

.button-left-arrow {
  position: fixed;
  width: 30px;
  height: 30px;
  border: 0;
  background-color: white;
  margin-top: -45px;
  z-index: 100;
}

.button-left-arrow:hover {
  cursor: pointer;
}

.required:after {
  content: ' *';
  color: red;
  font-weight: 100;
}

.bottom-panel {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  box-shadow: 0 0 10px 0 rgb(121, 112, 112);
  z-index: 1000;
}

.nav-item {
  font-family: 'Rubik', sans-serif;
  flex: 1 1 auto;
  /* margin: 0 80px; */
  padding: 15px;
  color: #202124;
  width: 70px;
  opacity: 80%;
  text-decoration: none;
  text-align: center;
  background-color: white;
  border: 0;
}

.nav-item:hover {
  background-color: #c8c8c8;
  color: #202124;
  transition: background-color 0.5s;
}

#save {
  color: #565ed7;
  font-weight: bolder;
  font-size: 17px;
  border-radius: 0;
}

.slider-value {
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  color: #202124;
  position: relative;
}

@media only screen and (max-width: 720px) {
  input {
    width: 95%;
  }

  .registration-form {
    width: 97vw;
  }

  select {
    width: 95%;
  }

  #countChange {
    width: 90%;
  }
}

@media only screen and (min-height: 915px) {
  .registration-form {
    height: calc(100vh + 120px);
  }
}

@media only screen and (min-height: 1100px) {
  .registration-form {
    height: calc(100vh - 120px);
  }
}
</style>
