<script setup lang="ts">
import { onMounted, ref } from "vue";
import TopPanel from "../TopPanel.vue";
import type { Vendor } from "@/lib/vendor";
import { doc, getDoc } from "firebase/firestore";
import db from "@/components/dataBase";
import { useRoute } from "vue-router";
import EditPanel from "@/components/VendorComponents/ChangingPannels/EditPanel.vue";

const click = () => {
  history.go(-1);
};

let inputName: string;
let inputPhone: string;
let inputEmail: string;
let inputUrl: string;
let inputAddress: string;
let inputLogo: string;

const route = useRoute();
const vendor = ref<Vendor>();
const r = ref<any>();
r.value = route.params;
let show = ref(false);
onMounted(async () => {
  const docRef = doc(db, "Vendors", r.value.id);
  const docSnap = await getDoc(docRef);
  vendor.value = docSnap.data() as Vendor;
  inputName = vendor.value.Name;
  inputPhone = vendor.value.Phone;
  inputEmail = vendor.value.Email;
  inputUrl = vendor.value.URL;
  inputAddress = vendor.value.Address;
  inputLogo = vendor.value.LogoPath;
  show.value = true;
});

let status = ref(false);

const checkStatus = () => {
  status.value = true;
};

const getName = () => {
  inputName = vendor.value.Name;
  console.log(inputName);
};
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

  <div class="registration-form" v-if="show">
    <form @submit.prevent="checkStatus">
      <div class="input-block">
        <p for="xxx_fname" class="form-label required">Name</p>
        <input
          aria-label="Name"
          type="text"
          required
          id="name"
          v-model="inputName"
          v-on:update:inputName="getName"
        />
      </div>

      <div class="input-block">
        <p>Path to Logo</p>
        <input
          aria-label="Logo"
          type="url"
          id="logo"
          placeholder="https://"
          v-model="inputLogo"
        />
      </div>

      <div class="input-block">
        <p>URL</p>
        <input
          aria-label="Name"
          type="url"
          placeholder="https://"
          id="url"
          v-model="inputUrl"
        />
      </div>

      <div class="input-block">
        <p for="xxx_fname" class="form-label required">Phone</p>
        <input
          aria-label="Name"
          type="tel"
          required
          id="phone"
          v-model="inputPhone"
        />
      </div>

      <div class="input-block">
        <p for="xxx_fname" class="form-label required">Email</p>
        <input
          aria-label="Name"
          type="email"
          required
          id="email"
          v-model="inputEmail"
        />
      </div>

      <div class="input-block">
        <p>Address</p>
        <input
          aria-label="Name"
          type="text"
          id="address"
          v-model="inputAddress"
        />
      </div>

      <hr v-if="status" />
      <div v-if="status" class="delete-window">
        <p id="label-delete" class="type-of-inf">
          Are you sure you want to submit this information?
        </p>
      </div>

      <edit-panel
        table-name="Vendors"
        :name="inputName"
        :address="inputAddress"
        :email="inputEmail"
        :url="inputUrl"
        :phone="inputPhone"
        :status="status"
        :logo="inputLogo"
        :id="r.id"
      ></edit-panel>
    </form>
  </div>

  <top-panel name_of_page="Vendors Form" vis="visible"></top-panel>
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

.delete-window {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 26px;
}
</style>
