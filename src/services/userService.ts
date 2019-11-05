import {fetchWithToken} from '../util/fetch';
import {User} from './types';

class UserService {

  async listUsers(): Promise<User[]> {
    const res = await fetchWithToken('/api/users');
    return await res.json();
  }

  async addAdmin(id: number): Promise<void> {
    await fetchWithToken(`/api/users/admins/${id}`, {
      method: 'POST',
      headers: {}
    });
  }

  async removeAdmin(id: number): Promise<void> {
    await fetchWithToken(`/api/users/admins/${id}`, {
      method: 'DELETE',
      headers: {}
    });
  }

  async addWaiter(id: number): Promise<void> {
    await fetchWithToken(`/api/users/waiters/${id}`, {
      method: 'POST',
      headers: {}
    });
  }

  async removeWaiter(id: number): Promise<void> {
    await fetchWithToken(`/api/users/waiters/${id}`, {
      method: 'DELETE',
      headers: {}
    });
  }
}

export default UserService;
