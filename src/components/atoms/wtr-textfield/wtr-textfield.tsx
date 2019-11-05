import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'wtr-textfield',
  styleUrl: 'wtr-textfield.css',
  shadow: true
})
export class TextField {

  @Prop() type: 'text' | 'password' | 'email' | undefined = 'text';
  @Prop() label: string;
  @Prop({reflect: true}) value: string;
  @Prop() name: string;

  @Event() handleInput: EventEmitter;

  componentWillLoad() {
    if (!this.name) {
      console.error('[nfy-textfield]: input name missing');
    }
  }

  render() {
    return (
      <label class="input">
        <input type={this.type}
               value={this.value}
               placeholder="&nbsp;"
               onInput={e => this.emitHandleInput(e)}/>
        <span class="label">{this.label}</span>
        <span class="border-hover"/>
        <span class="border"/>
      </label>
    );
  }

  emitHandleInput(e) {
    this.value = e.target.value;
    this.handleInput.emit({
      name: this.name,
      value: this.value,
    });
  }
}
