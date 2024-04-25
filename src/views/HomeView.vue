<template>
  <div>
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
  </div>
</template>

<script setup>
import NavBar from '../components/navbar.vue'
import FooterView from '../components/FooterView.vue'
</script>

<style scoped></style>
