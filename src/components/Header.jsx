import React, { useContext, useEffect, useState } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.svg'

import {BsBag} from 'react-icons/bs'

const Header = () => {
  const {isOpen,setIsOpen} = useContext(SidebarContext)
  const {itemAmount} = useContext(CartContext)
  const [isActive,setIsActive] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll' , () => {
      window.scrollY > 60 ?  setIsActive(true) : setIsActive(false)
    })
  })
  return (

    <header className={`${isActive ? 'bg-white shadow-md py-0' : 'bg-none py-0'} fixed w-full z-10 transition-all `}>
      <div className='items-center flex justify-between px-14 py-4  h-full'>
      <Link to={'/'}>
        <div>
          <img className='w-[40px]' src={Logo} alt="" srcset="" />
        </div>
      </Link>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
        <BsBag className='text-2xl '/>
        <div className='bg-red-500 absolute right-12 top-10 text-[12px] w-[18px] h-[18px] rounded-full flex justify-center items-center'>
          {itemAmount}
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header
