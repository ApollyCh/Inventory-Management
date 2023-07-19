<script lang="ts">
    import { defineComponent, ref, onMounted } from "vue";
    import TopPanel from "@/components/TopPanel.vue";
    import BottomPanel from "@/components/BottomPanel.vue";
    import InventoryLogNewLogItemList from "./InventoryLogNewLogItemList.vue";
    import { addDoc, collection, getDocs, setDoc } from "firebase/firestore";
    import db from "@/components/dataBase";
    import router from "@/router";


    export const items = ref([]) as any;

    export default defineComponent( {
        name: "InventoryLogPage",
        components: {
            TopPanel,
            BottomPanel,
            InventoryLogNewLogItemList,
        }, 
        data(){
            return{
                itemId: "",
                countChange: 0,
                items,
                minForSlider: -100,
                status: ref(false)
            }
        },
        methods: {
            
            async addInventoryLog() {
                await addDoc(collection(db, "InventoryLog"), {
                    itemId: this.itemId,
                    date: new Date().toLocaleDateString(),
                    time: new Date().toLocaleTimeString(),
                    name: this.findItemNameByItemId(this.itemId),
                    countChange: this.countChange,
                    timestamp: Date.now(),
                });
                
                const querySnapshot = await getDocs(collection(db, "Items"));
                
                querySnapshot.forEach((doc) => {
                    if (doc.data().itemId === this.itemId){
                        setDoc(doc.ref, {
                            itemId: doc.data().itemId,
                            ImageItemUrl: doc.data().ImageItemUrl,
                            Name: doc.data().Name,
                            PurchaseCost: doc.data().PurchaseCost,
                            SalePrice: doc.data().SalePrice,
                            Vendor: doc.data().Vendor,
                            Description: doc.data().Description,
                            TotalStockAvailable:  +doc.data().TotalStockAvailable + +this.countChange,
                        });
                    }
                });
                
                console.log("+");
                this.status = true
                if (this.status)
                await router.push('/log')
            },
            
            checkCurrentItem(){
                console.log(this.itemId)
            },

            findItemNameByItemId(itemId: string){
                for (let i = 0; i < items.value.length; i++){
                    if (items.value[i].itemIdFromList === itemId){
                        return items.value[i].Name;
                    }
                }
                return null;
            },

            changeMinSliderValue(itemId: string){
                for (let i = 0; i < items.value.length; i++){
                    if (items.value[i].itemIdFromList === itemId){
                        this.minForSlider = -items.value[i].totalCount;
                    }
                }
                return null;
            },
        },
        setup(){
            onMounted(async () => {
                const querySnapshot = await getDocs(collection(db, "Items"));
                let ils = [] as any;
                querySnapshot.forEach((doc) => {
                    const il = {
                        id: doc.id,
                        itemIdFromList: doc.data().itemId,
                        Name: doc.data().Name,
                        totalCount: doc.data().TotalStockAvailable,
                    };
                    ils.push(il);
                });
                items.value = ils;
            });
        }
    })
</script>

<template>
    <!-- <TopPanel></TopPanel> -->
    <div class="new-log-form">
        <form @submit.prevent="addInventoryLog">
            <div class="chosen-item">
                <label for="itemId">Item ID</label>
                <div class="list-select"></div>
                    <select v-model="itemId" id="itemId">
                        <InventoryLogNewLogItemList
                            v-for="item in items"
                            :key="item.id"
                            :id="item.id"
                            :itemId="item.itemIdFromList"
                            :name="item.Name"
                        >
                        </InventoryLogNewLogItemList>
                    </select>
            </div>
            
            <!-- Check button -->
            <!-- <button @click="checkCurrentItem">Check</button> -->

            <div class="count-change">
                <label for="countChange">Count Change</label>
                <span class="slider-value">{{ countChange }}</span>
                <input @focus="changeMinSliderValue(itemId)" type="range" :min="minForSlider" max="100" v-model="countChange" id="countChange">
            </div>

            <button class="button" type="submit">Add</button>

        </form>
    </div>
    <BottomPanel></BottomPanel>
</template>