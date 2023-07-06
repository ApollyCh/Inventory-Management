import { createRouter, createWebHistory } from 'vue-router'
import AboutMainPage from "@/views/AboutMainPage.vue";
import App from "@/App.vue";

import VendorsPage from "@/views/VendorsPage.vue";
import VendorInfoPanel from "@/components/VendorInfoPanel.vue";
import VendorsList from "@/components/VendorsList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/about',
      name: 'about',
      component: AboutMainPage
    },
      {
          path:'/vendors',
          name: 'vendors',
          component: VendorsPage
      },
    {
      path: `/vendors/:id`,
      name: 'vendor-info',
      component: VendorInfoPanel
    }
  ]
})

export default router
