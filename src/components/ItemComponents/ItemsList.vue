<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

import { collection, getDocs } from "firebase/firestore";
import db from "../dataBase";
import ItemCardOnPage from "../ItemComponents/ItemCardOnPage.vue";

export const items = ref([]) as any;
export default defineComponent({
  name: "ItemsList",
  components: {
    ItemCardOnPage,
  },
  setup() {
    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, "Items"));
      let its = [] as any;
      querySnapshot.forEach((doc) => {
        const v = {
          id: doc.id,
          name: doc.data().Name,
          description: doc.data().Description,
          img: doc.data().ImageItemUrl,
        };
        its.push(v);
      });
      items.value = its;
    });
  },
  
  data() {
    return {
      items,
      selectedItem: null,
    };
  },

  methods: {
    goToItem(itemId: string) {
      this.$router.push(`/items/${itemId}`);
    },
  },
});
</script>

<template>
  <div class="items_list">
    <ItemCardOnPage
      v-for="item in items"
      :key="item.id"
      :name="item.name"
      :description="item.description"
      :image="item.img"
      @click="goToItem(item.id)"

    >
    </ItemCardOnPage>
  </div>
</template>

<style scoped>
.items_list {
  display: grid;
  grid-template-columns: repeat(3, 0.3fr);
  justify-content: center;
  position: relative;
  top: 60px;
  padding-bottom: 60px;
}

@media only screen and (max-width: 890px) {
  .items_list {
    grid-template-columns: repeat(1, auto);
  }
}

@media only screen and (min-width: 780px) and (max-width: 1024px) {
  .items_list {
    grid-template-columns: repeat(2, 0.6fr);
    padding-left: 4vw;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1800px) {
  .items_list {
    grid-template-columns: repeat(3, 0.5fr);
    padding-left: 4vw;
  }
}
</style>
