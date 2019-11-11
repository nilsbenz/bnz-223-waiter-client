import {fetchWithToken} from '../util/fetch';
import {Table} from './types';

class TableService {

  async listTables(): Promise<Table[]> {
    const res = await fetchWithToken('/api/tables');
    return await res.json();
  }

  async createTable(table: Table): Promise<void> {
    await fetchWithToken('/api/tables', {
      method: 'POST',
      body: JSON.stringify(table),
      headers: {
        'content-type': 'application/json',
      }
    });
  }

  async deleteTable(id: number): Promise<boolean> {
    const res = await fetchWithToken(`/api/tables/${id}`, {
      method: 'DELETE',
      headers: {}
    });
    return res.status === 200;
  }
}

export default TableService;
