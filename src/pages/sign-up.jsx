import React from 'react'
import "../components/navbar";
import Login from './login';
import {useFormik} from 'formik';
import * as Yup from "yup";
//import "../style/login.css";

const Signup = () => {
    const formilk = useFormik({
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
         onsubit : value=>{
            console.log("from date", value);
         }

        });

        const handlesubit=(e)=>{
            e.preventDefatult();
            formilk.handleSubmit();
            alert("Signup successfully");      
          };
  return (
    <div>
      <formik onsubmit={handlesubit}>
        <div className="signup-container">
        <h2>Sign Up</h2>
        <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type='email' placeholder='Enter your email' />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type='password' placeholder='Enter your password' />
        </div>
        <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type='password' placeholder='Confirm your password' />
        </div>
        <button type="submit">Sign Up</button>
        </div>
     </formik>
      
      </div>
  )
}

export default Signup
