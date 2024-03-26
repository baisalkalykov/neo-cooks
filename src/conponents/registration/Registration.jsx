import React from 'react'
import { useState } from 'react'
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup' 
import './Registration.scss'
import { IoPersonOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUsers } from '../../pages/store/slice/UserSlice'

const Registration = () => {
const validationsSchema= yup.object().shape({
    email:yup.string().email('должно быть строкой').required('Обязательно'),
    username:yup.string().typeError('должно быть строкой').required('Обязательно'),
    password: yup.string().typeError('должно быть строкой').required('Обязательно'),
    password_confirm:yup.string().oneOf([yup.ref('password')],'Пароли не совпадают').required('Обязательно')
 })
 const dispatch = useDispatch();
 const handleSubmit = async (values) => {
  dispatch(addUsers(values));
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
          username:'',
            email: '',
            password: '',
            password_confirm: '',
          }} 
          validateOnBlur
          onSubmit={handleSubmit}
          validationSchema={validationsSchema}
        >
  {({ values, errors, touched, handleChange, handelBlur, isValid, handleSubmit, dirty }) => {
    console.log(errors)
    return (
      <form className='register__form'>
      <div className="register__form-content">
         <label htmlFor={`username`} className='register__form-label'>Name</label>
         <input type="text"
           name={`username`}
           placeholder='Enter your name'
           onChange={handleChange}
           onBlur={handelBlur}
           value={values.username}
           className='register__form-input'
          />
          <IoPersonOutline className='register__icon' />
          {touched.username && errors.username && <p className='register__from-eror'>{errors.username}</p>}
      </div>
      <div className="register__form-content">
         <label htmlFor={`email`} className='register__form-label'>Gmail</label>
         <input type="email"
           name={`email`}
           placeholder='Enter your Gmail'
           onChange={handleChange}
           onBlur={handelBlur}
           value={values.email}
           className='register__form-input'
          />
          <MdAlternateEmail className='register__icon' />
          {touched.email && errors.email && <p className='register__from-eror'>{errors.email}</p>}
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
         <label htmlFor={`password_confirm`} className='register__form-label'>Re-Password</label>
         <input type={showTwo ? 'text' : 'password'}
           name={`password_confirm`}
           placeholder='Enter your re-password'
           onChange={handleChange}
           onBlur={handelBlur}
           value={values.password_confirm}
           className='register__form-input'
          />
           <div className="register__form-icons" onClick={handleEyeTwo}>
             {showTwo ? <BsEye className='register__form-icons'/> : <BsEyeSlash className='register__form-icons' />}
             </div>
          {touched.password_confirm && errors.password_confirm && <p className='register__from-eror'>{errors.password_confirm}</p>}
      </div>
      <button 
       className='register__form-btn'
       onClick={handleSubmit}
       type={`submit`}
       disabled={!isValid && !dirty}
        style={{
            
           }}
      >Sign Up
      </button>
      <Link to={'/'} className='register__link'>
       <p className='register__form-p'>Already have an account? <span className='register__form-span'>Sign In Now</span></p>
       </Link>       
    </form>
    )
  }
    
      

  }
        </Formik>
       </div>
    </div>
  )
}

export default Registration
