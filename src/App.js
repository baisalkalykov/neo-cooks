import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './conponents/login/Login'
import Registration from './conponents/registration/Registration'
import SideNav from './conponents/sideNav/SideNav'
import Home from './pages/home/Home'
import Search from './pages/search/Search'
const App = () => {
  return (
    <>
      <SideNav />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </>
  );
};

export default App

