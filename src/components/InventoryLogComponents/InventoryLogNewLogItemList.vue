<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
      name: "InventoryLogOnPage",
      props: ["id", "itemId", "name", "imageItemUrl"],
    });
</script>

<template>
  <option :value="itemId">
    {{ name }}
  </option>
</template>

<style scoped>
  option {
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    color: #202124;
    position: relative;
    margin-left: 0;
  }
</style>