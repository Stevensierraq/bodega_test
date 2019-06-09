export interface IOrder {
  _id: string
  user: {
    name: string,
  },
  region_code: string,
  routeId: string,
  slot: string,
  products: IProduct[]
}

export interface IProduct {
  _id: string
  name: string
  price: number
  quantity: number
  total: number
}

export interface IOrders {
  orders: IOrder[]
}
