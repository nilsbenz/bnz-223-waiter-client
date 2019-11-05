import {Component, h} from '@stencil/core';

@Component({
  tag: 'wtr-container',
  styleUrl: 'wtr-container.css',
  shadow: true
})
export class Container {

  render() {
    return (
      <div class="container">
        <div class="content">
          <slot/>
        </div>
      </div>
    );
  }
}
