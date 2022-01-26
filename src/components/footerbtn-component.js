
import { LitElement, html, css } from 'lit';

export class FooterbtnComponent extends LitElement {
 
  static get styles() {
    return css`
      ul{
        list-style-type:none;
      }

      button{
        background:#F0F8FF;
        padding:10px;
        border-radius:20px;
      }

      .footer{
        margin-left:70px;
      }
    `;
  }

  constructor(){
    super();

    this.content = ['ACS', 'Assays'];
  }

  render() {
    return html`
    <div class = "footer">
      <ul><li>
      ${this.content.map((i) =>
        html`<button>
            #<span class = "content"> ${i} </span>
          </button>
        `
      )}
      </li></ul>
    </div>
    `;
  }
}

customElements.define('footerbtn-component', FooterbtnComponent);
