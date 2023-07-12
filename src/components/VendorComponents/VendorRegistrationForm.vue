<script lang="ts">
import { defineComponent } from "vue";
import TopPanel from "../TopPanel.vue";
import { useRouter } from "vue-router";
import SavePanel from "@/components/SavePanel.vue";

export default defineComponent({
  name: "VendorRegistrationForm",
  computed: {
    SavePanel() {
      return SavePanel;
    },
  },
  components: { SavePanel, TopPanel },
  setup() {
    const click = () => {
      history.go(-1);
    };
    return {
      click,
    };
  },
  data() {
    return {
      inputName: "",
      inputPhone: "",
      inputEmail: "",
      inputUrl: "",
      inputAddress: "",
      status: false,
    };
  },
  methods: {
    checkStatus() {
      this.status = true;
    },
  },
});
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

  <div class="registration-form">
    <form @submit.prevent="checkStatus">
      <div class="input-block">
        <p for="xxx_fname" class="form-label required">Name</p>
        <input
          aria-label="Name"
          type="text"
          required
          id="name"
          v-model="this.inputName"
        />
      </div>

      <div class="input-block">
        <p>Logo</p>
        <input aria-label="Logo" type="file" accept="image/*" id="logo" />
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
      <save-panel
        table-name="Vendors"
        :name="this.inputName"
        :address="this.inputAddress"
        :email="this.inputEmail"
        :url="this.inputUrl"
        :phone="this.inputPhone"
        :status="this.status"
      ></save-panel>
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
</style>
