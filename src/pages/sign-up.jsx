import React from 'react'
import "../components/navbar";
import {useFormik} from "formik";
import * as Yup from "yup";
import "../style/sign-up.css";
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [loading, setLoading] =React.useState (false);
    const Navigate =useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Required')
        }), 
         onSubmit : value=>{
            setLoading(true);
            console.log("Sign-up user data", value);
            setTimeout(()=>{
                setLoading(false);
                alert("Signup successfully");
                Navigate("/login");
            },2000)
         }

        });

  return (
     <div className="signup-container">
      <form onSubmit={ formik.handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
            name='email'
             type='email' 
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.email}
            />
            { formik.touched.email && formik.errors.email ? <p className='error-text'>{formik.errors.email}</p>: null}
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
            name='password'
            type='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password} />
            { formik.touched.password && formik.errors.password ? <p className='error-text'>{formik.errors.password}</p> : null}
        </div>
        <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
            name='confirmPassword'
            type='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword} 
            />
            { formik.touched.confirmPassword && formik.errors.confirmPassword? <p className='error-text'>{formik.errors.confirmPassword}</p>: null}
        </div>
        <button 
        type="submit"
        disabled={loading}>

        {loading ? "signingup...":"Signup"}
    
        </button>
       </form>
      
      </div>
  )
}

export default Signup
