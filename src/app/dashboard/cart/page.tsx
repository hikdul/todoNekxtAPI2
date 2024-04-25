import { cookies } from "next/headers"
import { title } from "process"

export const metadata = {
    title: 'carrito de compras',
    description: 'listado de productos en el carrito de compras'
}

const CartPage = () => {
    
    const cookieStore = cookies()
    const cart = JSON.parse(cookieStore.get('cart')?.value || '{}')
    
  return (
    <div className="text-black">
        <h1 className="text-5xl">Productos en el carrito ed compras</h1>
        <hr className="mb-2"/>
        <div className="flex flex-col sm:flex-row gap-2 w-full">
            <div className="flex flex-col gap-2 w-full sm:w-8/12">
            {

            }
            </div>
        </div>
    </div>
  )
}

export default CartPage
