import {Component, h, State} from '@stencil/core';
import UserService from '../../../services/userService';
import {User} from '../../../services/types';

@Component({
  tag: 'wtr-users',
  styleUrl: 'wtr-users.css',
  shadow: true
})
export class Users {

  @State() users: User[];
  @State() attemptedDeletedUser: User;

  private user: User = JSON.parse(localStorage.getItem('user'));
  private userService: UserService;

  async componentWillLoad() {
    this.userService = new UserService();
    this.users = [];
    this.attemptedDeletedUser = {username: '', password: ''};
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

  async deleteUser(user: User): Promise<void> {
    if (await this.userService.deleteUser(user.id)) {
      this.users = await this.userService.listUsers();
    } else {
      this.attemptedDeletedUser = user;
    }
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
                    <img src='assets/icon/trash-alt.svg' alt='' onClick={() => this.deleteUser(user)}/>
                  </div>
                )}
              </div>
            )}
          </div>
        </wtr-container>
        {this.attemptedDeletedUser.username && (
          <div class='popup'>
            <div class='popup-content'>
              <wtr-typography variant='h1'>
                Sorry
              </wtr-typography>
              <wtr-typography>
                Der Benutzer {this.attemptedDeletedUser.username} kann nicht gelöscht werden, da er Waiter ist und
                bereits Bestellungen erfasst hat.
              </wtr-typography>
              <wtr-button variant='contained' color='primary'
                          onClick={() => this.attemptedDeletedUser = {username: '', password: ''}}>
                Schliessen
              </wtr-button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
