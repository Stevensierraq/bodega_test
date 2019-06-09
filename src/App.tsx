import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import MainLayout from './components/commons/mainLayout'
import Menu from './components/commons/menu'
import store from './store'

import 'antd/dist/antd.css'

import Dashboard from './components/layout/dashboard'
import Werehouse from './components/layout/werehouse'

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 200, beforeChildren: 300 },
  exit: { opacity: 0 },
})

import './App.css'

export default function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <Menu />
        <Route
          render={({ location }: any) => (
            <PoseGroup>
              <RouteContainer key={location.key}>
                <Switch>
                  <Route exact path='/'>
                    <Dashboard />
                  </Route>
                  <Route path='/werehouse'>
                    <Werehouse />
                  </Route>
                </Switch>
              </RouteContainer>
            </PoseGroup>
          )}
        />
      </MainLayout>
    </Provider>
  )
}
