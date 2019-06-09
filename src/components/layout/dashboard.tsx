import React from 'react'

import Chart from '../charts'
import OrderList from '../orders'

import '../styles/dashboard.scss'

export default function Dashboard() {
  return (
    <div className='dashboard-container'>
      <div>
        <h1>Dashboard</h1>
        <div className='chart-container'>
          <Chart />
        </div>
      </div>
      <OrderList />
    </div>
  )
}
