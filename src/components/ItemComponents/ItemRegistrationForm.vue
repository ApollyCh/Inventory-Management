<script lang="ts">
import { defineComponent } from "vue";
import TopPanel from "../TopPanel.vue";
import { useRouter } from "vue-router";
import SavePanel from "@/components/SavePanel.vue";

export default defineComponent({
  name: "ItemRegistrationForm",
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
      itemID: "",
      name: "",
      description: "",
      imageURL: "",
      vendorName: "",
      status: false,
      purchaseCost: 0.0,
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
        <p for="xxx_fname" class="form-label required">Item-ID</p>
        <input aria-label="Item-ID" type="text" required v-model="itemID" />
      </div>

      <div class="input-block">
        <p for="xxx_fname" class="form-label required">Name</p>
        <input aria-label="Name" type="text" required v-model="name" />
      </div>

      <div class="input-block">
        <p>Description</p>
        <input
          aria-label="Name"
          type="text"
          id="address"
          v-model="description"
        />
      </div>

      <div class="input-block">
        <p for="xxx_fname" class="form-label required">Path to Image</p>
        <input
          aria-label="Name"
          type="url"
          placeholder="https://"
          v-model="imageURL"
          required
        />
      </div>

      <div class="input-block">
        <p>Vendor</p>
        <select v-model="vendorName">
          <option value="1">Company 1</option>
        </select>
      </div>

      <div class="input-block">
        <p for="xxx_fname" class="form-label required">Purchase Cost ($)</p>
        <input
          aria-label="Name"
          type="number"
          step="0.01"
          placeholder="0.00"
          v-model="purchaseCost"
          required
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

  <top-panel name_of_page="Details" vis="visible"></top-panel>
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

select {
  width: 100%;
  height: 48px;
  font-family: "Rubik", sans-serif;
  font-size: 20px;
  color: #202124;
  border-radius: 6px;
  border: solid 1px #8f8f8f;
}

select:checked {
  border: solid 3px #464646;
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
