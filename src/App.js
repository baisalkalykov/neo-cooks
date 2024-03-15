import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './conponents/login/Login'
import Registration from './conponents/registration/Registration'
const App = () => {
  return (
    <>
    <Routes>
     <Route path='' element={<Login/>}/>
     <Route path='/registration' element={<Registration/>}/>
    </Routes>
    </>
  )
}

export default App

