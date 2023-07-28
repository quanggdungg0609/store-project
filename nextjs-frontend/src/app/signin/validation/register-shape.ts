import * as Yup from "yup"


//Register validation schema
export const RegisterSchema=Yup.object().shape({
    accountId:Yup.string().min(8,"Username cần ít nhất 8 kí tự").required("Username không được để trống"),
    password:Yup.string().min(8,"Password cần ít nhất 8 kí tự")
                .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password cần chứa cả chữ in hoa và chữ thường")
                .matches(/\d/, "Password cần chứa ít nhất 1 chữ số từ 0-9")
                .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password cần chứa ít nhất 1 kí tự đặc biệt")
                .required("Password không được để trống"),
    email:Yup.string().email("Email sai cú pháp")
                .required("email không được bỏ trống"),
    firstName:Yup.string().required("Tên không được bỏ trống"),
    lastName:Yup.string().required("Họ không được bỏ trống")
})