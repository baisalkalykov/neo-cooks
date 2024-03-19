import React from 'react'
import { redirect } from 'react-router-dom'
import './Home.scss'
const Home = () => {
  return (
    <redirect to='/login'/>
  )
}

export default Home
