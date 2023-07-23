import { createRouter, createWebHistory } from 'vue-router'
import AboutMainPage from "@/pages/AboutMainPage.vue";
import App from "@/App.vue";

import VendorsPage from "@/pages/VendorsPage.vue";
import VendorInfoPanel from "@/components/VendorComponents/VendorInfoPanel.vue";
import VendorRegistrationForm from "@/components/VendorComponents/VendorRegistrationForm.vue";
import ItemsPage from "@/pages/ItemsPage.vue";
import VendorEditPanel from "@/components/VendorComponents/VendorEditPage.vue";
import InventoryLogPage from "@/pages/InventoryLogPage.vue";
import InventoryLogNewLogItem from '@/components/InventoryLogComponents/InventoryLogNewLogItem.vue';

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
    },
    {
      path: '/vendors/add',
      name: 'add-vendor',
      component: VendorRegistrationForm
    },
    {
      path: '/vendors/:id/edit',
      name: 'vendor-edit',
      component: VendorEditPanel
    },
    {
      path: '/items',
      name: 'items',
      component: ItemsPage
    },
    {
      path: `/items/:id`,
      name: 'item-info',
      component: ItemsPage
    },
    {
      path: '/log',
      name: 'log',
      component: InventoryLogPage
    },
    {
      path: '/log/add',
      name: 'add-log',
      component: InventoryLogNewLogItem
    }
  ]
})

export default router
