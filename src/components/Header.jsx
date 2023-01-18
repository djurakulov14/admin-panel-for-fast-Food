import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go';
import MyModal from './MyModal';
import { PostForm } from './PostForm';

function Header() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <header className="w-full fixed top-0 left-[21%] pl-[1%]  h-auto bg-[#f6ad3199] flex flex-col gap-5 backdrop-blur">
        <div className='w-[30%] mt-5 bg-white h-10 rounded-full flex items-center pl-3 gap-2 overflow-hidden'>
          <GoSearch size="20"/>
          <input type="text" className='outline-none text-lg w-full' />
        </div>
        <div className='flex w-[75%] items-center justify-between mb-3'>
          <h1 className='text-3xl font-semibold'>Продукты</h1>
          <div  onClick={() => setVisible(true)} className='w-32 bg-[#1D4ED8] h-11 rounded-full flex items-center justify-center'>
            <p className='text-white font-semibold'>+ Добавить</p>
          </div>
        </div>
      </header>
      <MyModal visible={visible} setVisible={setVisible} ><PostForm setVisible={setVisible}/></MyModal>
    </>
  )
}

export default Header