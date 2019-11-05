import {Component, h, Listen, State} from '@stencil/core';
import {Item} from '../../../services/types';
import ItemService from '../../../services/itemService';

@Component({
  tag: 'wtr-items',
  styleUrl: 'wtr-items.css',
  shadow: true
})
export class Items {

  @State() items: Item[];
  @State() alert: boolean;

  private item: Item = {
    description: '',
    price: null
  };
  private itemService: ItemService;

  async handleSubmit(): Promise<void> {
    if (this.item.description && this.item.price) {
      this.alert = false;
      await this.itemService.createItem(this.item);
      this.items = await this.itemService.listItems();
      this.item.description = '';
      this.item.price = null;
    } else {
      this.alert = true;
    }
  }

  async deleteItem(id: number): Promise<void> {
    await this.itemService.deleteItem(id);
    this.items = await this.itemService.listItems();
  }

  @Listen('handleInput')
  handleInput(e: CustomEvent) {
    switch (e.detail.name) {
      case 'description':
        this.item.description = e.detail.value;
        break;
      case 'price':
        this.item.price = e.detail.value;
        break;
    }
  }

  @Listen('keydown', {capture: true})
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Enter' && this.item.description && this.item.price) {
      this.handleSubmit();
    }
  }

  async componentWillLoad() {
    this.itemService = new ItemService();
    this.items = [];
    this.items = await this.itemService.listItems();
  }

  render() {
    return (
      <div>
        <wtr-container>
          <wtr-typography variant='h1'>Angebot</wtr-typography>
          <div class='create-item'>
            <div class='create-item-form'>
              <wtr-typography class='create-item-form-label' variant='h4'>Neuen Artikel erfassen</wtr-typography>
              <div class='create-item-form-input'>
                <wtr-textfield label='Beschreibung' value={this.item.description} name='description'/>
                <wtr-textfield type='number' label='Preis' value={String(this.item.price)} name='price'/>
              </div>
              <div class='create-item-form-submit'>
                {this.alert && <wtr-typography>Bitte das Formular vollständig ausfüllen</wtr-typography>}
                <wtr-button variant='contained' color='primary' onClick={() => this.handleSubmit()}>
                  Speichern
                </wtr-button>
              </div>
            </div>
          </div>
          <wtr-typography variant='h4'>Artikel</wtr-typography>
          <div class='item-list'>
            {this.items.map(item =>
              <div class='item-list-item'>
                <wtr-typography>{item.description}</wtr-typography>
                <wtr-typography class='item-list-item-price'>
                  Fr. {Number(Math.round(item.price * 100) / 100).toFixed(2)}
                </wtr-typography>
                <img src='assets/icon/trash-alt.svg' alt='' onClick={() => this.deleteItem(item.id)}/>
              </div>
            )}
          </div>
        </wtr-container>
      </div>
    );
  }
}
