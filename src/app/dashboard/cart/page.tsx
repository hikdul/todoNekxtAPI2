import { ProductCard } from "@/app/products"
import { Product, products } from "@/app/products/data/products"
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

    </div>
    
    </>
  )
}

export default CartPage 
