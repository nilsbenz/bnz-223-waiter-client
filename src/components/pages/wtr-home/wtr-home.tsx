import {Component, h} from '@stencil/core';

@Component({
  tag: 'wtr-home',
  styleUrl: 'wtr-home.css',
  shadow: true
})
export class Home {

  render() {
    return (
      <div>
        <wtr-container>
          Home
        </wtr-container>
      </div>
    );
  }
}
