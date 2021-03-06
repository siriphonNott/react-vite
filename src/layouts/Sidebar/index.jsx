import React, { useState } from 'react'
import './index.css'
import { Link, useLocation } from 'react-router-dom'
import { menuList } from '@/app/constants'

export default function Sidebar() {
  const [menus] = useState(menuList)
  const { pathname } = useLocation()

  const MenuItem = ({ icon, name, link }) => {
    const isActive = link === '/' ? pathname === link : pathname.includes(link)
    const menuActive = isActive ? 'bg-gray-600 shadow-lg' : 'bg-gray-800'
    return (
      <Link to={link}>
        <div className={`menu-item flex py-2 pl-4 text-gray-200 ${menuActive} hover:bg-gray-700 cursor-pointer`}>
          <div className="mr-2">{icon}</div>
          <div className={isActive ? 'font-bold' : ''}>{name}</div>
        </div>
      </Link>
    )
  }

  return (
    <div className="w-48 fixed  bg-gray-800 sm:translate-x-0 -translate-x-full transition ease-in-out h-screen z-10">
      {menus.map((v) => <MenuItem key={v.name}  name={v.name} link={v.link} icon={v.icon} />)}
    </div>
  )
}
