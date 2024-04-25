<template>
  <div>
    <Splitter style="height: 100vh" class="div_menu">
      <SplitterPanel class="" :size="20" :minSize="10">
        <PanelMenu />
      </SplitterPanel>
      <SplitterPanel :size="80">
        <Splitter layout="vertical">
          <SplitterPanel class="d-flex align-items-center justify-content-center" :size="15">
            Panel 2
          </SplitterPanel>
          <SplitterPanel :size="85">
            <Splitter>
              <SplitterPanel class="d-flex align-items-center justify-content-center" :size="80">
                <RouterView />
              </SplitterPanel>
            </Splitter>
          </SplitterPanel>
        </Splitter>
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PanelMenu from '@/components/admin/PanelMenu.vue'

const route = useRoute()
const isAdminRoute = computed(() => route.path.startsWith('/admin'))
</script>

<style></style>
