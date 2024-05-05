<template>
  <div class="card d-flex justify-content-center">
    <h1 class="text-center">Đăng nhập ký tài khoản</h1>
    <form @submit.prevent="register">
      <div class="row">
        <div class="col-md-6 mb-4">
          <div data-mdb-input-init class="form-outline">
            <label class="form-label" for="first_name">Họ</label>
            <input type="text" id="first_name" class="form-control" v-model="postRegister.first_name" />
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div data-mdb-input-init class="form-outline">
            <label class="form-label" for="last_name">Tên</label>
            <input type="text" id="last_name" class="form-control" v-model="postRegister.last_name" />
          </div>
        </div>
      </div>
      <div class="d-flex flex-column gap-2">
        <label for="citizen_id">Mã CCCD</label>
        <InputText id="citizen_id" v-model="postRegister.citizen_id" type="text" />
      </div>
      <div class="d-flex flex-column gap-2">
        <label for="citizen_id">Tên đăng nhập</label>
        <InputText id="citizen_id" v-model="postRegister.username" type="text" />
      </div>
      <div class="d-flex flex-column gap-2">
        <label for="email">Email</label>
        <InputText id="email" v-model="postRegister.email" type="email" />
      </div>
      <div class="d-flex flex-column gap-2">
        <label for="phone">Số điện thoại</label>
        <InputText id="phone" v-model="postRegister.phone" type="text" />
      </div>
      <div class="d-flex flex-column gap-2">
        <label for="password">Mật khẩu</label>
        <InputText id="password" v-model="postRegister.password" :type="showPassword ? 'text' : 'password'" />
      </div>
      <div class="d-flex flex-column gap-2">
        <label for="repassword">Nhập lại mật khẩu</label>
        <InputText id="repassword" :type="showPassword ? 'text' : 'password'" />
      </div>
      <div class="d-flex flex-column gap-2">
        <label for="address">Địa chỉ</label>
        <InputText id="address" v-model="postRegister.address" type="text" />
      </div>
      <Button label="Đăng ký" severity="warning" class="buttontk" type="submit" />
    </form>
    <div class="text-center">
      <p>Bạn đã có tài khoản:</p>
      <router-link to="/login" class="nav-link" style="color: rgba(255, 165, 0, 1);">Đăng ký</router-link>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      postRegister: { email: '', password: '', first_name: '', last_name: '', username: '', phone: '', address: '', citizen_id: '' },
      showPassword: false,
      isLoggedIn: false
    }
  },
  mounted() {
    this.checkRegisterStatus()
  },
  methods: {
    register() {
      axios
        .post('http://localhost:8081/api/auth/register', this.postRegister, {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then((response) => {
          console.log(response)
          if (response.status === 200) {
            localStorage.setItem('token', response.data.token)
            this.$router.push({ path: '/dashboard' })
          } else {
            console.error('Register failed')
          }
        })
        .catch((error) => {
          console.error('Error during Register:', error)
        })
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword // Toggle password visibility
    },
    checkRegisterStatus() {
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