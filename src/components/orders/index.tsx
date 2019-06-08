import React from 'react'
import { connect } from 'react-redux'

function OrderList(props: any) {
  return (
    <div>
      {
        props.orders.map((order: any) => (
          <div key={order._id}>
            {order._id}
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  orders: state.orders,
})
export default connect(mapStateToProps)(OrderList)
