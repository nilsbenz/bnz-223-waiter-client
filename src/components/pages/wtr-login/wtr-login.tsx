import {Component, Event, EventEmitter, h, Listen, Prop, State} from '@stencil/core';
import {RouterHistory} from '@stencil/router';
import AuthService from '../../../services/authService';

@Component({
  tag: 'wtr-login',
  styleUrl: 'wtr-login.css',
  shadow: true
})
export class Login {

  @Prop() history: RouterHistory;

  @State() alert: boolean;

  @Event() loggedIn: EventEmitter;

  private authService: AuthService;
  private user: {
    username: string,
    password: string,
  };

  componentWillLoad() {
    this.authService = new AuthService();
    this.user = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <div class='container'>
        <wtr-header nav={false}/>
        <wtr-container class='main'>
          <div class='flex'>
            <wtr-typography variant='h1' class='margin-right-2'>Login</wtr-typography>
            <stencil-route-link url='/register'>
              <wtr-button>Zum ersten Mal hier?</wtr-button>
            </stencil-route-link>
          </div>
          <div class='form'>
            <form>
              <wtr-textfield name='username' label='Benutzername'/>
              <wtr-textfield name='password' label='Passwort' type='password'/>
              <wtr-button type='submit' variant='contained' color='primary' onClick={() => this.handleLogin()}>
                Einloggen
              </wtr-button>
            </form>
            {this.alert && <wtr-typography>Falscher Benutzername oder Passwort.</wtr-typography>}
          </div>
        </wtr-container>
      </div>
    );
  }

  @Listen('handleInput')
  handleInput(e: CustomEvent) {
    switch (e.detail.name) {
      case 'username':
        this.user.username = e.detail.value;
        break;
      case 'password':
        this.user.password = e.detail.value;
        break;
    }
  }

  @Listen('keydown', {capture: true})
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Enter' && this.user.username && this.user.password) {
      this.handleLogin();
    }
  }

  async handleLogin() {
    const res = await this.authService.login(this.user);
    if (res) {
      this.loggedIn.emit();
      const user = JSON.parse(localStorage.getItem('user'));
      if (user.admin) {
        this.history.push('/users');
      } else if (user.waiter) {
        this.history.push('/');
      } else {
        this.history.push('/unauthorized');
      }
    } else {
      this.alert = true;
    }
  }
}
