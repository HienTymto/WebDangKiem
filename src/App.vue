<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/navbar.vue'
import FooterView from './components/FooterView.vue'
</script>
<template>
  <div class="d-flex justify-content-center bg-dark">
    <NavBar />
  </div>
  <div class="container p-3 content" style="width: 35vw">
    <div class="row">
      <RouterView />
    </div>
  </div>
  <div>
    <FooterView />
  </div>
</template>

<style scoped></style>
