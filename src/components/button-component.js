
import { LitElement, html, css } from 'lit';

export class ButtonComponent extends LitElement {
 
  static get styles() {
    return css`
      .button{
        color: ivory;
        width:80px;
        height:60px;
        background: green;
        font-size:20px;
        border-radius: 5px;
        padding: 5px;
      }

      .count{
        margin-top:0px;
        margin-left:30px;
      }

      .text{
        margin-top:-10px;
        margin-left:10px;
      }
    `;
  }
  
  static get properties(){
    return{
      answerSubmitted: {type:Number}
    }
  }

  constructor(){
    super();

    this.answerSubmitted = 8;
  }

  render() {
    return html`
      <div class = "button">
        <p class="count"> ${this.answerSubmitted} </p>
        <p class="text"> answers </p>
      </div>
    `;
  }
}

customElements.define('button-component', ButtonComponent);
