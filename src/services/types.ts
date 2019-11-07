export interface User {
  id?: number,
  username: string,
  password: string,
  admin?: boolean,
  waiter?: boolean
}

export interface Item {
  id?: number,
  description: string,
  price: number
}

export interface OrderItem {
  amount: number;
  item: Item;
}

export interface Table {
  id?: number,
  description: string
}

export interface OrderRequest {
  table: Table,
  orderItems: OrderItem[]
}

export interface OrderResponse {
  id: number,
  table: Table,
  user: User,
  orderItems: OrderItem[],
  price: number
}
