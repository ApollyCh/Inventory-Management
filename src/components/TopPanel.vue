<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'TopPanel',
  props: ['name_of_page'],
  setup() {
    const router = useRouter()
    const toAbout = () => {
      router.push({
        path: '/about',
      })
    }

    return {
      toAbout,
    }
  },
})
</script>

<template>
  <div class="top-panel">
    <img
      @click="toAbout"
      id="top-img"
      src="https://www.appsheet.com:443/fsimage.png?appid=59e436dd-c035-4089-b906-3b1d28fdd2dd&datasource=google&filename=DocId%3D18ddbYWpxQhHGBNj4tY8uVC_4moFpZ7Ff&signature=7eb4c1c1faf0c15e5fd798c1a445c50d05a296e048a7863eb56a774746e8f050&tableprovider=google&userid=2078346"
    />
    <p @click="toAbout" style="cursor: pointer">{{ name_of_page }}</p>
  </div>
</template>

<style scoped>
p {
  font-family: 'Rubik', sans-serif;
  position: absolute;
  margin-top: -30px;
  margin-left: 70px;
  font-weight: bold;
  font-size: 20px;
}

.top-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  height: 60px;
  border: solid 1px #bebebe;
  z-index: 10;
}

#top-img {
  position: relative;
  margin-left: 35px;
  margin-top: 15px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>
