import {OrderRequest, OrderResponse} from './types';
import {fetchWithToken} from '../util/fetch';

class OrderService {

  async createOrder(order: OrderRequest): Promise<OrderResponse> {
    const res = await fetchWithToken('/api/orders', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'content-type': 'application/json',
      }
    });
    return await res.json();
  }

  async listOrders(): Promise<OrderResponse[]> {
    const res = await fetchWithToken('/api/orders');
    return await res.json();
  }
}

export default OrderService;
