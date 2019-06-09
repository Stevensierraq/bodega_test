import { IOrder } from '../interfaces/order'

export interface IAction {
  type: string
  payload: {
    order: {},
    key: string,
    value: string | number,
  },
}
