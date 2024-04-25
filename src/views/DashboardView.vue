<template>
  <div class="card d-flex justify-content-center">
    <h1 class="text-center">Tài khoản</h1>
    <div class="card listbox">
      <a class="nav-link href" href=""
        ><span class="pi pi-user" style="font-size: 1.5rem; margin-right: 1rem"></span>
        Hồ sơ cá nhân
      </a>
      <a class="nav-link href" href=""
        ><span class="pi pi-lock" style="font-size: 1.5rem; margin-right: 1rem"></span>
        Thay đổi mật khẩu
      </a>
      <a class="nav-link href" href=""
        ><span class="pi pi-calendar" style="font-size: 1.5rem; margin-right: 1rem"></span>
        Danh sách lịch hẹn
      </a>
      <a class="nav-link href" href=""
        ><span class="pi pi-money-bill" style="font-size: 1.5rem; margin-right: 1rem"></span>
        Lịch sử thanh toán
      </a>
      <a class="nav-link href" href=""
        ><span class="pi pi-headphones" style="font-size: 1.5rem; margin-right: 1rem"></span>
        Chăm sóc khách hàng
      </a>
    </div>
    <Button label="Đăng xuất" severity="warning" class="buttontk" @click="logout" />
    <Button label="Xoá tài khoản" severity="contrast" class="buttontk" />
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('token')
  router.push({ path: '/login' })
}
</script>

<style>
.listbox {
  margin: 1rem;
}
a.href {
  display: inline-block;
  margin: 1rem;
  font-size: larger;
  border-bottom: 1px solid rgba(210, 152, 152, 1); /* Change to this to apply a solid red border */
  padding: 0.5rem;
  text-decoration: none;
  color: inherit;
}
button.buttontk {
  border-radius: 8px;
  margin: 0.5rem;
  width: 31vw;
}
</style>
