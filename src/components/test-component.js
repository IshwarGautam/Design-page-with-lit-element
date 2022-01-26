

import { LitElement, html, css } from 'lit';

import '../components/button-component.js';
import '../components/userdetail-component.js';
import '../components/viewer-component.js';
import '../components/body-component.js';
import '../components/footerbtn-component.js';

export class TestComponent extends LitElement {
  static get styles() {
    return css`
      :host{
        font-family: calibri;
      }
      table{
        width:800px;
      }
    `;
  }


  render() {
    return html`
      <table>
        <tr>
          <td><button-component></button-component></td>
          <td><userdetail-component></userdetail-component></td>
          <td><viewer-component></viewer-component></td>
        </tr>
        <tr>
          <td colspan="3"><body-component></body-component></td>
        </tr>
        <tr>
          <td colspan="3"><hr></td>
        </tr>
        <tr>
          <td colspan="3"><footerbtn-component></footerbtn-component></td>
        </tr>
      </table>
    `;
  }

}

customElements.define('test-component', TestComponent);
