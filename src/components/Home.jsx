import React from 'react'

const Home = () => {

    const logout = () => {
        localStorage.clear()
    }

  return (
      <div className='sm:h-auto sm:w-full sm:bg-orange-400'>
        
        <h1>This is the homepage</h1>
          <button onClick={logout} className='bg-blue-950 sm:h-[20px] sm:w-[40%] sm:py-11 text-white'>Logout </button>
      </div>
  )
}

export default Home