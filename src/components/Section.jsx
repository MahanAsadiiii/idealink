import React from 'react'

const Section =({children}) => {
  return (
    <div className='w-full flex justify-center px-5 lg:px-40 md:px-20' >
      {children}
    </div>
  )
}

export {Section}