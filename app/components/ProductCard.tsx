import React from 'react'
import AddToCartButton from './AddToCartButton'
import Style from "./ProductCard.module.css"


const ProductCard = () => {
  return (
    <div className={Style.card}>
        <AddToCartButton />
    </div>
  )
}

export default ProductCard