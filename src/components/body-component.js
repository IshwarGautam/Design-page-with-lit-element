
import { LitElement, html, css } from 'lit';

export class BodyComponent extends LitElement {
 
  static get styles() {
    return css`
      .full-body{
        display:flex;
      }

      .flag{
        margin-right:40px;
        margin-left:20px;
        margin-top:40px;
      }
    `;
  }

  render() {
    return html`
      <div class = "full-body">

        <div class = 'flag'>
          <img src="../images/flag.png" alt="Flag image">
        </div>

        <div class = "body-content">
          <h2>How do we add new containers to project?</h2>
          <p> 
            Sunt tempor laborum nulla minim irure incididunt reprehenderit velit nulla elit eu pariatur fugiat. 
            Eu elit occaecat qui do. Qui non in id ex laborum laborum sunt id do nulla in. Non enim tempor commodo adaute nulla laborum.
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('body-component', BodyComponent);
