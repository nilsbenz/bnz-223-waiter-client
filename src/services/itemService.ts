import {Item} from './types';
import {fetchWithToken} from '../util/fetch';

class ItemService {

  async listItems(): Promise<Item[]> {
    const res = await fetchWithToken('/api/items');
    return await res.json();
  }

  async createItem(item: Item): Promise<void> {
    await fetchWithToken('/api/items', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'content-type': 'application/json',
      }
    });
  }

  async deleteItem(id: number): Promise<boolean> {
    const res = await fetchWithToken(`/api/items/${id}`, {
      method: 'DELETE',
      headers: {}
    });
    return res.status === 200;
  }
}

export default ItemService;
