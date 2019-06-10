import React from 'react'

import { IProduct } from '../../../interfaces/order'

export default function ProductInfo({ product }: { product: IProduct }) {
  const {
    name,
    price,
    quantity,
    total,
  } = product

  return (
    <div className='product-info'>
      <span><strong>Nombre:</strong>{` ${name}`}</span>
      <span><strong>Cantidad:</strong>{` ${quantity}`}</span>
      <span><strong>Precio:</strong>{` $${price}`}</span>
      <span><strong>Total:</strong>{` ${total}`}</span>
    </div>
  )
}
