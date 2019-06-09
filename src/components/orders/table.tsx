import { Table } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'

import './ui/style.scss'
import {columns} from './ui/tableColumns'

function TableOrders() {
  const orders = useSelector((state: any) => state.werehouseOrders)

  return (
    <div className='table-order-container'>
      <Table
        columns={columns}
        dataSource={orders}
        rowKey={(record: any) => record._id}
      />
    </div>
  )
}

export default TableOrders
