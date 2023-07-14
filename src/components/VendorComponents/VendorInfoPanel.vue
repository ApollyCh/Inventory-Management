<script setup lang="ts">
import TopPanel from "../TopPanel.vue";
import BottomPanel from "../BottomPanel.vue";
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import db from "../dataBase";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import type { Vendor } from "@/lib/vendor";

const router = useRouter();
const route = useRoute();

let show = ref(false)
const vendor = ref<Vendor>();
const r = ref<any>();
r.value = route.params;
onMounted(async () => {
  const docRef = doc(db, "Vendors", r.value.id);
  const docSnap = await getDoc(docRef);
  vendor.value = docSnap.data() as Vendor;
  show.value = true
});

const deleteVendor = async () => {
  await deleteDoc(doc(db, "Vendors", r.value.id));
  await router.push({
    path: "/vendors",
  });
};

const toEditVendor = () => {
  router.push(`/vendors/${r.value.id}/edit`);
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

  <div class="container-of-vendor" v-if="show">
    <img
      :src="
        vendor?.LogoPath ??
        'https://www.appsheet.com/image/getremoteimageurl?url=https%3A%2F%2Ffonts.gstatic.com%2Fs%2Fi%2Fgooglematerialicons%2Fapartment%2Fv5%2Fgm_grey-48dp%2F2x%2Fgm_apartment_gm_grey_48dp.png&width=600'
      "
      alt="Company Logo"
    />

    <div class="all-container">
      <div class="name">
        <p class="type-of-inf">Name</p>
        <p class="information">{{ vendor?.Name ?? "" }}</p>
      </div>

      <div class="name">
        <p class="type-of-inf">URL</p>
        <p class="information">{{ vendor?.URL ?? "" }}</p>
      </div>

      <div class="name">
        <p class="type-of-inf">Phone</p>
        <p class="information">{{ vendor?.Phone ?? "" }}</p>
      </div>

      <div class="name">
        <p class="type-of-inf">Email</p>
        <p class="information">{{ vendor?.Email ?? "" }}</p>
      </div>

      <div class="name">
        <p class="type-of-inf">Address</p>
        <p class="information">{{ vendor?.Address ?? "" }}</p>
      </div>
    </div>
    <button class="delete-button" @click="modal = !modal" v-if="!modal">
      Delete Vendor
    </button>
    <hr v-if="modal" />
    <div v-if="modal" class="delete-window">
      <p id="label-delete" class="type-of-inf">
        Are you sure you want to delete this message?
      </p>
      <button class="no-delete" @click="modal = !modal">No</button>
      <button class="yes-delete" @click="deleteVendor">Yes</button>
    </div>
  </div>
  <div class="add-buttons">
    <button
      class="round-button"
      data-toggle="tooltip"
      data-placement="right"
      title="Edit"
      @click="toEditVendor"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        class="bi bi-pencil-square"
        viewBox="1 -1 15 16"
      >
        <path
          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
        />
        <path
          fill-rule="evenodd"
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
        />
      </svg>
    </button>
  </div>
  <top-panel name_of_page="Details"></top-panel>

  <bottom-panel></bottom-panel>
</template>

<style scoped>
.container-of-vendor {
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
  width: 100px;
  height: 100px;
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
