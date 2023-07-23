<script lang="ts">
import { defineComponent } from "vue";
import TopPanel from "@/components/TopPanel.vue";
import BottomPanel from "@/components/BottomPanel.vue";
import { useRouter } from "vue-router";
import ItemCardOnPage from "@/components/ItemComponents/ItemCardOnPage.vue";
import ItemsList from "@/components/ItemComponents/ItemsList.vue";
import ItemRegistrationForm from "@/components/ItemComponents/ItemRegistrationForm.vue";

export default defineComponent({
  name: "ItemsPage",
  components: {
    ItemRegistrationForm,
    ItemsList,
    TopPanel,
    BottomPanel
  }
});
</script>

<template>
  <div>
<!--    <TopPanel name_of_page="Items"></TopPanel>-->
<!--    <BottomPanel></BottomPanel>-->
<!--    <ItemsList></ItemsList>-->
    <ItemRegistrationForm></ItemRegistrationForm>

    <div class="add-buttons">
      <button class="round-button" data-toggle="tooltip" data-placement="right" title="Add"
      >+
      </button>
    </div>
  </div>
</template>

<style scoped>
ItemCardOnPage {
  position: relative;
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
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  top: 510px;
  left: 93%;

}
</style>