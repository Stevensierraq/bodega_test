import React from 'react'
import { Provider } from 'react-redux'
import OrdersList from './orders-list'
import store from './store'

import 'antd/dist/antd.css'

import Dashboard from './components/layout/dashboard'

import './App.css'

export default function App() {
  return (
    <Provider store={store}>
      <Dashboard />
      <OrdersList />
    </Provider>
  )
}
