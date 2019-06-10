import { IOrder, IOrders } from '../interfaces/order'

export interface IAction {
  type: string
  payload: {
    order: {},
    key: string,
    value: string | number,
    id: string,
  },
}

export interface IReducer {
  orders: IOrder[],
  order: IOrder,
  werehouseOrders: IOrder[],
}
