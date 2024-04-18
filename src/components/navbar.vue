<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active fs-6 text-uppercase text-white" aria-current="page" href="#"
            >trang chủ</a
          >
          <a class="nav-link active fs-6 text-uppercase text-white" aria-current="page" href="#"
            >đặt lịch</a
          >
          <a class="nav-link active fs-6 text-uppercase text-white" aria-current="page" href="#"
            >tin tức</a
          >
          <a class="nav-link active fs-6 text-uppercase text-white" aria-current="page" href="#"
            >lịch hẹn</a
          >
          <a class="nav-link active fs-6 text-uppercase text-white" aria-current="page" href="#"
            >thông báo</a
          >
          <RouterLink to="/login" class="nav-link active fs-6 text-uppercase text-white"
            >Tài khoản</RouterLink
          >
          <a class="nav-link active fs-6 text-uppercase text-white" aria-current="page" href="#"
            >liên hệ hợp tác</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>
