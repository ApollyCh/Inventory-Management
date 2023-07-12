<script lang="ts">
import TopPanel from "../TopPanel.vue";
import BottomPanel from "../BottomPanel.vue";
import { useRouter } from "vue-router";
import { defineComponent, onMounted } from "vue";
//
// import firebase from 'firebase/app';
// import 'firebase/database';
// import { ref } from "vue";
//
// const firebaseConfig = {
//   apiKey: "AIzaSyANJLDf9txyAU8N1Y8jT7cFY6Ny1szHC9s",
//   authDomain: "inventory-manager-b4ad1.firebaseapp.com",
//   projectId: "inventory-manager-b4ad1",
//   storageBucket: "inventory-manager-b4ad1.appspot.com",
//   messagingSenderId: "661733570798",
//   appId: "1:661733570798:web:73df74cd973d17fb34dbff",
//   measurementId: "G-06C0XGZQJ0",
// };
//
// firebase.initializeApp(firebaseConfig);
//
// const dbRef = firebase.database().ref('Vendors');
export default defineComponent({
  name: "VendorInfoPanel",
  components: {
    BottomPanel,
    TopPanel,
  },

  setup() {
    const router = useRouter();
    const click = () => {
      router.push({
        path: history.go(-1) as any,
      });
    };
    const toVendorPage = () => {
      router.push({
        path: "/vendors",
      });
    };

    // const data = ref(null);
    //
    // onMounted(async () => {
    //   // Fetch data from Firebase by ID
    //   // const docId = 'you-id'; // Replace with the actual document ID
    //   const docRef = db.collection("your-collection").doc(this.id()); // Replace with the actual collection name
    //
    //   try {
    //     const snapshot = await docRef.get();
    //     if (snapshot.exists()) {
    //       data.value = snapshot.data();
    //     } else {
    //       console.log("Document does not exist");
    //     }
    //   } catch (error) {
    //     console.error("Error getting document:", error);
    //   }
    // });
    return {
      click,
      toVendorPage,
      // data,
    };
  },
  data() {
    return {
      modal: false,
      vendor: null,
    };
  },
  // methods: {
  //   async fetchVentor(id: string) {
  //     const ref = db.ref("Vendors");
  //     this.vendor = doc;
  //   },
  // },

  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  created() {
    this.fetchVentor(this.id);
  },
});
</script>

<template>
  <button class="button-left-arrow" @click="click">
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

  <div class="container-of-vendor">
    <img
      src="https://www.appsheet.com/image/getremoteimageurl?url=https%3A%2F%2Ffonts.gstatic.com%2Fs%2Fi%2Fgooglematerialicons%2Fapartment%2Fv5%2Fgm_grey-48dp%2F2x%2Fgm_apartment_gm_grey_48dp.png&width=600"
    />

    <div class="all-container">
      <div class="name">
        <p class="type-of-inf">Name</p>
        <p class="information">{{ vendor.name }}</p>
      </div>

      <div class="name">
        <p class="type-of-inf">URL</p>
        <p class="information">{{ vendor.url }}</p>
      </div>

      <div class="name">
        <p class="type-of-inf">Phone</p>
        <p class="information">{{ vendor.phone }}</p>
      </div>

      <div class="name">
        <p class="type-of-inf">Email</p>
        <p class="information">{{ vendor.email }}</p>
      </div>

      <div class="name">
        <p class="type-of-inf">Address</p>
        <p class="information">{{ vendor.address }}</p>
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
      <button class="yes-delete" @click="toVendorPage">Yes</button>
    </div>
  </div>
  <top-panel name_of_page="Details"></top-panel>

  <bottom-panel></bottom-panel>
</template>

<style scoped>
vendors-list {
  visibility: hidden;
}

.some-kind-of-body {
  justify-content: center;
  background-color: #565ed7;
  width: 1000px;
  height: 1000px;
}

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
  box-shadow: 0px 4px 4px rgb(190, 151, 151);
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
  box-shadow: 0px 4px 4px rgb(190, 151, 151);
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
</style>
