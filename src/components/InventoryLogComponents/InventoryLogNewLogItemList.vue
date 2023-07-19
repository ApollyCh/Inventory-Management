<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
      name: "InventoryLogOnPage",
      props: ["id", "itemId", "name"],
    });
</script>

<template>
  <option :value="itemId">{{ name }}</option>
</template>