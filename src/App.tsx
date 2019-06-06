import React from 'react'
import { Provider } from 'react-redux'
import OrdersList from './orders-list'
import store from './store'

import './App.css'

export default function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
            Con typescript
          <OrdersList />
        </header>
      </div>
    </Provider>
  )
}
