import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import MainLayout from './components/commons/mainLayout'
import Menu from './components/commons/menu'
import store from './store'

import 'antd/dist/antd.css'

import Dashboard from './components/layout/dashboard'

import './App.css'

export default function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <Menu />
        <Switch>
          <Route path='/'>
            <Dashboard />
          </Route>
        </Switch>
      </MainLayout>
    </Provider>
  )
}
