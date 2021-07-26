import React from 'react'

const Badge = ({ className }) => {
  return (
    <>
      <div className={`absolute top-0 right-2 h-2 w-2 bg-red-300 opacity-75 rounded-full animate-ping ${className}`}></div>
      <div className={`absolute top-0 right-2 h-2 w-2 bg-red-500 rounded-full ${className}`}></div>
    </>
  )
}

export default Badge