import React from 'react'

const GptSearchBar = () => {
  return (
    <div className=' flex justify-center  w-screen bg-netflix-bg h-screen ' >
      <form className='w-3/4 flex justify-center items-center h-2/6 '>
      <input placeholder='What would you like to watch today ? ' className='w-1/2 h-12 rounded-lg text-black outline-none px-3  text-lg font-serif' type="text"/>
        <button className="bg-red-700 text-white rounded-lg p-2 h-12 w-20 ml-8"> Search   </button>
      </form>
    </div>
  )
}

export default GptSearchBar
