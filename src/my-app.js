
import { LitElement, html, css } from 'lit';

import './components/test-component';


export class MyApp extends LitElement {
 
  static get styles() {
    return css`
      main{
        padding:20px;
        border:1px solid black;
        width:1000px;
        margin:auto;
        background:white;
      }
    `; 
  }
  render() {
    return html`<main><test-component></test-component></main>`;
  }
}

customElements.define('my-app', MyApp);
