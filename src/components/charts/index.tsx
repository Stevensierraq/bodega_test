import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { IChartData } from '../../interfaces/chart'
import { IOrders } from '../../interfaces/order'
import { uniqByProp } from '../../utils/toolFunctions'
import CardChart from './ui/cardChart'

import './ui/style.scss'

export default function ChartList() {
  const orders = useSelector((state: IOrders) => state.orders)

  const [routeQuantity, setRouteQuantity] = useState<IChartData[]>([])
  const [slotQuantity, setSlotQuantity] = useState<IChartData[]>([])
  const [regionQuantity, setRegionQuantity] = useState<IChartData[]>([])

  useEffect(() => {

    const getByRoute = getQuantityByKey('routeId')
    const getBySlot = getQuantityByKey('slot')
    const getByRegion = getQuantityByKey('region_code')

    setRouteQuantity(getByRoute)
    setSlotQuantity(getBySlot)
    setRegionQuantity(getByRegion)

  }, [orders.length])

  const getQuantityByKey = (key: string) => {
    const getByRoute = uniqByProp(key, orders)
    const totalOrders: IChartData[] = []

    if (getByRoute.length) {
      getByRoute.map((order: any) => {
        const ordersByKey = orders.filter((item: any) => item[key] === order[key])
        totalOrders.push({
          name: order[key],
          value: ordersByKey.length,
        })
      })
    }
    return totalOrders
  }

  return (
    <div className='charts-container'>
      <CardChart
        data={routeQuantity}
        title='Listos por ruta'
        subtitle='Rutas'
      />
      <CardChart
        data={slotQuantity}
        title='Listos por slot'
        subtitle='Slots'
      />
      <CardChart
        data={regionQuantity}
        title='Listos por region'
        subtitle='Regiones'
      />
    </div>
  )
}
