import React from 'react'
import './RecipesCard.scss'

const RecipesCard = ({recipe}) => {
  return (
    <div className="recipes">
      <div className="recipes__cards">
        <div className="recipes__card" key={recipe.id}  >
          <img src={recipe.image} alt={recipe.title} className='recipes__card-img' />
          <h3 className='recipes__card-text'>{recipe.recipe_name}</h3>
       </div>
     </div>
  </div>
  )
}

export default RecipesCard
