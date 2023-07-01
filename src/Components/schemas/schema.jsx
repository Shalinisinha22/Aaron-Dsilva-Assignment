import * as yup from 'yup';

export const signUpSchema=yup.object({
    name:yup.string().min(3).max(25).required("Please enter your name"),
    address: yup.string().required("Please enter your address"),
    hobby: yup.array().min(1,"Please select atleast one hobby").ensure().required("Please select atleast one hobby"),
    country: yup.string().required("Please select your country"),
    gender: yup.string().required("Please select your gender"),
})