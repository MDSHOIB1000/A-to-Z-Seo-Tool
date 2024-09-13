import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoIosEyeOff, IoIosEye } from 'react-icons/io';
import './SignUp.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CheckList from './CheckList';
import { handleError, handleSuccess } from '../../utils/toast';
import axios from 'axios';


const SignupSchema = Yup.object().shape({
  fname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name is Required'),
  lname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  avatar: Yup.mixed()
    .required('Image upload is required'),
  // .test('fileSize', 'The file is too large', (value) => {
  //   return value && value.size <= 2000000000; // Check if file size is less than or equal to 2MB
  // })
  // .test('fileType', 'Unsupported file format', (value) => {
  //   return value && ['image/jpeg','image/jpeg', 'image/png', 'image/gif'].includes(value.type); // Check for supported file types
  // }),
  password: Yup.string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
  cpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Confirm Passwords must match')
    .required('Please Enter your confirm password'),
});

const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [preview, setPreview] = useState('')
  const navigate = useNavigate();


  const { handleChange, handleSubmit, setFieldValue, values, errors, touched } = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      email: '',
      avatar: '',
      password: '',
      cpassword: ''

    },
    validationSchema: SignupSchema,
    onSubmit: async (values, { resetForm }) => {
      window.localStorage.setItem("signUp", JSON.stringify(values))
      const user = window.localStorage.getItem("signUp")
      if (user) {

        navigate(`/login`)
      } else {
        navigate(`/sign-up`)
      }


      /* try {
        const formData = new FormData();
        formData.append('fname', values.fname);
        formData.append('lname', values.lname);
        formData.append('email', values.email);
        // formData.append('avatar', values.avatar); // Assuming avatar is a file object
        formData.append('password', values.password);
        formData.append('cpassword', values.cpassword);
        if (values.avatar) {
          console.log(values)
          formData.append('avatar', values.avatar);  // Important: Ensure values.avatar is a File object
        } else {
          throw new Error('Avatar file is missing.');
        }
    
       const response= await axios.post('api/v1/users/sign-up', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
         const data=response.data;
         console.log(data)
        if(data.success){

          handleSuccess(data.message);
          resetForm();
          navigate('/login');
        }else {
          // If success is not true or undefined, show an error and prevent further actions
          handleError(data?.message);
          
        }
      } catch (error) {
        if (error.response && error.response.data) {
            handleError(error.response.data.message || 'An unexpected error occurred');
        } else {
            handleError('An unexpected error occurred');
        }
        console.error('Error during registration:', error);
    } */
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFieldValue("avatar", file)
      let reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setPreview(reader.result)

        }
      }

      reader.readAsDataURL(file)
    }
  };


  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{ textAlign: 'center' }}>
              We are glad that you will be using Project Cloud to manage <br />
              your tasks! We hope that you will get like it.
            </p>
          </div>


          <form className="form_btn" onSubmit={handleSubmit}>
            <div className="form_input">
              <label htmlFor="fname">First Name</label>
              <input type="text" name="fname" id="fname" placeholder="Enter Your First Name" onChange={handleChange}
                value={values.fname} />
              {errors.fname && touched.fname ? (
                <div className="text-danger">{errors.fname}</div>
              ) : null}
            </div>
            <div className="form_input">
              <label htmlFor="lname">Last Name</label>
              <input type="text" name="lname" id="lname" placeholder="Enter Your Last Name" onChange={handleChange}
                value={values.lname} />
              {errors.lname && touched.lname ? (
                <div className="text-danger">{errors.lname}</div>
              ) : null}
            </div>
            <div className="form_input">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                name="avatar"
                id="avatar"
                placeholder="Upload Image"
                onChange={handleFileChange}
              />
              {errors.avatar && touched.avatar ? (
                <div className="text-danger">{errors.avatar}</div>
              ) : null}
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Enter Your Email Address" onChange={handleChange}
                value={values.email} />
              {errors.email && touched.email ? (
                <div className="text-danger">{errors.email}</div>
              ) : null}
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  onChange={handleChange}
                  value={values.password}

                />
                <div className="showpass" onClick={() => setShowPassword(!showPassword)}>
                  {!showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                </div>
              </div>
            </div>
            <div className="form_input">
              <label htmlFor="cpassword">Confirm Password</label>
              <div className="two">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  value={values.cpassword}
                />
                <div className="showpass" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {!showConfirmPassword ? <IoIosEyeOff /> : <IoIosEye />}
                </div>
              </div>
            </div>
            {errors.cpassword && touched.cpassword ? (
              <div className="text-danger">{errors.cpassword}</div>
            ) : null}

            {values.password && <CheckList password={values.password} cpassword={values.cpassword} />}

            <button className="btn" type="submit">
              Sign Up
            </button>
            <p>
              Already have an account? <NavLink to="/login">Log In</NavLink>
            </p>
          </form>


        </div>
      </section>
    </>
  );
};

export default SignUp;
