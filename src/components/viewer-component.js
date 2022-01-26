
import { LitElement, html, css } from 'lit';

export class ViewerComponent extends LitElement {
 
  static get styles() {
    return css`
      ul{
        list-style-type:none;
      }

      li{
        display:inline;
      }

      img{
        width:25px;
        height:25px;
        border-radius:50%;
        margin-left:-5px;
      }

      .vertical{
        margin-left:25px;
      }

      .viewer-wrapper{
        width:200px;
        margin-left:150px;
      }
    `;
  }
  

  constructor(){
    super();

    this.viewerImage = [
      '../images/viewer1.png',
      '../images/viewer2.png',
      '../images/viewer3.png',
      '../images/viewer4.png',
      '../images/3-dot.png',
    ]
  }

  render() {
    return html`
    <div class = "viewer-wrapper">
      <ul><li>
      ${this.viewerImage.map((image) =>
          html`<img class="viewer" src="${image}" alt="viewer image" />`
      )}
      </li>
      <li><span class = "vertical"><img src="../images/3-dot-vertical.png" alt="3-dot menu"/></span></li>
      </ul>
    </div>
    `;
  }
}

customElements.define('viewer-component', ViewerComponent);
