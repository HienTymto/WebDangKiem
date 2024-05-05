<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { RouterLink } from 'vue-router'
export default {
  name: 'navbar',
  components: {
    RouterLink
  },
  data() {
    return {
      isLoggedIn: false,
      user: null
    }
  },
  methods: {
    checkLoggedIn() {
      let user = localStorage.getItem('user')

      if (user !== null) {
        this.isLoggedIn = true;
        this.user = JSON.parse(user)
      }
      else {
        this.isLoggedIn = false;
      }
      console.log(this.user)
    }
  },
  mounted() {
    this.checkLoggedIn()
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink to="/home" class="nav-link active fs-6 text-uppercase text-white">Trang chủ</RouterLink>
          <RouterLink to="/booking" class="nav-link active fs-6 text-uppercase text-white">Đặt lịch</RouterLink>
          <RouterLink to="/news" class="nav-link active fs-6 text-uppercase text-white">Tin tức</RouterLink>

          <!-- Kiểm tra trạng thái xác thực -->
          <template v-if="isAuthenticated"> <!-- Kiểm tra người dùng đã đăng nhập -->
            <button class="btn btn-outline-light ms-3" @click="logout">Đăng xuất</button> <!-- Nút logout -->
            <RouterLink to="/bookinglist" class="nav-link active fs-6 text-uppercase text-white">Đơn Đặt Lịch
            </RouterLink>
          </template>
          <template v-else> <!-- Nếu chưa đăng nhập -->
            <RouterLink to="/login" class="nav-link active fs-6 text-uppercase text-white">Đăng nhập</RouterLink>
            <RouterLink to="/register" class="nav-link active fs-6 text-uppercase text-white">Đăng ký</RouterLink>
          </template>
          <RouterLink v-if="!this.isLoggedIn" to="/login" class="nav-link active fs-6 text-uppercase text-white">Tài
            khoản
          </RouterLink>
          <RouterLink v-if="this.isLoggedIn" to="/dashboard" class="nav-link active fs-6 text-uppercase text-white">
            Dashboard
          </RouterLink>

          <a v-if="this.isLoggedIn" class="nav-link active fs-6  text-white" aria-current="page" href="#">Xin chào: {{
            this.user.username
          }}</a>

        </div>

      </div>
    </div>
    <div v-if="!this.isLoggedIn" class="d-flex justify-content-end align-items-center">
      <router-link to="/login" target="_blank" rel="noopener">
        <Button label="Đăng nhập" class="buttontd" />
      </router-link>
      <router-link to="/register" target="_blank" rel="noopener">
        <Button label="Đăng ký" class="buttontd" />
      </router-link>
    </div>

  </nav>
</template>
<style>
button.buttontd {
  border-radius: 8px;
  margin: 0.5rem;
  width: 8vw;
  background: rgba(255, 165, 0, 1);
  border-color: rgba(255, 165, 0, 1);
  color: black;
}
</style>
