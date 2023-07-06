<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent, reactive, VueElement, ref } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    RouterView
  }
})

</script>

<template>
      <router-view></router-view>
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
  margin: 0 -5px;

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

.top-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  height: 60px;
  border: solid 1px #bebebe;
}

#top-img {
  position: relative;
  margin-left: 35px;
  margin-top: 15px;
  width: 30px;
  height: 30px;
}



</style>
