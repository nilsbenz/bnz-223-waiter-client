import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'wtr-button',
  styleUrl: 'wtr-button.css',
  shadow: true
})
export class Button {

  @Prop() variant: 'text' | 'outlined' | 'contained' | undefined = 'text';
  @Prop() color: 'default' | 'primary' | 'secondary' | undefined = 'default';
  @Prop() type: 'button' | 'submit' | undefined = 'button';

  render() {
    return (
      <button type={this.type} class={`${this.variant}-${this.color}`}>
        <slot/>
      </button>
    );
  }
}
