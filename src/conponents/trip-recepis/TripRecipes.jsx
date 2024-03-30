import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Импорт useSelector из Redux
import axios from 'axios';

const TripRecipes = () => {
  const [trip, setTrip] = useState({});
  const { id } = useParams();
  const tripFromRedux = useSelector(state => state.resipe.recipes); // Получение данных из Redux

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios(`https://muha-backender.org.kg/recipes/${id}/`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const tripData = response.data.trip;
        setTrip(tripData);
      } catch (error) {
        console.error('Error fetching meal details:', error);
      }
    };

    fetchData();
  }, [id]);

  // Использование данных из Redux, если они доступны
  const tripToShow = tripFromRedux ? tripFromRedux : trip;

  return (
    <div className='resipeTrip'>
      {tripToShow && tripToShow.image && <img src={tripToShow.image} alt="" className='' />}
      <h1>{tripToShow && tripToShow.recipe_name}</h1>
    </div>
  );
};

export default TripRecipes;
