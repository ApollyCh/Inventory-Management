<script lang="ts">
import {defineComponent} from "vue";
import router from "@/router";

export default defineComponent({
  name: 'BottomPanel',
  setup() {
    const toItems = () => {
      router.push({
        path: '/items'
      })
    }
    return {
      toItems
    }
  }
})


</script>

<template>
  <div class="bottom-panel" id="bottom-panel">
    <a href="#" class="nav-item" @click="toItems">Items</a>
    <a href="#" class="nav-item">Inventory Log</a>
    <a href="#" class="nav-item">Monitor</a>
    <a href="/vendors" class="nav-item">Vendors</a>
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
  z-index: 10000;


}

.nav-item {
  font-family: 'Rubik', sans-serif;
  flex: 1 1 auto;
  /* margin: 0 80px; */
  padding: 15px;
  color: #202124;
  width: 70px;
  opacity: 80%;
  text-decoration: none;
  text-align: center;
}

.nav-item:hover {
  background-color: #c8c8c8;
  color: #202124;
  transition: background-color 0.5s
}


</style>