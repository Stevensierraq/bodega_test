import { Table } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { IOrder } from '../../interfaces/order'
import { Columns } from './ui/tableColumns'

import './ui/style.scss'

function TableOrders({ history }: any) {
  const orders = useSelector((state: { werehouseOrders: IOrder[] }) => state.werehouseOrders)
  const dispatch = useDispatch()

  const handleDetail = (id: string) => {
    dispatch({
      type: '@@ORDER/SET_ORDER',
      payload: { id },
    })
    history.push(`/detail/${id}`)
  }

  const columns = Columns(handleDetail)

  return (
    <div className='table-order-container'>
      <Table
        columns={columns}
        dataSource={orders}
        rowKey={(record: IOrder) => record._id}
      />
    </div>
  )
}

export default withRouter(TableOrders)
