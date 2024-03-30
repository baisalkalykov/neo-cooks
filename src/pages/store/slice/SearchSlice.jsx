import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const searchRecipes = createAsyncThunk(
    'recipes/searchRecipes',
    async (searchQuery, thunkAPI) => {
      try {
        const token = localStorage.getItem('accessToken'); // Получаем токен доступа из localStorage
        console.log(token)
        const response = await axios.get(`https://muha-backender.org.kg/recipes/?search=${searchQuery}`, {
          headers: {
            'Authorization': `Bearer  ${token}`, // Добавляем токен доступа в заголовок запроса
          },
        });
        return response.data.Recipes;
      } catch (error) {
        throw new Error('Failed to search recipes');
      }
    }
  );
  const initialState={
    id : null,
    recipes: [],
    status: 'idle',
  };
  const searchSlice =createSlice({
    name:'search',
    initialState,
    reducers:{
      setSearchResults(state, action) {
        state.recipes = action.payload;
      },
      setRecipe(state,action){
        state.recipes= action.payload;
       }
    },
    extraReducers: (builder) => {
      builder
      .addCase(searchRecipes.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.recipes = action.payload;
      })
      .addCase(searchRecipes.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(searchRecipes.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
      
    }
  })

  export const {setRecipe,}=searchSlice.actions
  export default searchSlice.reducer;