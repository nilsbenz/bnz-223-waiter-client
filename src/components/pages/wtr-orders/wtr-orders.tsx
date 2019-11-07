import {Component, h, Prop, State} from '@stencil/core';
import OrderService from '../../../services/orderService';
import {OrderResponse} from '../../../services/types';
import {RouterHistory} from '@stencil/router';

@Component({
  tag: 'wtr-orders',
  styleUrl: 'wtr-orders.css',
  shadow: true
})
export class Orders {

  @Prop() history: RouterHistory;

  @State() orders: OrderResponse[] = [];

  private orderService: OrderService;

  async componentWillLoad() {
    this.orderService = new OrderService();
    this.orders = await this.orderService.listOrders();
  }

  render() {
    return (
      <div>
        <wtr-container>
          <wtr-typography variant='h1'>Bestellungen</wtr-typography>
          <div class='orders-list'>
            {this.orders.map(order =>
              <div
                class={'orders-list-item' + (this.history.location.query.order === String(order.id) ? ' highlighted' : '')}>
                <div class='orders-list-item-heading'>
                  <wtr-typography variant='h5'>Tisch: {order.table.description}</wtr-typography>
                  <wtr-typography variant='h5' class='justify-end'>
                    Total: {Number(Math.round(order.price * 100) / 100).toFixed(2)} Fr.
                  </wtr-typography>
                </div>
                <div>
                  {order.orderItems.map(orderItem =>
                    <div class='orders-list-item-orderitem'>
                      <wtr-typography>{orderItem.amount}x {orderItem.item.description}</wtr-typography>
                      <wtr-typography class='justify-end'>
                        {Number(Math.round(orderItem.item.price * orderItem.amount * 100) / 100).toFixed(2)} Fr.
                      </wtr-typography>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </wtr-container>
      </div>
    );
  }
}
