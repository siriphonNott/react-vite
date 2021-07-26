import React from 'react'
import './index.css'
import ViteLogo from '../../assets/icons/vite-logo.svg'
import { Badge } from '@/components/common'
export default function Header() {

  return (
    <div className="sticky top-0 flex justify-between bg-gray-900 text-gray-200 p-3 z-10">
      <div className="nav-left flex items-center">
        <img src={ViteLogo} alt="" srcSet="" width={20} height={20} className="ml-2 mr-2" />
        <div>Vite + React + Tailwindcss</div>
      </div>
      <div className="nav-right flex">
        <div className="relative">
          <svg className="w-6 h-6 cursor-pointer mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          <Badge />
        </div>
        <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
      </div>
    </div>
  )
}
