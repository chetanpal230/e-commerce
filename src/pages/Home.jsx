import React, {useContext} from 'react'
import { ProductContext } from '../contexts/ProductContext'
import Hero from '../components/Hero'
import Product from "../components/Product"

const Home = () => {
  //get product from product context
  const { products } = useContext(ProductContext)
  // console.log(products)

  // get only men and women category
  const filteredProducts = products.filter((item) => {
    return(
      item.category === "men's clothing" || item.category === "women's clothing"
    )
  })

  // console.log(filteredProducts)

  return(
      <div>
        <Hero />
        <section className='py-16'>
          <div className="mx-20">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
            mx-auto max-w-sm md:max-w-none md:mx-0'>
              {filteredProducts.map((product) => {
                return(
                  <Product product={product} key={product.id}/>
                )
              })}
            </div>
          </div>
        </section>
      </div>
  )
}

export default Home
