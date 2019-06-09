import { Icon } from 'antd'
import React from 'react'

export const columns: any = [
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
    render: () => <Icon type='eye' style={{ cursor: 'pointer' }} />,
  },
]
