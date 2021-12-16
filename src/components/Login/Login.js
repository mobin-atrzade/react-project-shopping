import React from 'react'
import Input from '../../common/Input';
import { useFormik } from 'formik';
import * as yup from 'yup';

const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passWordConfirm: ""
}

const onSubmit = (values) => {
    console.log(values);
    // axios.post('http://localhost:3001/users', values)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err))
}

const validationSchema = yup.object({
    email: yup.string().email('Invalid email format').required('email is required'),
    password: yup.string().required('password is required')
})

const Login = () => {

    const formik = useFormik(
        {
            initialValues,
            onSubmit,
            validationSchema,
            validateOnMount: true,
        }
    )

    return (
        <div className="formContainer">
            <form onSubmit={formik.handleSubmit}>
                <Input formik={formik} name="email" label="Email" />
                <Input formik={formik} name="password" label="Password" type="password" />
                <button
                    style={{ width: '100%' }}
                    type="submit"
                    disabled={!formik.isValid}
                    className="btn primary">
                    Login
                </button>
            </form>
        </div>
    )
}
export default Login;