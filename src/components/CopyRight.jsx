import React from 'react'
import { Logo2 } from '../utilities/Index'

function CopyRight() {
  return (

    <div className='flex items-center justify-between bg-[#333333] text-white py-2 px-3 md:px-10'>

      <img src={Logo2} height={60} width={110} alt="logo-sign" />
      <h5 className='text-xs font-light '>© 2023 Mahan Asadi.</h5>
    </div>

  )
}

export { CopyRight }