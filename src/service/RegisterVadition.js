import Validation from './Validation'; // Import thư viện Validation

export default class RegisterValidation {
  constructor(password, email, citizen_id) {
    // Kiểm tra các giá trị đầu vào
    if (!password || typeof password !== 'string') {
      throw new Error("Invalid password value");
    }

    if (!email || typeof email !== 'string') {
      throw new Error("Invalid email value");
    }

    if (!citizen_id || typeof citizen_id !== 'string') {
      throw new Error("Invalid citizen_id value");
    }

    this.password = password;
    this.email = email;
    this.citizen_id = citizen_id;
  }

  checkValidations() {
    const error = {}; // Sử dụng đối tượng để chứa các lỗi

    // Kiểm tra email hợp lệ
    if (!Validation.checkEmail(this.email)) {
      error.email = 'Email không hợp lệ'; // Thông báo lỗi email
    }

    // Kiểm tra độ dài mật khẩu tối thiểu
    if (!Validation.minLength(this.password, 6)) {
      error.password = 'Mật khẩu phải có ít nhất 6 ký tự'; // Thông báo lỗi mật khẩu
    }

    // Kiểm tra độ dài chính xác của CMND
    if (!Validation.Checkforequallength(this.citizen_id, 12)) {
      error.citizen_id = 'CMND phải có đúng 12 số'; // Thông báo lỗi CMND
    }

    return error; // Trả về đối tượng lỗi
  }
}
