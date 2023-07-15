<script setup lang="ts">
import { onMounted, ref } from "vue";
import TopPanel from "../TopPanel.vue";
import type { Vendor } from "@/lib/vendor";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from "@/components/dataBase";
import { useRoute } from "vue-router";
import router from "@/router";

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

async function editVendor() {
  let logo: string = inputLogo;
  if (logo === "")
    logo =
      "https://www.appsheet.com/image/getremoteimageurl?url=https%3A%2F%2Ffonts.gstatic.com%2Fs%2Fi%2Fgooglematerialicons%2Fapartment%2Fv5%2Fgm_grey-48dp%2F2x%2Fgm_apartment_gm_grey_48dp.png&width=600";

  await updateDoc(doc(db, "Vendors", r.value.id), {
    Name: inputName,
    Phone: inputPhone,
    Address: inputAddress,
    URL: inputUrl,
    Email: inputEmail,
    LogoPath: logo,
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

  <div class="registration-form" v-if="show">
    <form @submit.prevent="editVendor">
      <div class="input-block">
        <p for="xxx_fname" class="form-label required">Name</p>
        <input
          aria-label="Name"
          type="text"
          required
          id="name"
          v-model="inputName"
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
      <div class="bottom-panel" id="bottom-panel">
        <a @click="$router.back()" href="#" class="nav-item">Cancel</a>
        <input type="submit" value="Save" class="nav-item" id="save" />
      </div>
    </form>
  </div>

  <top-panel name_of_page="Edit" vis="visible"></top-panel>
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
</style>
