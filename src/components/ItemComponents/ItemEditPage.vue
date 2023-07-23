<script setup lang="ts">
import { onMounted, ref } from "vue";
import TopPanel from "../TopPanel.vue";
import type { Item } from "@/lib/item";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from "@/components/dataBase";
import { useRoute } from "vue-router";
import router from "@/router";

const click = () => {
  history.go(-1);
};

let name: string;
let description: string;
let imageUrl: string;
let vendor: string;
let purchaseCost: number;
let salePrice: number;
let itemId: string;

const route = useRoute();
const item = ref<Item>();
const r = ref<any>();
r.value = route.params;
let show = ref(false);

onMounted(async () => {
  const docRef = doc(db, "Items", r.value.id);
  const docSnap = await getDoc(docRef);
  item.value = docSnap.data() as Item;

  name = item.value.Name;
  description = item.value.Description;
  imageUrl = item.value.ImageItemUrl;
  vendor = item.value.Vendor;
  purchaseCost = item.value.PurchaseCost;
  salePrice = item.value.PurchaseCost;
  itemId = item.value.itemId;
  show.value = true;
});

let status = ref(false);

async function editItem() {
  let image: string = imageUrl;
  if (image === "")
    image = "https://ae01.alicdn.com/kf/S350c52d3415d4f41a4579cbd10d982a6B.jpg";

  await updateDoc(doc(db, "Items", r.value.id), {
    Name: name,
    Description: description,
    ImageItemUrl: imageUrl,
    Vendor: vendor,
    PurchaseCost: purchaseCost,
    SalePrice: salePrice,
  });
  status.value = true;
  if (status.value) await router.back();
}
</script>

<template>
  <button class="button-left-arrow" @click="click" id="but">
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

  <div class="edit-form" v-if="show">
    <form @submit.prevent="editItem">
      <div class="input-block">
        <p for="xxx_fname" class="form-label required">Item ID</p>
        <input
          aria-label="Item ID"
          type="text"
          required
          id="itemId"
          v-model="itemId"
        />
      </div>

      <div class="input-block">
        <p for="xxx_fname" class="form-label required">Name</p>
        <input
          aria-label="Name"
          type="text"
          id="name"
          v-model="name"
        />
      </div>

      <div class="input-block">
        <p>Description</p>
        <input
          aria-label="Description"
          type="text"
          id="description"
          v-model="description"
        />
      </div>

      <div class="input-block">
        <p for="xxx_fname" class="form-label required">Path to Image</p>
        <input
          aria-label="ImageUrl"
          type="url"
          placeholder="https://"
          v-model="imageUrl"
          required
        />
      </div>

      <div class="input-block">
        <p>Vendor</p>
        <select v-model="vendor">
          <option value="1">Company 1</option>
        </select>
      </div>

      <div class="input-block">
        <p for="xxx_fname" class="form-label required">Purchase Cost ($)</p>
        <input
          aria-label="PurchaseCost"
          type="number"
          step="0.01"
          placeholder="0.00"
          v-model="purchaseCost"
          required
        />
      </div>

      <div class="input-block">
        <p for="xxx_fname" class="form-label required">Sale price ($)</p>
        <input
          aria-label="SalePrice"
          type="number"
          step="0.01"
          placeholder="0.00"
          v-model="salePrice"
          required
        />
      </div>

      <div class="bottom-panel" id="bottom-panel">
        <a @click="$router.back()" href="#" class="nav-item">Cancel</a>
        <input type="submit" value="Save" class="nav-item" id="save" />
      </div>
    </form>
  </div>

  <top-panel name_of_page="Edit" vis="visible"></top-panel>
</template>

<style scoped>
.edit-form {
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
  font-family: "Rubik", sans-serif;
  font-size: 20px;
  color: #202124;
  border-radius: 6px;
  border: solid 1px #8f8f8f;
}

p {
  font-family: "Rubik", sans-serif;
  font-size: 18px;
  color: #202124;
  position: relative;
  opacity: 80%;
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
  content: " *";
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
  font-family: "Rubik", sans-serif;
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
}

input:hover {
  cursor: pointer;
}

@media only screen and (max-width: 720px) {
  .edit-form {
    width: 97vw;
  }

  input {
    width: 100%;
  }
}

@media only screen and (min-height: 915px) {
  .edit-form {
    height: calc(100vh - 120px);
  }
}
</style>