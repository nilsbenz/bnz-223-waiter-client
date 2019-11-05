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
