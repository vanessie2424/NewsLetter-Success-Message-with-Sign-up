import * as Yup from 'yup'


export const signUpSchema = Yup.object({
    email: Yup.string().email("Valid email required").required("please enter your email")
})