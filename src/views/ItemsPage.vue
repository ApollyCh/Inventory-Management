<script lang="ts">
import { defineComponent } from 'vue'
import TopPanel from '@/components/TopPanel.vue'
import BottomPanel from '@/components/BottomPanel.vue'
import { useRouter } from 'vue-router'
import ItemsList from '@/components/ItemComponents/ItemsList.vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  name: 'ItemsPage',
  components: {
    ItemsList,
    TopPanel,
    BottomPanel,
  },
  data() {
    return {
      showComponent: false,
    }
  },
  setup() {
    useHead({
      title: 'Items',
      meta: [{ name: 'description', content: 'Storage all items' }],
    })
    const router = useRouter()
    const click = () => {
      router.push({
        path: '/items/add',
      })
    }
    return {
      click,
    }
  },
})
</script>

<template>
  <div>
    <TopPanel name_of_page="Items"></TopPanel>
    <BottomPanel></BottomPanel>
    <ItemsList></ItemsList>

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
  </div>
</template>

<style scoped>
.round-button {
  position: fixed;
  width: 80px;
  height: 80px;
  line-height: 60px;
  border: 2px solid #f5f5f5;
  border-radius: 50%;
  color: #f5f5f5;
  text-align: center;
  text-decoration: none;
  background: #565ed7;
  box-shadow: 0 0 3px gray;
  font-size: 45px;
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  top: calc(100vh - 140px);
  left: calc(100vw - 85px);
}

.round-button:hover {
  background: #848cff;
  transition: background-color 0.3s;
  cursor: pointer;
}

@media only screen and (max-width: 480px) {
  ItemsList {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .round-button {
    width: 60px;
    height: 60px;
    line-height: 50px;
    z-index: 10;
  }
}

@media only screen and (min-width: 480px) and (max-width: 1024px) {
  .round-button {
    width: 70px;
    height: 70px;
    line-height: 50px;
    z-index: 10;
  }
}
</style>
