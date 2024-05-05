export default class Validation {
    static checkEmail(email) {
      // Kiểm tra địa chỉ email dựa trên regex
      // Biểu thức chính quy theo cách thông thường
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (emailRegex.test(email)) {
        return true;  // Email hợp lệ
      } 
      else {
        return false;  // Email không hợp lệ
      }
    }
    static minLength(value, length) {
      if (value.length >= length) {
        return true;  // Đủ độ dài
      } 
      else {
        return false;  // Không đủ độ dài
      }
    }
  static Checkforequallength(value, length) {
    if (!value || typeof value !== 'string') {
      return false;  // Giá trị không hợp lệ
    }

    if (value.length === length) {
      return true;  // Đủ độ dài
    }
    return false;  // Không đủ độ dài
  }
}

  