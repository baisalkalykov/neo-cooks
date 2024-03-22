import React from 'react'
import { redirect } from 'react-router-dom'
import SideNav from '../../conponents/sideNav/SideNav'
import './Home.scss'
import RecipesCard from '../../conponents/recipes-card/RecipesCard'
const Home = () => {
  return (

    <div className="home">
      <SideNav/>
      <h1 className='home__h1'>fgnhgfcx</h1>
      <RecipesCard/>
    </div>

  )
}

export default Home
