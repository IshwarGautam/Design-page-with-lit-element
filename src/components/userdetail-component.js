import { LitElement, html, css } from 'lit';

export class UserdetailComponent extends LitElement {
 
  static get styles() {
    return css`
      .user-photo{
        margin-top: 10px;
      }
      .user-photo img{
        width:50px;
        height:50px;
      }

      .username{
        font-weight:bold;
        font-size:17px;
      }

      .posttime{
        color:gray;
        padding-right:10px;
      }

      .label{
        color: blueviolet;
        padding-left:10px;
      }

      .box-icon img{
        width:20px;
        height:20px;
        padding-right:10px;
      }

      .status{
        background:#fc2;
        padding:5px;
        border-radius:10px;
      }

      .external-wrapper{
        display:flex;
        width:500px;
        margin-left:20px;
      }

      .detail{
        padding-left: 12px;
      }

      .sub-detail{
        margin-top:-10px;
      }
    `;
  }
  
  static get properties(){
    return{
      username: {type: String},
      posttime: {type: String},
      label: {type: String},
      status: {type: String}
    }
  }

  constructor(){
    super();

    this.username = "Mikolaj Gonzalez";
    this.posttime = "November 9, 2020 at 6:35pm";
    this.label = "ACS-1";
    this.status = "In progress"

  }

  render() {
    return html`
      <div class = "external-wrapper">
        <div class = "user-photo">
          <img src="../images/user1.png" alt="user-image"/>
        </div>

        <div class = "detail">
          <p class="username">${this.username}</p>
          <div class = "sub-detail">
            <span class = "posttime">${this.posttime}</span>
            <span>|</span>
            <span class = "label">${this.label}</span>
            <span class = "box-icon"><img src = "../images/box-icon.png"></span>
            <span class = "status">${this.status}</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('userdetail-component', UserdetailComponent);
