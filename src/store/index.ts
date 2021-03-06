import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'

import { IOrder } from '../interfaces/order'
import { addOrder } from './actions'
import { IAction, IReducer } from './interfaces'
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

function orderDetailReducer(state = {}, action: IAction): IOrder | {} {
  switch (action.type) {
    case '@@ORDER/SET_ORDER': {
      return data.filter((order: IOrder) => order._id === action.payload.id)[0]
    }
    default: return state
  }
}

function werehouseReducer(state = data, action: IAction): IOrder[] | {} {
  switch (action.type) {
    case '@@WEREHOUSE/GET_ORDERS': {
      return state
    }
    default: return state
  }
}

const store = createStore(
  combineReducers<IReducer | any>({
    orders: orderReducer,
    order: orderDetailReducer,
    werehouseOrders: werehouseReducer,
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
    store.dispatch(addOrder(data[index]))
    if (index < (data.length - 1)) {
      index += 1
      return startEvent(getRandom())
    }
    return
  }, delay)
}

startEvent(getRandom())

export default store
