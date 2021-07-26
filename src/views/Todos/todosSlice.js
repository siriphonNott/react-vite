import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTodos } from '@/services/todo/todoService'
import { current } from 'immer'

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
    updateToto: (state, action) => { 
      // Extracting the current state from a draft
      try {
        const todos_ = current(state.todos)
        const index = todos_.findIndex(v => v.id === action.payload.id)
        state.todos[index].completed = !state.todos[index].completed
      } catch (error) {
      }
    },    
    removeTodo: (state, action) => { 
      state.todos = state.todos.filter(v => v.id !== action.payload.id)
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
export const { updateToto, removeTodo } = todosSlice.actions
export default todosSlice.reducer

// Selectors
export const selectAllTodos = state => state.todos.todos