<script lang="ts">

    import { defineComponent } from "vue";

    export default defineComponent({
      name: "InventoryLogOnPage",
      props: ["id", "name", "date", "time", "countChange"],
    });
</script>

<template>
  <div class="inventoryLog">
    <div class="info">
      <div> 
        <h2>{{ name }}</h2>
        <h3> {{ date }} {{ time }} </h3>
      </div>
      <div>
        <h3 v-if="countChange > 0" style="color: green">+{{ countChange }}</h3>
        <h3 v-else-if="countChange < 0" style="color: red">{{ countChange }}</h3>
        <h3 v-else>0</h3>
      </div>
    </div>
  </div>
</template>

<style>

.inventoryLog {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid #e0e0e0;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

</style>
