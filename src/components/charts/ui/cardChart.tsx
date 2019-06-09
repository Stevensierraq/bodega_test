import { Spin } from 'antd'
import React, { memo } from 'react'

import { ICardChartProps } from '../../../interfaces/chart'
import Chart from './chart'
import Indicator from './indicator'

function CardChart({ title, data, subtitle }: ICardChartProps) {

  return (
    <div className='chart-card'>
      <h3>{title}</h3>
      {
        data.length
          ? (
            <div className='chart-display'>
              <Chart
                data={data}
              />
              <Indicator
                data={data}
                subtitle={subtitle}
              />
            </div>
          )
          : (
            <div className='chart-loader'>
              <Spin size='small' />
              <Spin />
              <Spin size='large' />
            </div>
          )
      }
    </div>
  )
}

export default memo(CardChart)
