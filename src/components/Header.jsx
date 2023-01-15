import React from 'react'
import { GoSearch } from 'react-icons/go';

function Header() {
  return (
    <header className="w-full fixed top-0 left-[22%]">
        <div className='w-[30%] mt-5 bg-white h-10 rounded-full flex items-center pl-3 gap-2 overflow-hidden'>
          <GoSearch size="20"/>
          <input type="text" className='outline-none text-lg w-full' />
        </div>
    </header>
  )
}

export default Header