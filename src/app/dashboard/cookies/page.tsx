
import { TabBar } from '@/components'
import React from 'react'
import { cookies } from 'next/headers'


export const metadata = {
  title: 'Uso Base de cookies',
  description: 'solo muestra los usos basicos para las cookies'
}

const CookiesPage = () => {
  const cookieStorage = cookies()
  const cookieTab = Number( cookieStorage.get('selectedTab')?.value ?? '1')
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col">
            <span className='text-3xl text-black'>Tabs</span>
            <TabBar currentTab={cookieTab} />
        </div>
    </div>
    )
}

export default CookiesPage
