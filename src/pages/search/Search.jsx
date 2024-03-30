import React from 'react'
import SideNav from '../../conponents/sideNav/SideNav'
import { useState , useEffect} from 'react'
import './Search.scss'
import { IoSearch } from "react-icons/io5";
import AddRecipe from '../../conponents/search-modal/AddRecipe';
import { useParams } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux'
import { searchRecipes } from '../store/slice/SearchSlice';
const Search = () => {
  function Tab() {
    return [
      {
        viewTab: 'Chefs',
        postTab: 'chefs',
      },
      {
        viewTab: 'Recipes',
        postTab: 'recipes',
      },
    ];
  }
  const [category, setCategory] = useState('Recipes');
  const [active, setActive] = useState('Recipes');
  const tabs = Tab();
  const handleActiveClick = (tab) => {
    setActive(tab.viewTab);
    setCategory(tab.postTab);
  };
  const [ModalActive, SetModalActive]=useState(false)
  const { id } = useParams();

  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.user.recipes);
  const status = useSelector(state => state.user.status);
  useEffect(() => {
    if (status === 'idle' && searchQuery !== '') {
      dispatch(searchRecipes(searchQuery));
    }
  }, [dispatch, searchQuery, status]);
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    dispatch(searchRecipes(e.target.value));
  };
  return (
    <div className='search'>
        <SideNav />
        <div className="search__container">
       <div className="search__title">
        <p className='search__text'>What to eat today?</p>
        <div className="search__category">
        {tabs.map((tab, idx) => (
           <div
             className={`search__box ${active === tab.viewTab ? 'active' : ''}`}
             onClick={() => handleActiveClick(tab)}
             key={idx}
             style={{ background: active === tab.viewTab ? '#FA9E31' : 'transparent' }}
            >
             <p className={`search__category-text ${active === tab.viewTab ? 'active' : ''}`}
             onClick={() => handleActiveClick(tab)}
             key={idx}
             style={{ color: active === tab.viewTab ? '#FAFAFA' : '#343434' }}
             >{tab.viewTab}</p>
          </div>
       ))}
        </div>
       </div>
       <div className="search__in">
       <input 
          type="text"
          className='search__input'
          placeholder='Search recipes' 
          onChange={handleSearch}
          value={searchQuery}
          />
       <IoSearch className='search__icon' />
       </div>
       <div className='search__cards'>
        {Array.isArray(recipes) && recipes.map(recipe => (
         <div key={recipe.id} className='search__card'>
          <img src={recipe.image} alt={recipe.title} className='search__card-img' />
          <h3 className='search__card-text'>{recipe.recipe_name}</h3>
      
        </div>
       ))}
     </div>
      <button   
          className='search__btn'
          onClick={()=>SetModalActive(true)}
      >
        <span className='search__btn-svg' >
        <p className='search__btn-p'>+</p> 
        </span>
           Add your recipe
       </button>
     <AddRecipe active={ModalActive} setActive={SetModalActive} id={id}/>
     </div>
    </div>
  )
}

export default Search
