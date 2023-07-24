<script lang="ts">

    import { defineComponent } from "vue";

    export default defineComponent({
      name: "InventoryLogOnPage",
      props: ["id", "name", "date", "time", "countChange", "imageItemUrl"],
    });
</script>

<template>
  <div class="inventoryLog">
    <div class="info">
      <div>
        <div class="log-item-title">
          <img :src="imageItemUrl" alt="item image" />
          <h2>{{ name }}</h2>
        </div>
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

<style scoped>

.inventoryLog {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid #e0e0e0;
  background-color: #FFFFFF;

  position: relative;
}

.inventoryLog:hover {
  background-color: #f5f5f5;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.log-item-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.log-item-title img {
  width: 40px;
  height: 40px;
  margin-right: 1rem;
}

h2 {
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  color: #202124;
  position: relative;
  margin-left: 0;
}

h3 {
  font-family: "Rubik", sans-serif;
  font-size: 12px;
  position: relative;
  color: #202124;
  opacity: 80%;
  margin-left: 0;
}
</style>
