<script lang="ts">
    import { defineComponent } from "vue";
    import TopPanel from "@/components/TopPanel.vue";
    import BottomPanel from "@/components/BottomPanel.vue";
    import InventoryLogList from "@/components/InventoryLogComponents/InventoryLogList.vue";

    export default defineComponent( {
        name: "InventoryLogPage",
        components: {
            TopPanel,
            BottomPanel,
            InventoryLogList,
        }
    })
</script>

<template>
    <!-- <TopPanel></TopPanel> -->
    <InventoryLogList></InventoryLogList>
    <BottomPanel></BottomPanel>
</template>