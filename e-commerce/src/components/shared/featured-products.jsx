import React from 'react'
import './featured-product.styles.scss'

const Featuredproduct = (product) => {
  const { title, imageurl, price } = product

  return (
    <div className='featured-product'>
      <div className='featured-image'>
        <img src={imageurl} alt='product' />
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>$ {price}</p>
        <button className='button is-black nomad-btn'>Add TO CART</button>
      </div>

    </div>
  )
}

export default Featuredproduct
