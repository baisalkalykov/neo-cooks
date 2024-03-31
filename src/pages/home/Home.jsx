import React from 'react'
import { useEffect,useState } from 'react'
import SideNav from '../../conponents/sideNav/SideNav'
import './Home.scss'
import RecipesCard from '../../conponents/recipes-card/RecipesCard'
import { fetchRecipes,setRecipe} from '../../pages/store/slice/ResipeSlice'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.resipe.recipes);
  const status = useSelector(state => state.user.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRecipes());
    }
  }, [dispatch, status]);

  // Функция для создания массива вкладок
  function Tab() {
    return [
      {
        viewTab: 'Breakfast',
        postTab: 'breakfast',
      },
      {
        viewTab: 'Lunch',
        postTab: 'lunch',
      },
      {
        viewTab: 'Dinner',
        postTab: 'dinner',
      },
    ];
  }

  // Получение массива вкладок
  const tabs = Tab();

  const [category, setCategory] = useState('Breakfast');
  const [active, setActive] = useState('Breakfast');

  const handleActiveClick = (tab) => {
    setActive(tab.viewTab);
    setCategory(tab.postTab);
  };
   
  return (
    <div className="home">
      <SideNav />
      <div className="home_content">
      <h1 className="home__h1">Hi, Sarthak. UI Designer & Cook</h1>
      <div className="home__container">
        <p className="home__category">Category</p>
        <div className="home__list">
          {tabs.map((tab, idx) => (
            <li
              key={idx}
              className={`home__list-li ${active === tab.viewTab ? 'active' : ''}`}
              onClick={() => handleActiveClick(tab)}
              style={{ color: active === tab.viewTab ? 'black':'#666666'  }}
            >
              {tab.viewTab}
            </li>
          ))}
        </div>
        <div className="home__cards">
     
         {recipes.map(recipe => (
            <Link to={`/desrecipe/${recipe.id}`} className='home__link' key={recipe.id}>
              <RecipesCard recipe={recipe} key={recipe.id} />
          </Link>
        ))}
       
        </div>
       
      </div>
      </div>
      
    </div>
  );
};


export default Home
