<script lang="ts">
import { useRouter } from 'vue-router'
import {defineComponent} from "vue";

export default defineComponent({
  setup() {
    const router = useRouter()
    const click = () => {
      router.push({
        path: history.go(-1)
      })
    }
    return {
      click
    }
  }
})

</script>

<template>
  <div class="thebody">
    <img src="https://www.appsheet.com:443/fsimage.png?appid=59e436dd-c035-4089-b906-3b1d28fdd2dd&datasource=google&filename=DocId%3D18ddbYWpxQhHGBNj4tY8uVC_4moFpZ7Ff&signature=7eb4c1c1faf0c15e5fd798c1a445c50d05a296e048a7863eb56a774746e8f050&tableprovider=google&userid=2078346" alt="img-icon">
    <div class="text">
      <h1>Inventory Management</h1>
      <h2>Manage inventory levels, stock value and vendor details</h2>
    </div>
  </div>
  <button id="ok-button" @click="click">OK</button>
</template>

<style scoped>

body {
  background-color: #ecebeb;
}

.bottom-panel {
  visibility: hidden;
}

.top-panel {
  visibility: hidden;
}

button {
  width: 140px;
  height: 40px;
  background-color: #4891DB;
  border: 0;
  font-family: 'Rubik', sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  border-radius: 10px;
  position: relative;
  top: 450px;
  left: 45%;
}

button:hover {
  box-shadow: 0px 3px 3px rgb(155, 154, 154);
  transition: box-shadow 0.2s;
  cursor: pointer;
}

.thebody {
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: row;
  position: relative;
  top: 200px;
  margin-left: 27%;
}

.text {
  display: flex;
  flex-direction: column;
}
h1 {
  font-family: 'Rubik', sans-serif;
  position: relative;
  margin-left: 70px;
  font-weight: bold;
  font-size: 20px;
}

h2 {
  margin-top: -2px;
  font-family: 'Rubik', sans-serif;
  position: relative;
  margin-left: 70px;
  font-weight: bold;
  font-size: 17px;
}


img {
  position: relative;

}
</style>
<script setup lang="ts">
</script>