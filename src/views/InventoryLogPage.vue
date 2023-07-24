<script lang="ts">
import { defineComponent } from 'vue'
import TopPanel from '@/components/TopPanel.vue'
import BottomPanel from '@/components/BottomPanel.vue'
import InventoryLogList from '@/components/InventoryLogComponents/InventoryLogList.vue'
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'

export default defineComponent({
  name: 'InventoryLogPage',
  components: {
    TopPanel,
    BottomPanel,
    InventoryLogList,
  },
  data() {
    return {
      showComponent: false,
    }
  },
  setup() {
    useHead({
      title: 'Log',
      meta: [
        {
          name: 'description',
          content: 'There person can manage items using log',
        },
      ],
    })
    const router = useRouter()
    const click = () => {
      router.push({
        path: '/log/add',
      })
    }
    return {
      click,
    }
  },
})
</script>

<template>
  <title>Inventory Log</title>
  <TopPanel name_of_page="Log"></TopPanel>
  <InventoryLogList class="list"></InventoryLogList>

  <div class="add-buttons">
    <button
      class="round-button"
      data-toggle="tooltip"
      data-placement="right"
      title="Add"
      @click="click"
    >
      +
    </button>
  </div>
  <BottomPanel></BottomPanel>
</template>

<style>
.list {
  margin-top: 3.9rem;
  margin-bottom: 3rem;
}

.round-button {
  position: fixed;
  width: 80px;
  height: 80px;
  line-height: 60px;
  border-radius: 50%;
  text-align: center;
  font-size: 40px;
  color: #fff;
  background: #565ed7;
  box-shadow: 0 0 3px gray;
  cursor: pointer;
  transition: 0.3s;
  top: calc(100vh - 140px);
  left: calc(100vw - 85px);
}

.round-button:hover {
  background: #848cff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.add-buttons {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
}

@media screen and (max-width: 1024px) {
  .round-button {
    width: 75px;
    height: 75px;
    line-height: 55px;
    font-size: 40px;
  }
}

@media screen and (max-width: 768px) {
  .round-button {
    width: 70px;
    height: 70px;
    line-height: 50px;
    font-size: 35px;
  }
}

@media screen and (max-width: 576px) {
  .round-button {
    width: 65px;
    height: 65px;
    line-height: 30px;
    font-size: 30px;
  }
}

@media screen and (max-width: 320px) {
  .round-button {
    width: 60px;
    height: 60px;
    line-height: 20px;
    font-size: 20px;
  }
}
</style>
