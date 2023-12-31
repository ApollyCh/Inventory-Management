import { createRouter, createWebHistory } from 'vue-router'
import AboutMainPage from '@/views/AboutMainPage.vue'

import VendorsPage from '@/views/VendorsPage.vue'
import VendorInfoPanel from '@/components/VendorComponents/VendorInfoPanel.vue'
import VendorRegistrationForm from '@/components/VendorComponents/VendorRegistrationForm.vue'
import ItemsPage from '@/views/ItemsPage.vue'
import ItemRegistrationForm from '@/components/ItemComponents/ItemRegistrationForm.vue'
import ItemInfoPanel from '@/components/ItemComponents/ItemInfoPanel.vue'
import ItemEditPage from '@/components/ItemComponents/ItemEditPage.vue'
import VendorEditPanel from '@/components/VendorComponents/VendorEditPage.vue'
import InventoryLogPage from '@/views/InventoryLogPage.vue'
import InventoryLogNewLogItem from '@/components/InventoryLogComponents/InventoryLogNewLogItem.vue'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutMainPage,
    },
    {
      path: '/vendors',
      name: 'vendors',
      component: VendorsPage,
    },
    {
      path: `/vendors/:id`,
      name: 'vendor-info',
      component: VendorInfoPanel,
    },
    {
      path: '/vendors/add',
      name: 'add-vendor',
      component: VendorRegistrationForm,
    },
    {
      path: '/vendors/:id/edit',
      name: 'vendor-edit',
      component: VendorEditPanel,
    },
    {
      path: '/items',
      name: 'items',
      component: ItemsPage,
    },
    {
      path: '/items/add',
      name: 'add-item',
      component: ItemRegistrationForm,
    },
    {
      path: `/items/:id`,
      name: 'item-info',
      component: ItemInfoPanel,
    },
    {
      path: '/items/:id/edit',
      name: 'item-edit',
      component: ItemEditPage,
    },
    {
      path: '/log',
      name: 'log',
      component: InventoryLogPage,
    },
    {
      path: '/log/add',
      name: 'add-log',
      component: InventoryLogNewLogItem,
    },
  ],
})

export default router
