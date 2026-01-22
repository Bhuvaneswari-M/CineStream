import React from 'react'
import "../components/navbar";
import {useFormik} from "formik";
import * as Yup from "yup";
import "../style/login.css";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const Navigate = useNavigate();
 const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required')
        }),
        onSubmit: values => {
            console.log('Form data', values);
            alert("Login Successfully");
            Navigate("/");
        }
    });
   
  return (
    <div className="login-container">
    <h2>Login</h2>
    <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
            ) : null}
        </div>

        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
            ) : null}
        </div>
        <button className="submit-btn" type="submit">Login</button>

        <p>Not have an account   
             <Link to ="/Signup"> Signup</Link></p>
    </form> 
      
    </div>
  )
}

export default Login
