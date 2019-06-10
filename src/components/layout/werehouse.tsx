import React from 'react'
import posed from 'react-pose'

import TableOrders from '../orders/table'

import '../styles/werehouse.scss'

const Container = posed.div({
  enter: { staggerChildren: 50 },
})

const Content = posed.div({
  enter: { x: 0.5, opacity: 1 },
  exit: { x: 50, opacity: 0 },
})

export default function Dashboard() {
  return (
    <Container className='werehouse-container'>
      <Content>
        <h1>Bodega</h1>
        <TableOrders />
      </Content>
    </Container>
  )
}
