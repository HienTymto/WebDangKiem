<template>
  <!-- Section: Design Block -->
  <section class="text-center">
    <!-- Background image -->

    <div
      class="card mx-4 mx-md-5 shadow-5-strong"
      style="background: hsla(0, 0%, 100%, 0.8); backdrop-filter: blur(30px); width: 35vw"
    >
      <div class="card-body py-5 px-md-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <h2 class="fw-bold mb-5">Đăng ký tài khoản</h2>
            <form>
              <!-- 2 column grid layout with text inputs for the first and last names -->
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div data-mdb-input-init class="form-outline">
                    <label class="form-label" for="first_name">Họ</label>
                    <input type="text" id="first_name" class="form-control" />
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div data-mdb-input-init class="form-outline">
                    <label class="form-label" for="last_name">Tên</label>
                    <input type="text" id="last_name" class="form-control" />
                  </div>
                </div>
              </div>

              <!-- Email input -->
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="email_add">Email</label>
                <input type="email" id="email_add" class="form-control" />
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="phone_number">Số điện thoại</label>
                <input type="email" id="phone_number" class="form-control" />
              </div>

              <!-- Password input -->
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="pass">Mật khẩu</label>
                <input type="password" id="pass" class="form-control" />
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="repass">Nhập lại Mật khẩu</label>
                <input type="password" id="repass" class="form-control" />
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="address">Địa chỉ</label>
                <input type="email" id="address" class="form-control" />
              </div>

              <!-- Submit button -->
              <button
                type="submit"
                data-mdb-button-init
                data-mdb-ripple-init
                class="btn btn-primary btn-block mb-4"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
</template>
