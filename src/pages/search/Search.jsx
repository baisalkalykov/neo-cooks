import React from 'react'
import SideNav from '../../conponents/sideNav/SideNav'
import { useState } from 'react'
import './Search.scss'
import { IoSearch } from "react-icons/io5";
import AddRecipe from '../../conponents/search-modal/AddRecipe';
import { useParams } from 'react-router-dom';

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
  return (
    <div className='search'>
        <SideNav />
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
       <input type="text"
          className='search__input'
          placeholder='Search recipes' />
       <IoSearch className='search__icon' />
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
     <h2>ghjkl;</h2>
    </div>
  )
}

export default Search
