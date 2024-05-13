import { ProductCard } from "@/app/products"
import { Product, products } from "@/app/products/data/products"
import { WidgetItem } from "@/components"
import { ItemCard } from "@/shopping-cart"
import { cookies } from "next/headers"

export const metadata = {
  title: 'detalles carrito de compras ',
  description: 'detalles de los elementos en el carrito de compra',
}

interface productI {
  [id:string]: number
}

interface productInCart{
  product: Product
  quantity: number
}

const getProductInCart = (cart: productI): productInCart[] =>{
  
  const productsInCard : productInCart[] = []
  for(const id of Object.keys(cart))
  {
    const product = products.find(prod => prod.id === id)
    if(product)
        productsInCard.push({product,quantity: cart[id]})
  }
  
  return productsInCard
  
}

 const CartPage = () => {
  
  const cookiesStore = cookies()
  const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}') as productI
  const productsInCart = getProductInCart(cart)
  const totalToPay = productsInCart.reduce((prev, current) => (current.product.price * current.quantity) + prev,0)

  return (
    <>
    <h1 className="text-black text-5xl">Productos del carrito</h1>
    <hr className="mb-2"/>
    <div className="flex flex-col sm:flex-row gap-2 w-full">
      <div className="flex flex-col gap-2 w-full sm:w-8/12">
        {
          productsInCart.map(y => (<ItemCard key={y.product.id} {...y} />)) 
        }
      </div>
      
      <div className="flex flex-col w-full sm:w-4/12">
        <WidgetItem title="Total A Pagar">
          <div className="mt-2 flex justify-center gap-4">
            <h3 className="text-3xl font-bold text-gray-700">{(totalToPay * 1.15).toFixed(2)}$</h3>

          </div>
          <span className="fond-bold text-gray-500">Impuestos 15%: {(totalToPay * 0.15).toFixed(2)} $</span>
        </WidgetItem>
      </div>

    </div>
    
    </>
  )
}

export default CartPage 
