import {Component, h, Prop, State} from '@stencil/core';
import {Item, OrderItem, OrderRequest, OrderResponse, Table} from '../../../services/types';
import TableService from '../../../services/tableService';
import ItemService from '../../../services/itemService';
import OrderService from '../../../services/orderService';
import {RouterHistory} from '@stencil/router';

@Component({
  tag: 'wtr-home',
  styleUrl: 'wtr-home.css',
  shadow: true
})
export class Home {

  @Prop() history: RouterHistory;

  @State() selectedTable: Table = {description: ''};
  @State() orderItems: OrderItem[] = [];

  private tables: Table[] = [];
  private tableService: TableService;
  private itemService: ItemService;
  private orderService: OrderService;

  handleTableSelected(table: Table) {
    this.selectedTable = {...table};
  }

  handleItemAdded(itemId: number) {
    this.orderItems = this.orderItems.map(orderedItem => {
      if (orderedItem.item.id === itemId) {
        orderedItem.amount++;
      }
      return orderedItem;
    });
  }

  handleItemRemoved(itemId: number) {
    this.orderItems = this.orderItems.map(orderedItem => {
      if (orderedItem.item.id === itemId && orderedItem.amount > 0) {
        orderedItem.amount--;
      }
      return orderedItem;
    });
  }

  async handleSaveOrder() {
    const orderRequest: OrderRequest = {
      table: this.selectedTable,
      orderItems: this.orderItems.filter(orderItem => orderItem.amount > 0)
    };
    const orderResponse: OrderResponse = await this.orderService.createOrder(orderRequest);
    this.history.push(`/orders?order=${orderResponse.id}`);
  }

  async componentWillLoad() {
    this.tableService = new TableService();
    this.itemService = new ItemService();
    this.orderService = new OrderService();
    this.tables = await this.tableService.listTables();
    const items: Item[] = await this.itemService.listItems();
    this.orderItems = items.map(item => ({amount: 0, item}));
  }

  render() {
    return (
      <div>
        <wtr-container>
          <wtr-typography variant='h1'>Neue Bestellung</wtr-typography>
          <div class='table-selector selector'>
            <wtr-typography variant='h4'>Tisch wählen</wtr-typography>
            <div class='table-selector-list'>
              {this.tables.map(table =>
                <div class={'table-selector-list-item' + (table.id === this.selectedTable.id ? ' selected-table' : '')}
                     onClick={() => this.handleTableSelected(table)}>
                  <wtr-typography>{table.description}</wtr-typography>
                </div>
              )}
            </div>
          </div>
          {this.selectedTable.id && [
            <div class='item-selector selector'>
              <wtr-typography variant='h4'>Artikel wählen</wtr-typography>
              <div class='item-selector-list'>
                {this.orderItems.map(orderItem =>
                  <div class='item-selector-list-item'>
                    <wtr-typography>{orderItem.item.description}</wtr-typography>
                    <wtr-typography>
                      {Number(Math.round(orderItem.item.price * orderItem.amount * 100) / 100).toFixed(2)}
                    </wtr-typography>
                    <div class='counter'>
                      <img src='assets/icon/minus-square.svg' alt=''
                           onClick={() => this.handleItemRemoved(orderItem.item.id)}/>
                      <wtr-typography>{orderItem.amount}</wtr-typography>
                      <img src='assets/icon/plus-square.svg' alt=''
                           onClick={() => this.handleItemAdded(orderItem.item.id)}/>
                    </div>
                  </div>
                )}
              </div>
            </div>,
            <div class='align-end'>
              <wtr-button variant='contained' color='primary' onClick={() => this.handleSaveOrder()}>Speichern
              </wtr-button>
            </div>
          ]}
        </wtr-container>
      </div>
    );
  }
}
