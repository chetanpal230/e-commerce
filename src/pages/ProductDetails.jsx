import React, {useContext} from 'react'
import { useParams } from 'react-router'
import { CartContext } from '../contexts/CartContext'
import { ProductContext } from '../contexts/ProductContext'


const ProductDetails = () => {
  const {id} = useParams()
  const {products} = useContext(ProductContext)
  const {addToCart} = useContext(CartContext)

  const product = products.find((item) => {
    return item.id === parseInt(id)
  })

  if(!product){
    return (
      <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    )
  }

  const {title,price,image,description} = product

  return  <section className='pt-32 pb-12 lg:py-32 h-screen px-14 flex items-center lg:overflow-y-hidden sm:overflow-y-auto overflow-y-auto'>
    <div className=' mx-auto '>

      <div className='flex flex-col lg:flex-row items-center lg:mb-0'>
      <div className='flex flex-1 justify-center items-center mt-20 mb-4 lg:mb-0'>
        <img className='max-w-[200px] lg:max-w-sm' src={image} alt="" />
      </div>

      <div className='flex-1 text-center lg:text-left '>
        <h1 className='text-[26px] font-medium mb-2 sm:mb-1 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
        <div className='text-xl text-red-500 font-medium mb-2 sm:mb-1'>${price}</div>
        <p className='text-[16px] mb-8'>{description}</p>
        <button onClick={() => addToCart(product, product.id)} className='bg-primary py-4 px-8 text-white '>
          Add to cart
        </button>
      </div>
      </div>
     
    </div>
  </section>
}

export default ProductDetails
