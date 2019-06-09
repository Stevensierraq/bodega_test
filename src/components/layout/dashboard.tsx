import React from 'react'

import ChartList from '../charts'
import OrderList from '../orders'

import '../styles/dashboard.scss'

export default function Dashboard() {
  return (
    <div className='dashboard-container'>
      <div>
        <h1>Dashboard</h1>
        <div className='chart-container'>
          <ChartList />
        </div>
      </div>
      <OrderList />
    </div>
  )
}
