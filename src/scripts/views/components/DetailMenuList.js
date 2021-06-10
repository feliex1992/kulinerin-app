import { LitElement, html, css } from 'lit-element';

class DetailMenuList extends LitElement {
  constructor() {
    super();
    this._menu = this.getAttribute('menu') || '-';
    this.render();
  }

  static get styles() {
    return css`
      .card {
        border-style: solid;
        border-width: thin;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.05);
      }

      .detail-menu__list {
        padding: 10px;
        width: 90%;
        margin: 5px;
      }

      .detail-menu__list li {
        margin-left: 20px;
      }
    `;
  }

  render() {
    const menu = this._menu;

    return html`
      <div class="detail-menu__list card"><li>${menu}</li></div>
    `;
  }
}

customElements.define('detail-menu-list', DetailMenuList);
