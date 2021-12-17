import React, { useState } from 'react'
import Input from '../../common/Input';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './signup.css'
import { Link, withRouter } from 'react-router-dom';
import { signupUser } from './../../services/signupService';

const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passWordConfirm: ""
}
const validationSchema = yup.object({
    name: yup.string().required('name is required').min(5, 'Name length is not valid'),
    email: yup.string().email('Invalid email format').required('email is required'),
    phoneNumber: yup.string().required('Phone number is required').matches(/^[0-9]{11}$/, 'Invalid Phone Number').nullable(),
    password: yup.string().required('password is required'),
    // .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // ),
    passWordConfirm: yup.string().required('Password Confirmation is Required').oneOf([yup.ref('password'), null], 'Passwords must match')
})

const SignupForm = ({ history }) => {
    const [error, setError] = useState(null)
    // console.log(history);
    const onSubmit = async (values) => {
        // console.log(values);
        const { name, email, phoneNumber, password } = values;
        const userData = {
            name,
            email,
            phoneNumber,
            password
        }
        try {
            const { data } = await signupUser(userData);
            // console.log(data);
            setError(null)
            history.push('/')
        } catch (error) {
            if (error.response && error.response.data.message) {
                setError(error.response.data.message)
            }
        }

    }
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
                <Input formik={formik} name="name" label="Name" />
                <Input formik={formik} name="email" label="Email" />
                <Input formik={formik} name="phoneNumber" label="Phone Number" type="tel" />
                <Input formik={formik} name="password" label="Password" type="password" />
                <Input formik={formik} name="passWordConfirm" label="PassWord Confirmation" type="password" />

                <button
                    style={{ width: '100%' }}
                    type="submit"
                    disabled={!formik.isValid}
                    className="btn primary">
                    Signup
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Link to="/login">
                    <p style={{ marginTop: '15px' }}>Already login ?</p>
                </Link>
            </form>
        </div>
    )
}
export default withRouter(SignupForm);