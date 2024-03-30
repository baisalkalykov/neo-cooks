import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipes = createAsyncThunk(
    'recipes/fetchRecipes',
    async () => {
      try {
        // Отправляем запрос для получения данных рецептов
        const token = localStorage.getItem('accessToken')
        
        const response = await axios.get('https://muha-backender.org.kg/recipes/', {
          headers: {
            // Устанавливаем заголовок Authorization с токеном доступа из localStorage
            'Authorization': `Bearer ${token}`
          }
        });    
       
        const recipes = response.data;
        return recipes;
      
      } catch (error) {
        // Если произошла ошибка, перехватываем ее и отправляем ее в обработчик ошибок createAsyncThunk
        throw new Error('Failed to fetch recipes');
      }
    }
  );

  const initialState={
    id : null,
    recipes: [],
    status: 'idle',
  };
  const setError= (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
  }
  const resipeSlice =createSlice({
    name:'recipe',
    initialState,
    reducers:{
        setRecipe(state,action){
            state.recipes= action.payload;
           },
    },
  extraReducers: (builder) => {
    builder

      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload.Recipes;
        console.log(state.recipes);
      })
      .addCase(fetchRecipes.rejected, setError)
    }
  })
  export const {setRecipe}=resipeSlice.actions
  export default resipeSlice.reducer