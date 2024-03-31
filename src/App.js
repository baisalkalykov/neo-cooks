import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './conponents/login/Login'
import Registration from './conponents/registration/Registration'
import Profile from './pages/profile/Profile'
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import './App.scss'
import LetterEmail from './conponents/letter-email/letterEmail'
import RecipesCard from './conponents/recipes-card/RecipesCard'
import DesRecipes from './conponents/des-recepis/DesRecipes'
const App = () => {
 
  return (
    <div className='app'>
    
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/letter' element={<LetterEmail/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/recipesCard' element={< RecipesCard/>}/>
        <Route path='/desrecipe/:id' element={<DesRecipes/>}/>
      </Routes>
    </div>
  );
};

export default App

