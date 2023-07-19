<template>
    <div class="inventory-log-list" >
        <InventoryLogOnPage
            v-for="inventoryLog in inventoryLogs"
            :key="inventoryLog.id"
            :id="inventoryLog.id"
            :itemId="inventoryLog.itemId"
            :date="inventoryLog.date"
            :time="inventoryLog.time"
            :countChange="inventoryLog.countChange"
            >

        </InventoryLogOnPage>
    </div>
</template>

<script lang="ts">

    import { defineComponent, ref, onMounted } from "vue";

    import { collection, getDocs } from "firebase/firestore";
    import InventoryLogOnPage from "./InventoryLogOnPage.vue";
    import db from "../dataBase";

    export const inventoryLogs = ref([]) as any;

    export default defineComponent({
        name: "InventoryLogList",
        components: {
            InventoryLogOnPage,
        },
        setup() {
            onMounted(async () => {
                const querySnapshot = await getDocs(collection(db, "InventoryLog"));
                let ils = [] as any;
                querySnapshot.forEach((doc) => {
                    const il = {
                        id: doc.id,
                        itemId: doc.data().itemId,
                        date: doc.data().date,
                        time: doc.data().time,
                        countChange: doc.data().countChange,
                        timestamp: doc.data().timestamp,
                    };
                    ils.push(il);
                });
                inventoryLogs.value = ils;
                inventoryLogs.value.sort((a: any, b: any) => {
                    return b.timestamp - a.timestamp;
                });
            });
        },

        data() {
            return {
                inventoryLogs,
                selectedInventoryLog: null,
            };
        },
    })

</script>
