<template>
  <div class="card d-flex justify-content-center">
    <h1 class="text-center">Đăng nhập</h1>
    <form @submit.prevent="login">
      <div class="d-flex flex-column gap-2">
        <label for="username">Tên đăng nhập</label>
        <InputText id="username" v-model="postLogin.email" type="email" />
      </div>
      <div class="d-flex flex-column gap-2">
        <label for="password">Mật khẩu</label>
        <InputText id="password" v-model="postLogin.password" :type="showPassword ? 'text' : 'password'" />
      </div>
      <Button label="Đăng nhập" severity="warning" class="buttontk" type="submit" />
    </form>
    <div class="text-center">
      <p>Bạn chưa có tài khoản:</p>
      <router-link to="/register" class="nav-link" style="color: rgba(255, 165, 0, 1);">Đăng ký</router-link>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      postLogin: { email: '', password: '' },
      showPassword: false,
      isLoggedIn: false
    }
  },
  mounted() {
    this.checkLoginStatus()
  },
  methods: {
    login() {
      axios
        .post('http://localhost:8081/api/auth/login', this.postLogin, {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user', JSON.stringify(response.data))
            if (this.IsAdminUser(response.data.roles)) {
              this.$router.push({ path: '/admin' })
            }
            else {
              this.$router.push({ path: '/dashboard' })
            }

          } else {
            console.error('Login failed')
          }
        })
        .catch((error) => {
          console.error('Error during login:', error)
        })
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword // Toggle password visibility
    },
    IsAdminUser(roles) {
      let isAdmin = false
      if (roles) {
        roles.forEach((item) => {
          if (item === 'ROLE_ADMIN') isAdmin = true
        })
      }
      return isAdmin
    },
    checkLoginStatus() {
      const token = localStorage.getItem('token')

      if (token) {
        // Nếu có token, cập nhật trạng thái đăng nhập và chuyển hướng đến trang Dashboard
        this.isLoggedIn = true
        this.$router.push({ path: '/dashboard' })
      }
    }
  }
}
</script>
<style>
button.buttontk {
  border-radius: 8px;
  margin: 0.5rem;
  width: 31vw;
}
</style>
