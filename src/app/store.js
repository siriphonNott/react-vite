import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '@/views/Todos/todosSlice.js'
export const store = configureStore({ 
  reducer: {
    todos: todosReducer
  }
})
