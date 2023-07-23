<script setup lang="ts">
import TopPanel from "../TopPanel.vue";
import BottomPanel from "../BottomPanel.vue";
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import db from "../dataBase";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import type { Item } from "@/lib/item";

const router = useRouter();
const route = useRoute();

let show = ref(false)
const item = ref<Item>();
const r = ref<any>();
r.value = route.params;
onMounted(async () => {
  const docRef = doc(db, "Items", r.value.id);
  const docSnap = await getDoc(docRef);
  item.value = docSnap.data() as Item;
  show.value = true
});

const deleteItem = async () => {
  await deleteDoc(doc(db, "Items", r.value.id));
  await router.push({
    path: "/items",
  });
};

const toEditItem = () => {
  router.push(`/items/${r.value.id}/edit`);
};

const modal = ref(false);
</script>

<template>
  <button class="button-left-arrow" @click="router.back">
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

  <div class="container-of-item" v-if="show">
    <img
      :src="item?.ImageItemUrl"
      alt="Inventory Icon"
    />

    <div class="all-container">
      <div class="name">
        <p class="type-of-inf">Name</p>
        <p class="information">{{ item?.Name ?? "" }}</p>
      </div>

      <div class="name">
        <p class="type-of-inf">Item ID</p>
        <p class="information">{{ item?.itemId ?? "" }}</p>
      </div>

      <div class="name">
        <p class="type-of-inf">Description</p>
        <p class="information">{{ item?.Description ?? "" }}</p>
      </div>

      <div class="name">
        <p class="type-of-inf">Vendor</p>
        <p class="information">{{ item?.Vendor ?? "" }}</p>
      </div>

      <div class="name">
        <p class="type-of-inf">Purchase Cost</p>
        <p class="information">{{ item?.PurchaseCost ?? "" }}</p>
      </div>

      <div class="name">
        <p class="type-of-inf">Sale Price</p>
        <p class="information">{{ item?.SalePrice ?? "" }}</p>
      </div>

      <div class="name">
        <p class="type-of-inf">Current Stock Cost Value</p>
        <p class="information">{{ item?.TotalStockAvailable * item?.PurchaseCost ?? "" }}</p>
      </div>

      <div class="name">
        <p class="type-of-inf">Total Stock Available</p>
        <p class="information">{{ item?.TotalStockAvailable ?? "" }}</p>
      </div>
    </div>
    <button
      class="edit-button"
      data-toggle="tooltip"
      data-placement="right"
      @click="toEditItem"
    >
      Edit Item
    </button>
    <button class="delete-button" @click="modal = !modal" v-if="!modal">
      Delete Item
    </button>
    <hr v-if="modal" />
    <div v-if="modal" class="delete-window">
      <p id="label-delete" class="type-of-inf">
        Are you sure you want to delete this item?
      </p>
      <button class="no-delete" @click="modal = !modal">No</button>
      <button class="yes-delete" @click="deleteItem">Yes</button>
    </div>  
  </div>
  <top-panel name_of_page="Details"></top-panel>

  <bottom-panel></bottom-panel>
</template>

<style scoped>
.container-of-item {
  width: 768px;
  height: max-content;
  background-color: white;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 62px;
  padding-bottom: 70px;
}

img {
  width: 200px;
  height: 200px;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

p.type-of-inf {
  font-family: "Rubik", sans-serif;
  font-size: 13px;
  color: #202124;
  position: relative;
  opacity: 80%;
}

p.information {
  font-family: "Rubik", sans-serif;
  font-size: 20px;
  color: #202124;
  position: relative;
  margin-left: 0;
  font-weight: bold;
  margin-top: -5px;
}

#label-delete {
  font-size: 20px;
}

.delete-window {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.yes-delete {
  width: 45%;
  height: 50px;
  font-family: "Rubik", sans-serif;
  font-size: 20px;
  color: #ffffff;
  position: relative;
  opacity: 80%;
  background-color: #d91616;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgb(190, 151, 151);
}

.no-delete:hover {
  cursor: pointer;
  box-shadow: -2px 2px 8px 4px rgb(190, 151, 151);
}

.yes-delete:hover {
  cursor: pointer;
  box-shadow: -2px 2px 8px 4px rgb(190, 151, 151);
}

.no-delete {
  width: 45%;
  height: 50px;
  font-family: "Rubik", sans-serif;
  font-size: 20px;
  color: #343434;
  position: relative;
  opacity: 80%;
  background-color: #efefef;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgb(190, 151, 151);
  margin-right: 10px;
}

.name {
  margin-left: 15px;
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

.delete-button {
  width: 90%;
  height: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-family: "Rubik", sans-serif;
  font-size: 20px;
  color: #ffffff;
  position: relative;
  opacity: 80%;
  background-color: #d91616;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgb(190, 151, 151);
}

.delete-button:hover {
  cursor: pointer;
  box-shadow: -2px 2px 8px 4px rgb(190, 151, 151);
}

.edit-button {
  width: 90%;
  height: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-family: "Rubik", sans-serif;
  font-size: 20px;
  color: #ffffff;
  position: relative;
  opacity: 80%;
  background: #565ed7;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgb(190, 151, 151);
  margin-bottom: 20px;
}

.round-button {
  position: fixed;
  width: 80px;
  height: 80px;
  line-height: 70px;
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
</style>