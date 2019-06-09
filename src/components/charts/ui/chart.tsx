import React, { memo } from 'react'
import {
  Cell,
  Pie,
  PieChart,
} from 'recharts'

import COLORS from './colors'

import { IChartData } from '../../../interfaces/chart'

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

function Chart({ data }: { data: IChartData[] }) {

  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx={100}
        cy={100}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill='#8884d8'
        dataKey='value'
      >
        {
          data.map((_: any, index: number) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
    </PieChart>
  )
}

export default memo(Chart)
