import { Icon, Menu } from 'antd'
import React from 'react'

import logo from '../../assets/images/logo.png'
import './styles.scss'

const { SubMenu } = Menu

export default function MenuBar() {
  return (
    <div className='custom-menu'>
      <img className='logo-menu' src={logo} alt='logo'/>
      <Menu
        mode='inline'
        theme='dark'
      >
        <Menu.Item key='dashboard'>Dashboard</Menu.Item>
        <Menu.Item key='werehouse'>Bodega</Menu.Item>
      </Menu>
    </div>
  )
}
