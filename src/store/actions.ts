import { IGetBy } from '../interfaces/commons'
import { IOrder } from '../interfaces/order'

export const addOrder = (order: IOrder) => ({
  type: '@@ORDERS/ADD_ORDER',
  payload: {
    order,
  },
})

export const getOrderBy: any = ({ key, value }: IGetBy) => ({
  type: '@@ORDERS/GET_ORDERS_BY',
  payload: {
    key,
    value,
  },
})
