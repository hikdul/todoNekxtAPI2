'use client'

import Link from 'next/link';
import {usePathname} from 'next/navigation'

export const SidebarItem = ({icon, text, path}:props) => {

    // * por este elemento esto se vuelve un client side
    const pathName = usePathname()
    
    return (
      <li>
        <Link 
          href={path} 
          className={` ${pathName === path 
              ? 'relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400 ' 
              : 'px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-gradient-to-r hover:bg-sky-600 '}`}
          >
              {icon}
              <span className="group-hover:text-white-700">{text}</span>
        </Link>
      </li>
    )
}


interface props{
    icon: React.ReactNode 
    text: string
    path: string
}

