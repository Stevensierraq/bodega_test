import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'

import { IOrder, IOrders } from '../interfaces/order'
import { IAction } from './interfaces'
import data from './orders.json'

function orderReducer(state = [], action: IAction): IOrder[] | {} {
  switch (action.type) {
    case '@@ORDERS/ADD_ORDER': {
      return [
        ...state,
        action.payload.order,
      ]
    }
    default: return state
  }
}
const store = createStore(
  combineReducers<IOrders | any>({
    orders: orderReducer,
  }),
  applyMiddleware(logger),
)

/* mock of realtime action */
let timerId: NodeJS.Timeout | null = null
let index: number = 0

function getRandom(min = 1, max = 10) {
  let result = Math.random()
  result = result * (max - min + 1) + min
  result = Math.floor(result)
  return result * 1000
}

function startEvent(delay: number) {
  if (timerId) {
    clearTimeout(timerId)
  }
  timerId = setTimeout(() => {
    store.dispatch({
      type: '@@ORDERS/ADD_ORDER',
      payload: {
        order: data[index],
      },
    })
    if (index < (data.length - 1)) {
      index += 1
      return startEvent(getRandom())
    }
    return
  }, delay)
}

startEvent(getRandom())

export default store
