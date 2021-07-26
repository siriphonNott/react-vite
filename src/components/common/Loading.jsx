import React from 'react'

const Loading = ({ title = '', className }) => {
  return (
    <div className={`py-3 flex flex-col items-center ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
      <h1 className="font-semibold text-gray-500 ">Loading...</h1>
    </div>
  )
}

export default Loading

