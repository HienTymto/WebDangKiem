<!-- <template>
  <div class="gap-3">
    <Button type="button" label="Mở rộng/Tắt tất cả" text @click="toggleAll" />
    <PanelMenu
      v-model:expandedKeys="expandedKeys"
      :model="items"
      class="w-full md:w-20rem custom-panel-menu"
      @onNodeClick="navigateToRoute"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const expandedKeys = ref({})
const items = ref([
  {
    key: '0',
    label: 'Users',
    icon: 'pi pi-users',
    items: [
      {
        key: '0_1',
        label: 'New',
        items: [
          {
            key: '0_1_0',
            label: 'Member'
          },
          {
            key: '0_1_1',
            label: 'Group'
          }
        ]
      },
      {
        key: '0_2',
        label: 'Search'
      }
    ]
  },
  {
    key: '1',
    label: 'Tasks',
    icon: 'pi pi-server',
    items: [
      {
        key: '1_0',
        label: 'Add New'
      },
      {
        key: '1_1',
        label: 'Pending'
      },
      {
        key: '1_2',
        label: 'Overdue'
      }
    ]
  },
  {
    key: '2',
    label: 'Quản lý lịch hẹn',
    icon: 'pi pi-calendar',
    items: [
      {
        key: '2_0',
        label: 'Danh sách lịch hẹn',
        route: '/listbooking'
      }
    ]
  }
])

const toggleAll = () => {
  if (Object.keys(expandedKeys.value).length) collapseAll()
  else expandAll()
}

const navigateToRoute = (event) => {
  if (event.node && event.node.route) {
    router.push(event.node.route)
  }
}

const expandAll = () => {
  for (let node of items.value) {
    expandNode(node)
  }

  expandedKeys.value = { ...expandedKeys.value }
}

const collapseAll = () => {
  expandedKeys.value = {}
}

const expandNode = (node) => {
  if (node.items && node.items.length) {
    expandedKeys.value[node.key] = true

    for (let child of node.items) {
      expandNode(child)
    }
  }
}
</script>

<style>
.custom-panel-menu .p-panelmenu-header {
  background-color: rgba(189, 75, 5, 0.848) !important;
}
</style> -->

<template>
  <div class="card d-flex justify-content-center">
    <PanelMenu v-model:expandedKeys="expandedKeys" :model="items" class="w-full md:w-20rem">
      <template #item="{ item }">
        <router-link
          class="nav-link"
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a
            v-ripple
            class="nav-link d-flex align-items-center cursor-pointer text-color px-3 py-2"
            :href="href"
            @click="navigate"
          >
            <span :class="item.icon" />
            <span class="nav-link ml-2 text-color">{{ item.label }}</span>
          </a>
        </router-link>
        <a
          v-else
          v-ripple
          class="nav-link d-flex align-items-center cursor-pointer text-color px-3 py-2"
          :href="item.url"
          :target="item.target"
        >
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
import { useRouter } from 'vue-router'

const router = useRouter()

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
    label: 'Programmatic',
    icon: 'pi pi-link',
    command: () => {
      router.push('/introduction')
    }
  },
  {
    label: 'External',
    icon: 'pi pi-home',
    items: [
      {
        label: 'Vue.js',
        icon: 'pi pi-star',
        url: 'https://vuejs.org/'
      },
      {
        label: 'Vite.js',
        icon: 'pi pi-bookmark',
        url: 'https://vuejs.org/'
      }
    ]
  }
])
</script>
