import React, { useState } from 'react'
import Input from '../../common/Input';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './login.css'
import { Link, withRouter } from 'react-router-dom';
import { loginUser } from '../../services/loginService';

const initialValues = {
    email: "",
    password: ""
}


const validationSchema = yup.object({
    email: yup.string().email('Invalid email format').required('email is required'),
    password: yup.string().required('password is required')
})

const Login = ({ history }) => {
    const [error, setError] = useState(null)

    const onSubmit = async (values) => {
        // console.log(values);
        try {
            const { data } = await loginUser(values)
            // console.log(data);
            setError(null)
            history.push('/')
        } catch (error) {
            // console.log(error);
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
                <Input formik={formik} name="email" label="Email" />
                <Input formik={formik} name="password" label="Password" type="password" />
                <button
                    style={{ width: '100%' }}
                    type="submit"
                    disabled={!formik.isValid}
                    className="btn primary">
                    Login
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <Link to="/signup">
                    <p style={{ marginTop: '15px' }}> Not signup yet ?</p>
                </Link>
            </form>
        </div>
    )
}
export default withRouter(Login);
