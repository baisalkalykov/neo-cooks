import React from 'react'
import { useState } from 'react'
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup' 
import './Registration.scss'
import { IoPersonOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";

const Registration = () => {
const validationsSchema= yup.object().shape({
    gmail:yup.string().email('должно быть строкой').required('Обязательно'),
    name:yup.string().typeError('должно быть строкой').required('Обязательно'),
    password: yup.string().typeError('должно быть строкой').required('Обязательно'),
    confirmPassword:yup.string().oneOf([yup.ref('password')],'Пароли не совпадают').required('Обязательно')
 })
 const handleSubmit = async (values) => {
    console.log(values)
}
const [show,setShow] = useState(false)
const [showTwo,setShowTwo]=useState(false)
const handleEye = () => {
    setShow(!show);
}
const handleEyeTwo = () => {
    setShowTwo(!showTwo)
}

  return (
    <div className='register'>
       <div className="register__header">
        <h2 className='register__text-h2'>Sign up for delicious<br />  
         <span className='register__tex-span'>Discoveries! </span> </h2>
       </div>
       <div className="register__container">
        <Formik
        initialValues={{
            name:'',
            gmail: '',
            password: '',
            confirmPassword: '',
          }} 
          validateOnBlur
          onSubmit={handleSubmit}
          validationSchema={validationsSchema}
        >
  {({ values, errors, touched, handleChange, handelBlur, isValid, handleSubmit, dirty }) => (
       <form className='register__form'>
         <div className="register__form-content">
            <label htmlFor={`name`} className='register__form-label'>Name</label>
            <input type="text"
              name={`name`}
              placeholder='Enter your name'
              onChange={handleChange}
              onBlur={handelBlur}
              value={values.name}
              className='register__form-input'
             />
             <IoPersonOutline className='register__icon' />
             {touched.name && errors.name && <p className='register__from-eror'>{errors.name}</p>}
         </div>
         <div className="register__form-content">
            <label htmlFor={`gmail`} className='register__form-label'>Gmail</label>
            <input type="Gmail"
              name={`gmail`}
              placeholder='Enter your Gmail'
              onChange={handleChange}
              onBlur={handelBlur}
              value={values.gmail}
              className='register__form-input'
             />
             <MdAlternateEmail className='register__icon' />
             {touched.gmail && errors.gmail && <p className='register__from-eror'>{errors.gmail}</p>}
         </div>
         <div className="register__form-content">
            <label htmlFor={`password`} className='register__form-label' >Password</label>
            <input type={show ? 'text' : 'password'}
              name={`password`}
              placeholder='Enter your password'
              onChange={handleChange}
              onBlur={handelBlur}
              value={values.password}
              className='register__form-input'
             />
              <div className="register__form-icons" onClick={handleEye}>
                {show ? <BsEye className='register__form-icons'/> : <BsEyeSlash className='register__form-icons' />}
                </div>
             {touched.password && errors.password && <p className='register__from-eror'>{errors.password}</p>}
         </div>
         <div className="register__form-content">
            <label htmlFor={`confirmPassword`} className='register__form-label'>Re-Password</label>
            <input type={showTwo ? 'text' : 'password'}
              name={`confirmPassword`}
              placeholder='Enter your re-password'
              onChange={handleChange}
              onBlur={handelBlur}
              value={values.confirmPassword}
              className='register__form-input'
             />
              <div className="register__form-icons" onClick={handleEyeTwo}>
                {showTwo ? <BsEye className='register__form-icons'/> : <BsEyeSlash className='register__form-icons' />}
                </div>
             {touched.confirmPassword && errors.confirmPassword && <p className='register__from-eror'>{errors.confirmPassword}</p>}
         </div>
         <button 
          className='register__form-btn'
          onClick={handleSubmit}
          type={`submit`}
          disabled={!isValid && !dirty}
           style={{
                background: (!isValid || !dirty || Object.keys(touched).length !== Object.keys(validationsSchema.fields).length) ? '#D7D7D7' : '#FA9E31',
                color: (!isValid || !dirty || Object.keys(touched).length !== Object.keys(validationsSchema.fields).length) ? '#767676' : 'white',
              }}
         >Sign Up
         </button>
          <p className='register__form-p'>Already have an account? <span className='register__form-span'>Sign In Now</span></p>
       </form>
  )}
        </Formik>
       </div>
    </div>
  )
}

export default Registration
