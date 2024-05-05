import Validation from "./Validation";

export default class SignupValidation {
    constructor(citizen_id, password) {
        this.citizen_id = citizen_id;
        this.password = password;
    }

    checkValidations() {
        const error = {}; // Sử dụng đối tượng thay vì mảng
        
        // if (!Validation.checkEmail(this.citizen_id)) {
        //     error.citizen_id = 'Email không hợp lệ'; // Gán lỗi vào đối tượng
        // }
        
        if (!Validation.minLength(this.password, 6)) {
            error.password = 'Mật khẩu phải có ít nhất 6 ký tự'; // Gán lỗi vào đối tượng
        }
        
        return error; // Trả về đối tượng lỗi
    }
}
