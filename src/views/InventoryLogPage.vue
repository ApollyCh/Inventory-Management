<script lang="ts">
    import { defineComponent } from "vue";
    import TopPanel from "@/components/TopPanel.vue";
    import BottomPanel from "@/components/BottomPanel.vue";
    import InventoryLogList from "@/components/InventoryLogComponents/InventoryLogList.vue";
    import { useRouter } from "vue-router";

    export default defineComponent( {
        name: "InventoryLogPage",
        components: {
            TopPanel,
            BottomPanel,
            InventoryLogList,
        },
        data() {
            return {
                showComponent: false,
            };
        },
        setup() {
            const router = useRouter();
            const click = () => {
                router.push({
                    path: "/log/add",
                });
            };
            return {
                click,
            };
        },
    })
</script>

<template>
    <!-- <TopPanel></TopPanel> -->
    <InventoryLogList></InventoryLogList>
    
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
.round-button {
    position: fixed;
    width: 80px;
    height: 80px;
    line-height: 60px;
    border-radius: 50%;
    text-align: center;
    font-size: 40px;
    color: #fff;
    background: #000;
    box-shadow: 0 0 3px gray;
    bottom: 40px;
    right: 40px;
    cursor: pointer;
    transition: 0.3s;
}

.round-button:hover {
    background: #565ed7;
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
