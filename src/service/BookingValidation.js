
import moment from 'moment/moment.js'

export default class BookingValidation {
  constructor(bookingDate,) {
    this.bookingDate = bookingDate;

  }

  checkValidations() {
    const error = {}; // Sử dụng đối tượng thay vì mảng
    const currentDate = moment().format('YYYY-MM-DD'); // Ngày hiện tại
    if (this.bookingDate < currentDate) {

      error.bookingDate = "Ngày đặt lịch phải lớn hơn hoặc bằng ngày hiện tại.";
    }

    return error; // Trả về đối tượng lỗi
  }
}
