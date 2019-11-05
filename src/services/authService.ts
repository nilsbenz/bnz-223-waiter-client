import CryptoJS from "crypto-js";
import {fetchWithToken} from '../util/fetch';
import {User} from './types';

class AuthService {
  async register(user: User): Promise<boolean> {
    user.password = this.encryptPassword(user.password);
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json',
      }
    });
    return res.status === 200;
  }

  async login(user: User, alreadyEncrypted?: boolean): Promise<boolean> {
    if (!alreadyEncrypted) {
      user.password = this.encryptPassword(user.password);
    }
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json',
      }
    });
    if (res.status === 200) {
      localStorage.setItem('authorization', res.headers.get('Authorization'));
      localStorage.setItem('authorization-timestamp', new Date().toString());
      await this.getUser();
      return true;
    }
    return false;
  }

  async getUser(): Promise<void> {
    const res = await fetchWithToken('/api/users/myself');
    const user = await res.json();
    localStorage.setItem('user', JSON.stringify(user));
  }

  async isAuthenticated(): Promise<boolean> {
    if (!localStorage.getItem('authorization-timestamp') || !localStorage.getItem('authorization')) {
      return false;
    }
    const loggedInSince = new Date().getTime() - new Date(localStorage.getItem('authorization-timestamp')).getTime();
    const maxLoggedInTime = 1000 * 60 * 59 * 24;
    if (loggedInSince > maxLoggedInTime) {
      localStorage.removeItem('authorization');
      localStorage.removeItem('authorization-timestamp');
      return false;
    }
    const res = await fetchWithToken('/api/users/myself');
    return res.status === 200;
  }

  encryptPassword(password: string): string {
    return CryptoJS.MD5(password).toString();
  }
}

export default AuthService;
