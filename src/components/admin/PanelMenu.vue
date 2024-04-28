<template>
  <div class="card d-flex justify-content-center">
    <div style="margin: 2rem;">
      <h1 class="text-uppercase mb-0 fw-bold" style="color: rgba(255, 165, 0, 1)">vehicle</h1>
    </div>
    <PanelMenu v-model:expandedKeys="expandedKeys" :model="items" class="w-full md:w-20rem">
      <template #item="{ item }">
        <router-link class="nav-link" v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple class="nav-link d-flex align-items-center cursor-pointer text-color px-3 py-2" :href="href"
            @click="navigate">
            <span :class="item.icon" />
            <span class="nav-link ml-2 text-color">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple class="nav-link d-flex align-items-center cursor-pointer text-color px-3 py-2"
          :href="item.url" :target="item.target">
          <span :class="item.icon" />
          <span class="nav-link ml-2">{{ item.label }}</span>
          <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto" />
        </a>
      </template>
    </PanelMenu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const items = ref([
  {
    label: 'Quản lý đăng kiểm',
    icon: 'pi pi-calendar',
    items: [
      {
        label: 'Danh sách đăng kiểm',
        icon: 'pi pi-eraser',
        route: '/admin/listbooking'
      }
    ]
  },
  {
    label: 'Quản lý tài khoản',
    icon: 'pi pi-calendar',
    items: [
      {
        label: 'Danh sách tài khoản',
        icon: 'pi pi-eraser',
        route: '/admin/listaccount'
      }
    ]
  }

])
</script>
