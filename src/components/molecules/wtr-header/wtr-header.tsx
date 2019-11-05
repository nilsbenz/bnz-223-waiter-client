import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'wtr-header',
  styleUrl: 'wtr-header.css',
  shadow: true
})
export class Header {

  @Prop() nav: boolean = true;
  @Prop() loggedIn: boolean;

  @Event() loggedOut: EventEmitter;

  renderAdminNav() {
    return (
      <nav>
        <div>
          <stencil-route-link url="/users" activeClass="active" exact={true}>
            <button>Benutzer</button>
          </stencil-route-link>
          <stencil-route-link url="/items" activeClass="active" exact={true}>
            <button>Angebot</button>
          </stencil-route-link>
          <stencil-route-link url="/tables" activeClass="active" exact={true}>
            <button>Tische</button>
          </stencil-route-link>
        </div>
        <button onClick={() => this.loggedOut.emit()}>Ausloggen</button>
      </nav>
    );
  }

  renderWaiterNav() {
    return (
      <nav>
        <div>
          <stencil-route-link url="/" activeClass="active" exact={true}>
            <button>Home</button>
          </stencil-route-link>
        </div>
        <button onClick={() => this.loggedOut.emit()}>Ausloggen</button>
      </nav>
    );
  }

  render() {
    if (this.nav) {
      return (
        <header class="with-nav">
          <div class='title'>
            <img src='assets/icon/cocktail.svg' alt=''/>
            <h1>waiter</h1>
          </div>
          {JSON.parse(localStorage.getItem('user')).admin
            ? this.renderAdminNav()
            : this.renderWaiterNav()
          }
        </header>
      );
    } else {
      return (
        <header class='no-nav'>
          <div class='flex'>
            <img src='assets/icon/cocktail.svg' alt=''/>
            <h1>waiter</h1>
          </div>
        </header>
      )
    }
  }
}
