import React from 'react'

import { IProps } from '../../interfaces/commons'
import './styles.scss'

export default function MainLayout(props: IProps) {
  return (
    <div className='main-layout'>
      {props.children}
    </div>
  )
}
