import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss'
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { setUser } from '../../pages/store/slice/UserSlice';
import { useDispatch } from 'react-redux';
const Login = () => {
  const [show,setShow] = useState(false)
  const [password, setPassword] = useState('');
  const handleEye = () => {
    setShow(!show);
  };
  const handleSubmit= (event)=>{
    event.preventDefault()
   }
   const dispatch=useDispatch()
  return (
    <>
   
    <div className='login'>
    <div className="login__header">
        <h2 className='login__text-h2'>Welcome Back <br />
        To  <span className='login__tex-span'>CooksCorner</span> </h2>
       </div>
      <div className="login__container">
         <form className='login__form' onSubmit={handleSubmit}>
            <div className="login__form-content">
                <label htmlFor="" className='login__form-label'>Gmail</label>
                <input type="text" className='login__form-input' />
                <MdAlternateEmail className='login__form-icon' />
            </div>
            <div className="login__form-content">
                <label htmlFor="" className='login__form-label'>Password</label>
                <input  type={show ? 'text' : 'password'}
                 className='login__form-input'
                  />
                <div className="login__form-icons" onClick={handleEye}>
                {show ? <BsEye className='login__form-icons'/> : <BsEyeSlash className='login__form-icons' />}
                </div>
            </div>
            <button className='login__form-btn'>Sign In</button>
            <Link to={'/registration'} className='login__link'>
            <p className='login__form-text'>I don’t have an account? <span className='login__form-span'>Sign Up Now</span> </p>
            </Link>
         </form>
      </div>
    </div>
    </>
  )
}

export default Login
