import React, { useState, useEffect } from 'react'
import { Title, NoItem } from '@/components/common'
import { getUsers } from '@/services/user/userService'
import { alertSuccess, alertError } from '@/helpers/notification'
import { motion } from 'framer-motion'
import { toRight } from '@/helpers/pageTransition'

export default function Users() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data)
    }).catch(err => {
      alertError(err.message)
    })
  }, [])

  const removeUser = (id) => {
    alertSuccess('The user has been deleted.')
    const usersFiltered = users.filter(v => v.id !== id)
    setUsers(usersFiltered)
  }

  const UserItem = ({ id, name, email, phone, website}) => {
    return (
      <div className="mb-3 shadow-md p-3 bg-gray-50 hover:bg-gray-100 cursor-pointer relative">
        <h2 className="sm:text-lg text-md font-semibold mb-2 text-gray-800">{name}</h2>
        <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg"className="h-4 w-4 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
          <p className="text-gray-700 sm:text-md text-sm"><strong>Email: </strong> {email}</p>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          <p className="text-gray-700 sm:text-md text-sm"><strong>Phone: </strong> {phone}</p>
        </div>
        <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg"className="h-4 w-4 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
          <p className="text-gray-700 sm:text-md text-sm"><strong>Website: </strong> {website}</p>
        </div>
        <div className="action absolute top-2 right-2">
          <svg onClick={() => removeUser(id)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400 hover:text-red-600 hover:h-6 hover:w-6 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>
      </div>
    )
  }

  return (
    <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={toRight.variants}
      transition={toRight.transition}
    >
      <div>
        <Title title="Users" />
        { users.length < 1 
          ? <NoItem title="No item" />
          : users.map(v => <UserItem key={v.id} id={v.id} name={v.name} email={v.email}  phone={v.phone} website={v.website} />)
        }
      </div>
    </motion.div>
  )
}
