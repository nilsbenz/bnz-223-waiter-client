import {Component, h, Listen, State} from '@stencil/core';
import {Table} from '../../../services/types';
import TableService from '../../../services/tableService';

@Component({
  tag: 'wtr-tables',
  styleUrl: 'wtr-tables.css',
  shadow: true
})
export class Tables {

  @State() tables: Table[];
  @State() alert: boolean;
  @State() attemptedDeletedTable: Table;

  private table: Table = {
    description: ''
  };
  private tableService: TableService;

  async handleSubmit(): Promise<void> {
    if (this.table.description) {
      this.alert = false;
      await this.tableService.createTable(this.table);
      this.tables = await this.tableService.listTables();
      this.table.description = '';
    } else {
      this.alert = true;
    }
  }

  async deleteTable(table: Table): Promise<void> {
    if (await this.tableService.deleteTable(table.id)) {
      this.tables = await this.tableService.listTables();
    } else {
      this.attemptedDeletedTable = table;
    }
  }

  @Listen('handleInput')
  handleInput(e: CustomEvent) {
    if (e.detail.name === 'description') {
      this.table.description = e.detail.value;
    }
  }

  @Listen('keydown', {capture: true})
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Enter' && this.table.description) {
      this.handleSubmit();
    }
  }

  async componentWillLoad() {
    this.tableService = new TableService();
    this.tables = [];
    this.attemptedDeletedTable = {description: ''}
    this.tables = await this.tableService.listTables();
  }

  render() {
    return (
      <div>
        <wtr-container>
          <wtr-typography variant='h1'>Tische</wtr-typography>
          <div class='create-table'>
            <div class='create-table-form'>
              <wtr-typography class='create-table-form-label' variant='h4'>
                Tisch hinzufügen
              </wtr-typography>
              <wtr-textfield class='create-table-form-input'
                             name='description'
                             value={this.table.description}
                             label='Beschreibung'/>
              <div class='create-table-form-submit'>
                <wtr-button class='create-table-form-submit-button' variant='contained'
                            color='primary' onClick={() => this.handleSubmit()}>
                  Speichern
                </wtr-button>
                {this.alert && <wtr-typography>Bitte das Formular vollständig ausfüllen.</wtr-typography>}
              </div>
            </div>
          </div>
          <wtr-typography variant='h4'>Tische</wtr-typography>
          <div class='table-list'>
            {this.tables.map(table =>
              <div class='table-list-item'>
                <wtr-typography>{table.description}</wtr-typography>
                <img src='assets/icon/trash-alt.svg' alt='' onClick={() => this.deleteTable(table)}/>
              </div>
            )}
          </div>
        </wtr-container>
        {this.attemptedDeletedTable.description && (
          <div class='popup'>
            <div class='popup-content'>
              <wtr-typography variant='h1'>
                Sorry
              </wtr-typography>
              <wtr-typography>
                Der Tisch {this.attemptedDeletedTable.description} kann nicht gelöscht werden, da zu diesem Tisch
                bereits Bestellungen erfasst wurden.
              </wtr-typography>
              <wtr-button variant='contained' color='primary'
                          onClick={() => this.attemptedDeletedTable = {description: ''}}>
                Schliessen
              </wtr-button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
