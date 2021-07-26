import React from 'react'
import { menuList } from '@/app/constants'

const Title = ({ title = '', className }) => {
  const menu = menuList.find(v => v.name.toLowerCase() === title.toLowerCase())
  return (
    <div className={`text-xl font-semibold text-gray-800 flex items-center mb-3 ${className}`}>
      { menu ? menu.icon : <></> }
      <h1 className={`${menu ? 'ml-1': ''}`}>{ title }</h1>
    </div>
  )
}

export default Title