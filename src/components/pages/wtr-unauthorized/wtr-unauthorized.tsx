import {Component, h} from '@stencil/core';

@Component({
  tag: 'wtr-unauthorized',
  styleUrl: 'wtr-unauthorized.css',
  shadow: true
})
export class Unauthorized {

  render() {
    return (
      <div class='container'>
        <wtr-header nav={false}/>
        <wtr-container>
          <wtr-typography variant='h1'>Sorry</wtr-typography>
          <wtr-typography>Du bist nicht berechtigt, auf diese App zuzugreifen.</wtr-typography>
          <div class='spacer'/>
          <stencil-route-link url='/login'>
            <wtr-button variant='contained' color='primary'>Zurück zum Login</wtr-button>
          </stencil-route-link>
        </wtr-container>
      </div>
    );
  }
}
