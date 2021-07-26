import React, { useEffect } from 'react'
import { Title, NoItem, Loading } from '@/components/common'
import { alertSuccess, alertWarning, alertError } from '@/helpers/notification'
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from './todosSlice'
import { motion } from 'framer-motion'
import { fadeIn } from '@/helpers/pageTransition'

export default function Todos() {

  const { todos, isLoading, error } = useSelector(state => state.todos);
  const dispatch = useDispatch()

  // Use Effect
  useEffect(() => dispatch(fetchTodos()), [])
  useEffect(() => alertError(error), [error])

  const TodoItem = ({ id, title, completed }) => {
    const bgItem = completed ? 'bg-green-50 hover:bg-green-100' : 'bg-yellow-50 hover:bg-yellow-100'
    return (
      <div className={`hadow-md p-3 mb-3 rounded-lg flex items-center justify-between cursor-pointer shadow-md ${bgItem}`}>
        <div className="flex items-center">
          { completed ?
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          }
          <h3 className="ml-2 sm:text-md text-sm">{title}</h3>
        </div>
        <div className="flex">
          { completed ? 
              <svg onClick={() => setDoneTodo(id)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              : <svg onClick={() => setDoneTodo(id)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          }
          <svg onClick={() => removeTodo(id)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </div>
      </div>
    )
  }

  const setDoneTodo = (id) => {
    const todo = todos.find(v => v.id === id)
    todo.completed = !todo.completed 
    setTodos([...todos])
    todo.completed  ? alertSuccess('The task has been done.') : alertWarning('The task has been pending.')
  }

  const removeTodo = (id) => {
    const todosFiltered = todos.filter(v => v.id !== id)
    setTodos(todosFiltered)
    alertSuccess('The task has been deleted.')
  }

  if(isLoading) return <Loading />
 
  return (
    <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={fadeIn.variants}
      transition={fadeIn.transition}
    >
      <div>
        <Title title="Todos" />
        {
          todos.length 
            ? todos.map(v => <TodoItem key={v.id} id={v.id} title={v.title} completed={v.completed} />) 
            : <NoItem title="No item" />
        }
      </div>
    </motion.div>
  )
}
