<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANJLDf9txyAU8N1Y8jT7cFY6Ny1szHC9s",
  authDomain: "inventory-manager-b4ad1.firebaseapp.com",
  projectId: "inventory-manager-b4ad1",
  storageBucket: "inventory-manager-b4ad1.appspot.com",
  messagingSenderId: "661733570798",
  appId: "1:661733570798:web:73df74cd973d17fb34dbff",
  measurementId: "G-06C0XGZQJ0",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default defineComponent({
  name: "SavePanel",
  props: [
    "tableName",
    "name",
    "phone",
    "url",
    "address",
    "email",
    "status",
    "logo",
  ],
  setup() {
    const router = useRouter();
    const back = () => {
      router.push({
        path: "/vendors",
      });
    };
    return {
      back,
    };
  },
  methods: {
    async addVendor() {
      let logo: string = this.logo;
      if (logo === "")
        logo =
          "https://www.appsheet.com/image/getremoteimageurl?url=https%3A%2F%2Ffonts.gstatic.com%2Fs%2Fi%2Fgooglematerialicons%2Fapartment%2Fv5%2Fgm_grey-48dp%2F2x%2Fgm_apartment_gm_grey_48dp.png&width=600";

      if (this.status === true) {
        await addDoc(collection(db, String(this.tableName)), {
          Name: this.name,
          Phone: this.phone,
          Address: this.address,
          URL: this.url,
          Email: this.email,
          LogoPath: logo

        });
        this.back();
      }
    },
  },
});
</script>

<template>
  <div class="bottom-panel" id="bottom-panel">
    <a @click="back" href="#" class="nav-item">Cancel</a>
    <input
      type="submit"
      value="Save"
      class="nav-item"
      id="save"
      @click="addVendor"
    />
    <!--    <a href="#" class="nav-item" >Save</a>-->
  </div>
</template>

<style scoped>
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
</style>
