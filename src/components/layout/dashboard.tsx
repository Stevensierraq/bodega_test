import React from 'react'

import OrderList from '../orders'

import '../styles/dashboard.scss'

export default function Dashboard() {
  return (
    <div className='dashboard-container'>
      <h1>Dashboard</h1>
      <OrderList />
    </div>
  )
}
