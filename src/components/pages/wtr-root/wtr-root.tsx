import {Component, h} from '@stencil/core';

@Component({
  tag: 'wtr-root',
  styleUrl: 'wtr-root.css',
  shadow: true
})
export class Root {

  render() {
    return (
      <div>
        <wtr-header/>

        <main>
          <wtr-container>
            <wtr-typography>Hello World</wtr-typography>
            <wtr-button variant='contained'>I'm a Button!</wtr-button>
            <wtr-textfield label='Testinput' value='' name='test' />
          </wtr-container>
        </main>
      </div>
    );
  }
}
