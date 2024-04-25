//'use client'

import { getCookie, hasCookie, setCookie } from "cookies-next"

export const getCookieCart = (): {[id:string]:number} =>{
    
    if(hasCookie('cart'))
    {
        const cookieCart = JSON.parse(getCookie('cart') as string ?? {})
        return cookieCart
    }
    
    return{}
}

export const addProductToCart = (id:string): void =>{
    const cookieCart = getCookieCart()
    if(cookieCart[id])
        cookieCart[id]++
    if(!cookieCart[id])
        cookieCart[id] = 1
    
    setCookie('cart', JSON.stringify(cookieCart))

}

export const removeProductToCart = (id:string): void =>{
    //! mi solucion 
    // ---
    //const cookieCart = getCookieCart()
   // if(cookieCart[id])
    //    cookieCart[id] = 0
   
   // ! la solucion del prof
   
   const cookieCart = getCookieCart()
   delete cookieCart[id]
    
   // ? solo fueron iguales aca
    setCookie('cart', JSON.stringify(cookieCart))

}

export const substractProductFromCart = (id:string): void =>{
   const cookieCart = getCookieCart()
   if(cookieCart[id])
        cookieCart[id]--

   if(cookieCart[id] <= 0)
    delete cookieCart[id]

    setCookie('cart', JSON.stringify(cookieCart))
}


