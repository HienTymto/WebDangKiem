<template>
  <div class="container mt-4">
    <h2 class="text-center mb-4">Danh sách đã Đặt lịch</h2>
    <div class="list-group">
      <!-- Sử dụng v-for để lặp qua các mục đặt chỗ -->
      <a v-for="booking in bookings" :key="booking.bookingId" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Đơn đã Đặt lịch</h5>
          <span class="badge bg-success fs-5 ms-2"> {{ getStatusText(booking.status) }}</span> <!-- Chuyển đổi trạng thái -->
        </div>
        <p class="mb-1">Ngày: {{ formatBookingDate(booking.bookingDate) }}</p> <!-- Chuyển đổi định dạng ngày -->
        <p class="mb-1">Thời gian: {{ getTimeText(booking.bookingTime) }}</p> <!-- Chuyển đổi thời gian -->
        <p class="mb-1">Địa điểm: {{ booking.location }}</p>
        <p class="mb-1">Màu sắc: {{ booking.color }}</p>
        <p class="mb-1">Loại xe: {{ booking.type }}</p>
        <p class="mb-1">Thương hiệu: {{ booking.brand }}</p>

      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      bookings: [],
      userId: localStorage.getItem("id"), // Lấy user ID từ localStorage
    };
  },

  async mounted() {
    try {
      if (this.userId) { // Kiểm tra nếu user ID tồn tại
        const response = await axios.get(`http://localhost:8081/api/bookings/userId/${this.userId}`); // Sử dụng ID trong URL
        this.bookings = response.data;
      } else {
        console.error("Không tìm thấy user ID trong localStorage");
        // Thực hiện điều hướng hoặc hiển thị thông báo lỗi nếu cần
      }
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu đặt chỗ:", error);
    }
  },

  methods: {
    getStatusText(status) {
      const statusMapping = {
        Pending: "Chờ xác nhận",
        Confirmed: "Đã xác nhận",
        Cancelled: "Đã hủy",
        Completed: "Đã hoàn thành",
        In_Progress: "Đang trong quá trình thực hiện",
        On_Hold: "Tạm dừng",
        Waiting_List: "Danh sách chờ",
        Expired: "Đã hết hạn",
        Rejected: "Bị từ chối",
      };

      return statusMapping[status] || "Trạng thái không xác định"; // Trả về trạng thái văn bản hoặc tin nhắn mặc định
    },

    formatBookingDate(date) {
      // Chuyển đổi ngày sang định dạng ngày/tháng/năm
      const [year, month, day] = date.split('-'); // Tách ngày, tháng và năm
      return `${day}/${month}/${year}`; // Định dạng theo ngày/tháng/năm
    },


    getTimeText(time) {
      // Chuyển đổi thời gian từ mã định danh sang dạng văn bản
      const timeMapping = {
        "SEVEN_TO_EIGHT": "7:00 - 8:00",
        "EIGHT_TO_NINE": "8:00 - 9:00",
        "NINE_TO_TEN": "9:00 - 10:00",
        "TEN_TO_ELEVEN": "10:00 - 11:00",
      };
      return timeMapping[time] || time; // Trả về thời gian nếu có trong bảng mapping
    },
  },
};
</script>
