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
     
        .addCase(deleteUser.rejected, setError)
      
        
        
       
    }
    
      
})
export const {addUser,removeUser,setUser,} = userSlice.actions;
export default userSlice.reducer;