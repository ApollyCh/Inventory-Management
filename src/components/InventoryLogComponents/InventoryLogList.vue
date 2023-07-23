<template>
    <div class="inventory-log-list" >
        <InventoryLogOnPage
            v-for="inventoryLog in inventoryLogs"
            :key="inventoryLog.id"
            :id="inventoryLog.id"
            :name="inventoryLog.name"
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
                        name: doc.data().name,
                        date: doc.data().date,
                        time: doc.data().time,
                        countChange: doc.data().countChange,
                        timestamp: doc.data().timestamp,
                    };
                    ils.push(il);
                });
                ils.sort((a: any, b: any) => {
                    let tmpA: number = a.timestamp;
                    let tmpB: number = b.timestamp;
                    console.log(tmpA - tmpB);
                    
                    return (tmpB - tmpA);
                });
                inventoryLogs.value = ils;
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
