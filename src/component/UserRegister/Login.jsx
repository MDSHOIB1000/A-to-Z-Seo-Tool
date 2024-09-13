import React, { useState } from 'react'
import { NavLink} from "react-router-dom"
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import './SignUp.css'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
  
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .required('Please Enter your password'),
   
});


const Login = ({handleLogin, user}) => {
  // console.log("Login",user);

    const [showPassword, setShowPassword]=useState(false);

    // const [inputVal, setInputVal]=useState({
      
    //     email: "",
    //     password: "",
      
    // })

    //  const handleChange =(e)=>{
    //     const {name, value}=e.target;
    //     setInputVal((preVal)=>({
    //         ...preVal,
    //         [name]:value

    //     }))

    //  }
   
    return (
        <div>
            <section className=''>
                <div className="form_data ">
                    <div className="form_heading">
                        <h1>Welcome Back, Log In</h1>
                        <p>Hi, we are you glad you are back. Please login.</p>
                    </div>
                     <Formik
                     initialValues={{
                      email: '',
                      password: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values,actions) => {
                      // console.log(values,actions); // Log the form values
                      handleLogin(values, actions); // Call handleSubmit function
                    }}
                    enableReinitialize
                     >
                        {  ({errors, touched})=>(

                          <Form className='form_btn'>
                              <div className="form_input">
                                  <label htmlFor="email">Email</label>
                                  <Field type="email" name="email" id="email" placeholder='Enter Your Email Address'  />
                              </div>
                              {
                                errors.email && touched.email ?(
                                  <div className='text-danger'>{errors.email}</div>
                                ):''
                              }
                              <div className="form_input">
                                  <label htmlFor="password">Password</label>
                                  <div className="two">
                                      <Field type={showPassword?'text':'password'}  name="password" id="password" placeholder='Enter Your password'  />
                                      <div className="showpass" onClick={()=>setShowPassword(!showPassword)}>
                                        {
                                          !showPassword ?<IoIosEyeOff />:<IoIosEye />
                                        }       
                                      </div>
                                  </div>
                              </div>
                              {
                                errors.password && touched.password ?(
                                  <div className='text-danger'>{errors.password}</div>
                                ):''
                              }

                              <button className='btn' type='submit'>Login</button>
                              <p>Don't have an Account? <NavLink to="/sign-up">Sign Up</NavLink> </p>
                          </Form>

                        )

                        }

                     </Formik>
                    {/* <ToastContainer /> */}
                </div>
            </section>




        </div>
    )
}

export default Login