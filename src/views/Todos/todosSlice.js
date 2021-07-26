import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTodos } from '@/services/todo/todoService'

const initialState = {  todos: [], isLoading: true, value: '', error: null }

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (payload, { rejectWithValue }) => {
    try {
      const response =  await getTodos();
      return response
    } catch (err) {
      throw err
    }
  }
);

export const todosSlice = createSlice({  
  name: 'todos',
  initialState,
  reducers: {
    increment: (state) => {      
      state.value += 1    
    },    
    decrement: (state) => { 
      state.value -= 1    
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false
        state.todos = action.payload;
      });
  },
  })

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = todosSlice.actions
export default todosSlice.reducer

// Selectors
export const selectAllTodos = state => state.todos.todos