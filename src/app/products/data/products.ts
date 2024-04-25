export interface Product {
  id    : string;
  name  : string;
  price : number;
  rating: number;
  image : string;
}


export const products:Product[] = [
  {
    id: 'UUID-ABC-1',
    name: 'Teslo Hoodie',
    price: 15,
    rating: 5,
    image: '/image/products/0.jpg'
  },
  {
    id: 'UUID-ABC-2',
    name: 'Teslo Cap',
    price: 25,
    rating: 3,
    image: '/image/products/1.jpg',
  },
  {
    id: 'UUID-ABC-3',
    name: 'Let the sunshine',
    price: 36,
    rating: 2,
    image: '/image/products/2.jpg',
  },
  {
    id: 'UUID-ABC-4',
    name: 'Cybertruck Hoodie',
    price: 45,
    rating: 5,
    image: '/image/products/3.jpg',
  },
]