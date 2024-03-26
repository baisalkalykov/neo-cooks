import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss'
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { useDispatch,useSelector } from 'react-redux';
import { fetchUser } from '../../pages/store/slice/UserSlice';

const Login = () => {
  const [show,setShow] = useState(false)
  const [password, setPassword] = useState('');
  const [username,setusername]=useState('');
  const [error, setError] = useState(null);
  const handleEye = () => {
    setShow(!show);
  };
  const dispatch=useDispatch()
  const navigate= useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await dispatch(fetchUser({
        username: username,
        password: password
      }));
      if (response ) {
        navigate('/home');
        return;
      } else {
        throw new Error('error');
      }
    } catch (error) {
      setError('Неверный логин или пароль');
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };
  return(
    <>
   
    <div className='login'>
    <div className="login__header">
        <h2 className='login__text-h2'>Welcome Back <br />
        To  <span className='login__tex-span'>CooksCorner</span> </h2>
       </div>
      <div className="login__container">

         <form className='login__form' onSubmit={handleSubmit}>
         {error && <div className="login__form-error">
         <p className='login__form-error-text'>{error}</p>
        </div>}
            <div className="login__form-content">
                <label htmlFor="" className='login__form-label'>Gmail</label>
                <input type="text" className='login__form-input'
                value={username}
                onChange={(e)=>setusername(e.target.value)} />
                <MdAlternateEmail className='login__form-icon' />
            </div>
            <div className="login__form-content">
                <label htmlFor="" className='login__form-label'>Password</label>
                <input  type={show ? 'text' : 'password'}
                 className='login__form-input'
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                  />
                <div className="login__form-icons" onClick={handleEye}
                >
                {show ? <BsEye className='login__form-icons'/> : <BsEyeSlash className='login__form-icons' />}
                </div>
            </div>
            <button className='login__form-btn'
            type='submit'>Sign In</button>
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
