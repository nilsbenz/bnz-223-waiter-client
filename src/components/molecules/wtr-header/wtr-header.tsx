import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'wtr-header',
  styleUrl: 'wtr-header.css',
  shadow: true
})
export class Header {

  @Prop() nav: boolean = true;

  @Prop() darkMode: boolean;

  @Event() loggedOut: EventEmitter;
  @Event() toggleDarkMode: EventEmitter;

  render() {
    if (this.nav) {
      return (
        <header class="with-nav">
          <div class='title'>
            <img src='assets/icon/cocktail.svg' alt=''/>
            <h1>waiter</h1>
          </div>
          <nav>
            <div>
              <stencil-route-link url="/" activeClass="active" exact={true}>
                <button>Home</button>
              </stencil-route-link>
            </div>
            <button onClick={() => this.loggedOut.emit()}>Ausloggen</button>
          </nav>
        </header>
      );
    } else {
      return (
        <header class='no-nav'>
          <div class='flex'>
            <img src='assets/icon/cocktail.svg' alt=''/>
            <h1>notify</h1>
          </div>
        </header>
      )
    }
  }
}
