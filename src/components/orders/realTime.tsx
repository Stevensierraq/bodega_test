import { Skeleton } from 'antd'
import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import { useSelector } from 'react-redux'

import {IOrder, IOrders} from '../../interfaces/order'
import OrderItem from './ui/order'
import './ui/style.scss'

function OrderList() {
  const orders = useSelector((state: IOrders) => state.orders)

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
      <div className='head-title'>
        <h3>ORDENES REAL TIME</h3>
        <h3>#{orders.length}</h3>
      </div>
      {
        orders.length < 1 &&
        <Skeleton
          active
          paragraph={{ rows: 1 }}
        />
      }
      <PoseGroup key='list-items'>
        {
          orders.map((order: IOrder) => (
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
