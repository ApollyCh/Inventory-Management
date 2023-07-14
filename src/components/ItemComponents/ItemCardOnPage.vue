<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemCardOnPage",
  props: ["name", "description", "image"],
});
</script>

<template>
  <div class="item">
    <img :src="this.image"  alt="item-icon"/>
    <div class="info">
      <h2>{{ this.name }}</h2>
      <h3>{{ this.description }}</h3>
    </div>
  </div>
</template>

<style scoped>
.item {
  background-color: rgb(254, 254, 254);
  width: 340px;
  height: 82px;
  margin-top: 80px;
  border: solid 1px #dbdbdb;
  margin-left: 30px;

}

.item:hover {
  box-shadow: 0 6px 6px rgb(143, 143, 143);
  cursor: pointer;
  transition: box-shadow 0.3s;
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

.info {
  position: relative;
  margin-top: -75px;
  margin-left: 95px;
}

img {
  overflow: hidden;
  width: 70px;
  height: 70px;
  object-fit: contain;
  flex: 0 0 70px;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-left: 10px;
}
</style>
