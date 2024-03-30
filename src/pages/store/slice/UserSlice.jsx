import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const addUsers = createAsyncThunk(
  'user/addUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://muha-backender.org.kg/users/register/', userData,);

      if (!response.ok) {
        throw new Error('Server error');
      }

      // Возвращаем данные из успешного ответа
      return response.data;
    } catch (error) {
      // Возвращаем ошибку с помощью rejectWithValue
      return rejectWithValue(error.message);
    }
  }
);

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

export const fetchUser = createAsyncThunk(
    'user/fetchUser', 
    async (data,rejectWithValue) => { 
      try {
        const response = await axios.post('https://muha-backender.org.kg/users/login/',data);
        if(response.status !== 200){
            throw new Error('server error ')
        }
  
        localStorage.setItem('accessToken',response.data.tokens.access)
        localStorage.setItem('refreshToken',response.data.tokens.refresh)
       return response.data
      }
      catch (error) {
       return rejectWithValue(error.message)
      }
    }
  );

  export const deleteUser=createAsyncThunk(
    'user/deleteUser',
    async function(id,{rejectWithValue,dispatch }){
        try{
         const response=await axios.get(`/${id}`,{
            method:'Delete',
         })
         if(!response.ok){
          throw new Error('server error ')
      }
         dispatch(removeUser({id}))
        }  catch (error) {
          return rejectWithValue(error.message)
         }

    }
  );
  

  const setError= (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
  }

  const initialState={
    email: null,
    token : null,
    id : null,
    recipes: [],
    status: 'idle',
  };
const userSlice =createSlice({
    name:'user',
    initialState,
    reducers:{
      setUser(state, action) {
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.id = action.payload.id;
     
      },

      setRecipe(state,action){
       state.recipes= action.payload;
      },
        addUser(state,action) {
          state.user.push(action.payload)
        },
        
        removeUser(state){
            state.email = null;
            state.token = null;
            state.id = null;
        },
        
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchUser.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
          state.status = 'resolved';
          state.email = action.payload;
        })
        .addCase(fetchUser.rejected, setError)
        .addCase(deleteUser.rejected, setError)
        .addCase(fetchRecipes.fulfilled, (state, action) => {
          state.recipes = action.payload.Recipes;
          console.log(state.recipes);
        })
        .addCase(fetchRecipes.rejected, setError)
        
       
    }
    
      
})
export const {addUser,removeUser,setUser,setRecipe,} = userSlice.actions;
export default userSlice.reducer;