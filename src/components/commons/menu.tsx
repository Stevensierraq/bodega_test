import { Icon, Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import './styles.scss'

const { SubMenu } = Menu

export default function MenuBar() {
  return (
    <div className='custom-menu'>
      <img className='logo-menu' src={logo} alt='logo' />
      <Menu
        mode='inline'
        theme='dark'
      >
        <Menu.Item key='dashboard'>
          <Link to='/'>
            <Icon type='pie-chart' />
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key='werehouse'>
          <Link to='/werehouse'>
            <Icon type='stock' />
            Bodega
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}
