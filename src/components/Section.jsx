import React from 'react'

const Section =({children}) => {
  return (
    <div className='w-full flex justify-center px-10 md:px-40' >
      {children}
    </div>
  )
}

export default Section