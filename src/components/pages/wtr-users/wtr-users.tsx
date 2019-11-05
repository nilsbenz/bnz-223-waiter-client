import {Component, h, Prop} from '@stencil/core';
import UserService from '../../../services/userService';
import {User} from '../../../services/types';

@Component({
  tag: 'wtr-users',
  styleUrl: 'wtr-users.css',
  shadow: true
})
export class Users {

  @Prop() users: User[];

  private user: User = JSON.parse(localStorage.getItem('user'));
  private userService: UserService;

  async componentWillLoad() {
    this.userService = new UserService();
    this.users = [];
    this.users = await this.userService.listUsers();
  }

  async addAdmin(id: number): Promise<void> {
    await this.userService.addAdmin(id);
    this.users = await this.userService.listUsers();
  }

  async removeAdmin(id: number): Promise<void> {
    await this.userService.removeAdmin(id);
    this.users = await this.userService.listUsers();
  }

  async addWaiter(id: number): Promise<void> {
    await this.userService.addWaiter(id);
    this.users = await this.userService.listUsers();
  }

  async removeWaiter(id: number): Promise<void> {
    await this.userService.removeWaiter(id);
    this.users = await this.userService.listUsers();
  }

  render() {
    return (
      <div>
        <wtr-container>
          <wtr-typography variant='h1'>Benutzer</wtr-typography>
          <div class='user-list'>
            {this.users.map(user =>
              <div class='user-list-item'>
                {user.username}
                {user.id !== this.user.id && (
                  <div>
                    {user.admin
                      ? <wtr-button variant='contained' color='primary' onClick={() => this.removeAdmin(user.id)}>
                        Admin
                      </wtr-button>
                      : <wtr-button variant='outlined' color='default' onClick={() => this.addAdmin(user.id)}>
                        Admin
                      </wtr-button>
                    }
                    {user.waiter
                      ? <wtr-button variant='contained' color='primary' onClick={() => this.removeWaiter(user.id)}>
                        Waiter
                      </wtr-button>
                      : <wtr-button variant='outlined' color='default' onClick={() => this.addWaiter(user.id)}>
                        Waiter
                      </wtr-button>
                    }
                  </div>
                )}
              </div>
            )}
          </div>
        </wtr-container>
      </div>
    );
  }
}
