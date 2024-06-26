
import { cookies } from 'next/headers'
import Link from 'next/link';
import React from 'react'
import { CiChat1, CiMenuBurger, CiSearch, CiShoppingBasket } from 'react-icons/ci'


  const getTotalCountbasket = (cart:{[id:string]:number}) => {

    let items = 0;
    
    Object.values(cart).forEach(value =>{
      if(value as number > 0)
        items += value as number
    })
    
    return items
  }

export const TopMenu = () => {
  
  //! asi manejamos las cookies desde el servidor.
  const cookieStore = cookies()
  const cart = JSON.parse(cookieStore.get('cart')?.value ?? '{}' )
  const totalCountInBasket = getTotalCountbasket(cart)
  
  
  return (
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">

          <div className="px-6 flex items-center justify-between space-x-4">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">Dashboard</h5>
            <button title='btn' className="w-12 h-16 -mr-2 border-r lg:hidden">
              <CiMenuBurger size={30} />
            </button>
            <div className="flex space-x-2">
              
              <div hidden className="md:block">
                <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                  <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                    <CiSearch />
                  </span>
                  <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Search here" className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition" />
                </div>
              </div>
              
              <button title='btn'  className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
                <CiSearch />
              </button>
              <button title='btn' className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                <CiChat1 size={25} />
              </button>
              <Link
                  href={'/dashboard/cart'}
                  title='btn'
                  className="text-blue-700 p-2 flex items-center justify-center h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                    {(totalCountInBasket > 0 ) && <span className='text-sm mr-2 text-blue-900 font-bold'>{totalCountInBasket}</span>}
                    <CiShoppingBasket size={25}/>
              </Link>
            </div>
          </div>
        </div>
  )
}
