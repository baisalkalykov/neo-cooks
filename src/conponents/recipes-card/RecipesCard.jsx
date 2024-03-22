import React from 'react'
import { useEffect } from 'react'
import { fetchRecipes,setRecipe} from '../../pages/store/slice/UserSlice'
import { useDispatch,useSelector } from 'react-redux'

const RecipesCard = () => {
    const dispatch = useDispatch();
    const recipes = useSelector(state => state.recipes);
  
    useEffect(() => {
      const recipesAray= dispatch(fetchRecipes())
      dispatch(setRecipe(recipesAray))
    }, []);
  
    return (
      <div className='recipes'>
        <div className="recipes__cards">
        {recipes && recipes.map(recipe =>
         <div className="recipes__card" key={recipe.id}>
           <img src={recipe.image} alt="" />
           <h1>{recipe.recipe_name}</h1>
        </div>
       )}
        </div>
      </div>
    );
  }
export default RecipesCard
