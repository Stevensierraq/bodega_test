import { Typography } from 'antd'
import React from 'react'

import { IOrder } from '../../../interfaces/order'
import './style.scss'

interface IProps {
  order: IOrder
}

const { Paragraph } = Typography

export default function OrderItem({ order }: IProps) {
  const {
    slot,
    routeId,
    products,
    region_code,
    user: { name },
  } = order

  return (
    <div className='order-item'>
      <div><strong>Usuario:</strong>{` ${name}`}</div>
      <div><strong>Region:</strong>{` ${region_code}`}</div>
      <div><strong>Slot:</strong>{` ${slot}`}</div>
      <div><strong># Productos:</strong>{` ${products.length}`}</div>
      <div>
        <strong>Ruta:</strong>
        <Paragraph ellipsis={{expandable: true}}>${routeId}</Paragraph>
      </div>
    </div>
  )
}
