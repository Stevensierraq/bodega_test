import React from 'react'

import { IOrder } from '../../../interfaces/order'

export default function BasicInfo({ data }: { data: IOrder }) {
  const {
    slot,
    routeId,
    region_code,
    user: {name},
  } = data

  return (
    <div className='basic-info'>
      <span><strong>Usuario:</strong>{` ${name}`}</span>
      <span><strong>Region:</strong>{` ${region_code}`}</span>
      <span><strong>Slot:</strong>{` ${slot}`}</span>
      <span><strong>Ruta:</strong>{` ${routeId}`}</span>
    </div>
  )
}
