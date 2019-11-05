import {Component, h} from '@stencil/core';

@Component({
  tag: 'wtr-users',
  styleUrl: 'wtr-users.css',
  shadow: true
})
export class Users {

  render() {
    return (
      <div>
        <wtr-container>
          Users
        </wtr-container>
      </div>
    );
  }
}
