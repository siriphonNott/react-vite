import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { menuList } from '@/config/constants'

export default function SidebarMB() {
  const [menus] = useState(menuList)
  const { pathname } = useLocation()

  const MenuItem = ({ icon, link }) => {
    const active = pathname === link ? 'bg-gray-900' : 'bg-gray-800'
    return (
      <Link to={link}>
        <div className={`menu-item flex justify-end text-gray-200 ${active} hover:bg-gray-900 cursor-pointer p-3`}>
          <div className="">{icon}</div>
        </div>
      </Link>
    )
  }

  return (
    <div className="w-48 fixed  bg-gray-800 sm:-translate-x-full -translate-x-36 transition ease-in-out h-screen">
      {menus.map((v) => <MenuItem key={v.name}  name={v.name} link={v.link} icon={v.icon} />)}
    </div>
  )
}
