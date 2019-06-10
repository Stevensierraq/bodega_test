import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { IOrder, IProduct } from '../../interfaces/order'
import BasicInfo from './ui/basicInfo'
import ProductInfo from './ui/productInfo'

function OrderDetail({ history }: any) {
  const order = useSelector((state: { order: IOrder }) => state.order)
  const { products } = order

  if (!order._id) {
    history.push('/werehouse')
    return 0
  }

  return (
    <div className='detail-container'>
      <h1>{`Detalles orden ${order._id}`}</h1>
      <BasicInfo
        data={order}
      />
      <div className='products'>Productos</div>
      {
        products && products.map((product: IProduct) => (
          <ProductInfo
            key={product._id}
            product={product}
          />
        ))
      }
    </div>
  )
}

export default withRouter(OrderDetail)
