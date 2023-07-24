<template>
  <meta name="description" content="Home page of Inventory Management" />
  <div class="homepage">
    <top-panel name_of_page="Home"></top-panel>

    <bottom-panel></bottom-panel>
    <h1>Welcome to Inventory Management</h1>
    <p>
      We provide top-notch inventory management solutions for businesses of all
      sizes. Our platform is designed to help you keep track of your inventory,
      streamline your operations, and increase your profits.
    </p>
    <h2>Our Services</h2>
    <ul>
      <li>Inventory Tracking</li>
      <li>Order Management</li>
      <li>Warehouse Management</li>
      <li>Vendors Information Tracking</li>
    </ul>
    <h2>Why Choose Us?</h2>
    <p>
      Our team of experts has years of experience in the inventory management
      industry. We understand the challenges businesses face when it comes to
      managing their inventory, and we have developed a platform that addresses
      these challenges head-on.
    </p>
    <p>With our platform, you can:</p>
    <ul>
      <li>Track your inventory in real-time</li>
      <li>Manage orders and shipments with ease</li>
    </ul>
    <p>
      Get started today and take your inventory management to the next level!
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopPanel from '@/components/TopPanel.vue'
import BottomPanel from '@/components/BottomPanel.vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  name: 'HomePage',
  components: { TopPanel, BottomPanel },
  setup() {
    useHead({
      title: 'Home',
      meta: [
        { name: 'description', content: 'HomePage with main information' },
      ],
    })
  },
})
</script>

<style scoped>
.homepage {
  max-width: 800px;
  padding: 20px;
  margin: 25px auto;
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
  font-family: 'Rubik', sans-serif;
}

h2 {
  font-size: 24px;
  margin-top: 40px;
  font-family: 'Rubik', sans-serif;
}

ul {
  margin-left: 20px;
  font-family: 'Rubik', sans-serif;
}

li {
  margin-bottom: 7px;
  font-family: 'Rubik', sans-serif;
}

p {
  margin-bottom: 17px;
  font-family: 'Rubik', sans-serif;
}
</style>
