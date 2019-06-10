import { Icon } from 'antd'
import React from 'react'

export const Columns: any = (handleDetail: any) => [
  {
    title: 'Usuario',
    dataIndex: 'user.name',
  },
  {
    title: 'Region',
    dataIndex: 'region_code',
  },
  {
    title: 'Slot',
    dataIndex: 'slot',
  },
  {
    title: 'Productos',
    dataIndex: 'products',
    render: (products: any) => <span>{products.length}</span>,
  },
  {
    title: 'Ruta',
    dataIndex: 'routeId',
  },
  {
    title: 'Ver',
    dataIndex: '_id',
    render: (id: string) => (
      <Icon
        type='eye'
        style={{ cursor: 'pointer' }}
        onClick={() => handleDetail(id)}
      />
    ),
  },
]
