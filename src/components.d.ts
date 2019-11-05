/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  RouterHistory,
} from '@stencil/router';

export namespace Components {
  interface WtrButton {
    'color': 'default' | 'primary' | 'secondary' | undefined;
    'type': 'button' | 'submit' | undefined;
    'variant': 'text' | 'outlined' | 'contained' | undefined;
  }
  interface WtrContainer {}
  interface WtrHeader {
    'loggedIn': boolean;
    'nav': boolean;
  }
  interface WtrHome {}
  interface WtrItems {}
  interface WtrLogin {
    'history': RouterHistory;
  }
  interface WtrRegister {
    'history': RouterHistory;
  }
  interface WtrRoot {}
  interface WtrTables {}
  interface WtrTextfield {
    'label': string;
    'name': string;
    'type': 'text' | 'password' | 'email' | 'number' | undefined;
    'value': string;
  }
  interface WtrTypography {
    'variant': 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | undefined;
  }
  interface WtrUnauthorized {}
  interface WtrUsers {}
}

declare global {


  interface HTMLWtrButtonElement extends Components.WtrButton, HTMLStencilElement {}
  var HTMLWtrButtonElement: {
    prototype: HTMLWtrButtonElement;
    new (): HTMLWtrButtonElement;
  };

  interface HTMLWtrContainerElement extends Components.WtrContainer, HTMLStencilElement {}
  var HTMLWtrContainerElement: {
    prototype: HTMLWtrContainerElement;
    new (): HTMLWtrContainerElement;
  };

  interface HTMLWtrHeaderElement extends Components.WtrHeader, HTMLStencilElement {}
  var HTMLWtrHeaderElement: {
    prototype: HTMLWtrHeaderElement;
    new (): HTMLWtrHeaderElement;
  };

  interface HTMLWtrHomeElement extends Components.WtrHome, HTMLStencilElement {}
  var HTMLWtrHomeElement: {
    prototype: HTMLWtrHomeElement;
    new (): HTMLWtrHomeElement;
  };

  interface HTMLWtrItemsElement extends Components.WtrItems, HTMLStencilElement {}
  var HTMLWtrItemsElement: {
    prototype: HTMLWtrItemsElement;
    new (): HTMLWtrItemsElement;
  };

  interface HTMLWtrLoginElement extends Components.WtrLogin, HTMLStencilElement {}
  var HTMLWtrLoginElement: {
    prototype: HTMLWtrLoginElement;
    new (): HTMLWtrLoginElement;
  };

  interface HTMLWtrRegisterElement extends Components.WtrRegister, HTMLStencilElement {}
  var HTMLWtrRegisterElement: {
    prototype: HTMLWtrRegisterElement;
    new (): HTMLWtrRegisterElement;
  };

  interface HTMLWtrRootElement extends Components.WtrRoot, HTMLStencilElement {}
  var HTMLWtrRootElement: {
    prototype: HTMLWtrRootElement;
    new (): HTMLWtrRootElement;
  };

  interface HTMLWtrTablesElement extends Components.WtrTables, HTMLStencilElement {}
  var HTMLWtrTablesElement: {
    prototype: HTMLWtrTablesElement;
    new (): HTMLWtrTablesElement;
  };

  interface HTMLWtrTextfieldElement extends Components.WtrTextfield, HTMLStencilElement {}
  var HTMLWtrTextfieldElement: {
    prototype: HTMLWtrTextfieldElement;
    new (): HTMLWtrTextfieldElement;
  };

  interface HTMLWtrTypographyElement extends Components.WtrTypography, HTMLStencilElement {}
  var HTMLWtrTypographyElement: {
    prototype: HTMLWtrTypographyElement;
    new (): HTMLWtrTypographyElement;
  };

  interface HTMLWtrUnauthorizedElement extends Components.WtrUnauthorized, HTMLStencilElement {}
  var HTMLWtrUnauthorizedElement: {
    prototype: HTMLWtrUnauthorizedElement;
    new (): HTMLWtrUnauthorizedElement;
  };

  interface HTMLWtrUsersElement extends Components.WtrUsers, HTMLStencilElement {}
  var HTMLWtrUsersElement: {
    prototype: HTMLWtrUsersElement;
    new (): HTMLWtrUsersElement;
  };
  interface HTMLElementTagNameMap {
    'wtr-button': HTMLWtrButtonElement;
    'wtr-container': HTMLWtrContainerElement;
    'wtr-header': HTMLWtrHeaderElement;
    'wtr-home': HTMLWtrHomeElement;
    'wtr-items': HTMLWtrItemsElement;
    'wtr-login': HTMLWtrLoginElement;
    'wtr-register': HTMLWtrRegisterElement;
    'wtr-root': HTMLWtrRootElement;
    'wtr-tables': HTMLWtrTablesElement;
    'wtr-textfield': HTMLWtrTextfieldElement;
    'wtr-typography': HTMLWtrTypographyElement;
    'wtr-unauthorized': HTMLWtrUnauthorizedElement;
    'wtr-users': HTMLWtrUsersElement;
  }
}

declare namespace LocalJSX {
  interface WtrButton {
    'color'?: 'default' | 'primary' | 'secondary' | undefined;
    'type'?: 'button' | 'submit' | undefined;
    'variant'?: 'text' | 'outlined' | 'contained' | undefined;
  }
  interface WtrContainer {}
  interface WtrHeader {
    'loggedIn'?: boolean;
    'nav'?: boolean;
    'onLoggedOut'?: (event: CustomEvent<any>) => void;
  }
  interface WtrHome {}
  interface WtrItems {}
  interface WtrLogin {
    'history'?: RouterHistory;
    'onLoggedIn'?: (event: CustomEvent<any>) => void;
  }
  interface WtrRegister {
    'history'?: RouterHistory;
    'onLoggedIn'?: (event: CustomEvent<any>) => void;
  }
  interface WtrRoot {}
  interface WtrTables {}
  interface WtrTextfield {
    'label'?: string;
    'name'?: string;
    'onHandleInput'?: (event: CustomEvent<any>) => void;
    'type'?: 'text' | 'password' | 'email' | 'number' | undefined;
    'value'?: string;
  }
  interface WtrTypography {
    'variant'?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | undefined;
  }
  interface WtrUnauthorized {}
  interface WtrUsers {}

  interface IntrinsicElements {
    'wtr-button': WtrButton;
    'wtr-container': WtrContainer;
    'wtr-header': WtrHeader;
    'wtr-home': WtrHome;
    'wtr-items': WtrItems;
    'wtr-login': WtrLogin;
    'wtr-register': WtrRegister;
    'wtr-root': WtrRoot;
    'wtr-tables': WtrTables;
    'wtr-textfield': WtrTextfield;
    'wtr-typography': WtrTypography;
    'wtr-unauthorized': WtrUnauthorized;
    'wtr-users': WtrUsers;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'wtr-button': LocalJSX.WtrButton & JSXBase.HTMLAttributes<HTMLWtrButtonElement>;
      'wtr-container': LocalJSX.WtrContainer & JSXBase.HTMLAttributes<HTMLWtrContainerElement>;
      'wtr-header': LocalJSX.WtrHeader & JSXBase.HTMLAttributes<HTMLWtrHeaderElement>;
      'wtr-home': LocalJSX.WtrHome & JSXBase.HTMLAttributes<HTMLWtrHomeElement>;
      'wtr-items': LocalJSX.WtrItems & JSXBase.HTMLAttributes<HTMLWtrItemsElement>;
      'wtr-login': LocalJSX.WtrLogin & JSXBase.HTMLAttributes<HTMLWtrLoginElement>;
      'wtr-register': LocalJSX.WtrRegister & JSXBase.HTMLAttributes<HTMLWtrRegisterElement>;
      'wtr-root': LocalJSX.WtrRoot & JSXBase.HTMLAttributes<HTMLWtrRootElement>;
      'wtr-tables': LocalJSX.WtrTables & JSXBase.HTMLAttributes<HTMLWtrTablesElement>;
      'wtr-textfield': LocalJSX.WtrTextfield & JSXBase.HTMLAttributes<HTMLWtrTextfieldElement>;
      'wtr-typography': LocalJSX.WtrTypography & JSXBase.HTMLAttributes<HTMLWtrTypographyElement>;
      'wtr-unauthorized': LocalJSX.WtrUnauthorized & JSXBase.HTMLAttributes<HTMLWtrUnauthorizedElement>;
      'wtr-users': LocalJSX.WtrUsers & JSXBase.HTMLAttributes<HTMLWtrUsersElement>;
    }
  }
}


