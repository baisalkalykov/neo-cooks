import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './conponents/login/Login'
import Registration from './conponents/registration/Registration'
import Profile from './pages/profile/Profile'
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import './App.scss'
import LetterEmail from './conponents/letter-email/letterEmail'
import UserSlice from './pages/store/slice/UserSlice'
const App = () => {
  const isAuth = UserSlice.isAuth
  return (
    <div className='app'>
      {isAuth?
       <Routes>
       <Route path='/home' element={<Home />} />
       <Route path='/search' element={<Search />} />
       <Route path='/profile' element={<Profile/>}/>
     </Routes> : 
        <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/letter' element={<LetterEmail/>}/>
      </Routes>
      }
     
    </div>
  );
};

export default App

