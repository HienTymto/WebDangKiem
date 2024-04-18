<template>
  <section class="text-center">
    <div
      class="w-100 p-3 card mx-4 mx-md-5 shadow-5-strong"
      style="background: hsla(0, 0%, 100%, 0.8); backdrop-filter: blur(30px)"
    >
      <div class="card-body py-5 px-md-5">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="fw-bold mb-5">Đăng nhập</h2>
            <form @submit.prevent="login">
              <!-- Email input -->
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form3Example3">Email address</label>
                <input
                  type="email"
                  id="form3Example3"
                  class="form-control"
                  v-model="postLogin.email"
                />
              </div>

              <!-- Password input -->
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form3Example4">Password</label>
                <div class="input-group">
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    id="form3Example4"
                    class="form-control"
                    v-model="postLogin.password"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="togglePasswordVisibility"
                  >
                    {{ showPassword ? 'Hide' : 'Show' }}
                  </button>
                </div>
              </div>

              <!-- Checkbox -->
              <div class="form-check d-flex justify-content-center mb-4">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example33"
                  checked
                />
                <label class="form-check-label" for="form2Example33">Remember me</label>
              </div>

              <!-- Submit button -->
              <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

              <!-- Register buttons -->
              <div class="text-center">
                <p>You don't have an account:</p>
                <router-link to="/register">Sign up</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      postLogin: { email: '', password: '' },
      showPassword: false // Track password visibility
    }
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
          console.log(response)
          if (response.status === 200) {
            this.$router.push({ path: '/dashboard' })
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
    }
  }
}
</script>
