import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import { useSelector } from 'react-redux'

import OrderItem from './ui/order'
import './ui/style.scss'

function OrderList() {
  const orders = useSelector((state: any) => state.orders)

  const OrderDiv = posed.div({
    enter: {
      y: 15,
      opacity: 1,
      delay: 0,
      transition: {
        y: { type: 'spring', stiffness: 1000, damping: 15 },
        default: { duration: 400 },
      },
    },
  })

  return (
    <div className='list-order-container'>
      <PoseGroup key='list-items'>
        {
          orders.map((order: any) => (
            <OrderDiv key={order._id}>
              <OrderItem
                order={order}
              />
            </OrderDiv>
          ))
        }
      </PoseGroup>
    </div>
  )
}

export default OrderList
