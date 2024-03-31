import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './DesRecipes.scss'
import { IoMdTime } from "react-icons/io";


const DesRecipes = () => {
  const [trip, setTrip] = useState({});
  const { id } = useParams();
 console.log(id)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('accessToken')
        
        const response = await axios(`https://muha-backender.org.kg/recipes/${id}/`,{
            headers: {
              // Устанавливаем заголовок Authorization с токеном доступа из localStorage
              'Authorization': `Bearer ${token}`
            }});
        const tripData = Object.values(response.data)[0];
        setTrip(tripData);
      } catch (error) {
        console.error('Error fetching meal details:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className='desresipe'>
       <img src={trip.image} alt="" className='desresipe__img' /> 
       <div className="desresipe__container">
         <h1>{ trip.recipe_name}</h1>
         <div className="desresipe__time">
         <IoMdTime/>
          <p className='desresipe__time-p'>{trip.cooking_time}</p>
         </div>
         <div className="desresipe__difficulty">
          <p className='desresipe__difficulty-p'>{trip.difficulty}</p>
         </div>
         <div className="desresipe__description">
          <p >Description</p>
          <p>{trip.description}</p>
         </div>
         <div className="desresipe__ingredients">
          <p>Ingredients:</p>
          <div className="desresipe__ingre-des">
          {trip.ingredients.map((ingredient, index) => (
             <div key={index}>
               <p>{ingredient.name}</p>
               <p>{ingredient.quantity}</p>
             </div>
          ))}
          </div>
          <p>{trip.ingredients}</p>
         </div>
      
       </div>
       
      
    </div>
  );
};

export default DesRecipes;
