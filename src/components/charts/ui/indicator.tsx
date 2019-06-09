import { Icon } from 'antd'
import React, { memo, useEffect, useState } from 'react'

import { IChartData, IChartProps, IIndicator } from '../../../interfaces/chart'

import COLORS from './colors'

function Indicator({ data, subtitle }: IChartProps) {
  const [indicators, setIndicators] = useState<IIndicator[]>([])

  useEffect(() => {

    const parseData: IIndicator[] = [...indicators]
    data.map((item: IChartData, index: number) => {

      const duplicateData: IIndicator[] = parseData.filter(
        (indicator: IIndicator) => indicator.name === item.name)

      if (!duplicateData.length) {
        parseData.push({
          name: item.name,
          value: item.value,
          color: COLORS[index],
        })
      }

    })
    setIndicators(parseData)
  }, [data.length])

  return (
    <div style={{marginLeft: 5}}>
      <h5>{subtitle}</h5>
      {
        indicators.map((item: IIndicator) => (
          <p key={item.name} style={{ color: item.color }}>
            <Icon type='caret-right' />
            {item.name}
          </p>
        ))
      }
    </div>
  )
}

export default memo(Indicator)
