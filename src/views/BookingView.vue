<template>
  <div class="container">
    <section class="row justify-content-center">
      <div class="card mx-4 mx-md-5 shadow-5-strong"
        style="background: hsla(0, 0%, 100%, 0.8); backdrop-filter: blur(30px); width: 500px;">
        <div class="card-body py-5 px-md-5">
          <div class="mb-3">
            <h3>Booking Form</h3>
          </div>
          <form @submit.prevent="submitForm">
            <!-- Fields for booking -->
            <div class="mb-3">
              <label class="form-label">Ngày đặt lịch</label>
              <input type="date" class="form-control" v-model="formData.bookingDate" required />
            </div>
            <div class="alert alert-danger" v-if="errors['bookingDate']">
              {{ errors['bookingDate'] }}
            </div>


            <div class="mb-3">
              <label class="form-label">Thời gian đặt lịch</label>
              <select class="form-control" v-model="formData.bookingTime" required>
                <option value="SEVEN_TO_EIGHT">7:00 - 8:00</option>
                <option value="EIGHT_TO_NINE">8:00 - 9:00</option>
                <option value="NINE_TO_TEN">9:00 - 10:00</option>
                <option value="TEN_TO_ELEVEN">10:00 - 11:00</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Địa điểm</label>
              <select class="form-control" v-model="formData.location" required>
                <option value="QUAN_1">QUẬN 1</option>
                <option value="QUAN_2">QUẬN 2</option>
                <option value="QUAN_3">QUẬN 3</option>
                <option value="QUAN_4">QUẬN 4</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Loại xe</label>
              <input type="text" class="form-control" v-model="formData.type" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Thương hiệu</label>
              <input type="text" class="form-control" v-model="formData.brand" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Màu sắc</label>
              <input type="text" class="form-control" v-model="formData.color" />
            </div>
            <div class="mb-3">
              <label class="form-label">Hình ảnh</label>
              <input type="file" class="form-control" @change="handleFileChange" />
            </div>
            <!-- Thêm trường Quantity -->
            <!-- Submit button -->
            <button type="submit" class="btn btn-primary">Gửi</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import BookingValidation from '@/service/BookingValidation';


export default {
  data() {
    return {
      formData: {
        bookingDate: '',
        bookingTime: '',
        location: '',
        type: '',
        brand: '',
        color: '',
        file: null, // Image data
        userId: localStorage.getItem('id'), // Retrieve the user ID from localStorage
      },
      errors: {},
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.formData.file = file;
      }
    },
    async submitForm() {
      const formData = new FormData();

      // Add booking details to FormData
      formData.append('bookingDate', this.formData.bookingDate);
      formData.append('bookingTime', this.formData.bookingTime);
      formData.append('location', this.formData.location);
      formData.append('type', this.formData.type);
      formData.append('brand', this.formData.brand);
      formData.append('color', this.formData.color);


      // Add user ID and the file if it exists
      if (this.formData.userId) {
        formData.append('userId', this.formData.userId);
      }
      const validation = new BookingValidation(this.formData.bookingDate);
      this.errors = validation.checkValidations(); // Nhận lỗi từ phương thức checkValidations
      if (this.formData.file) {
        formData.append('file', this.formData.file);
      } else {
        alert("File is required. Please upload an image.");
        return;
      }

      try {
        const response = await axios.post(
          'http://localhost:8081/api/bookings/create',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        if (response.status === 200) {
          alert("Đặt lịch thành công!"); // Hiển thị thông báo thành công
          this.$router.push('/'); // Điều hướng sau khi đặt lịch thành công
        } else {
          console.error("Booking failed:", response);
          alert("Booking failed. Please try again.");
        }
      } catch (error) {
        console.error("Error during booking:", error);
        alert("Đặt lịch Thất bại. Vui lòng thử lại.");
      }
    },
  },
};
</script>
