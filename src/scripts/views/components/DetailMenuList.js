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
        background-color: #f2f2f2;
      }

      .detail-menu__list {
        padding: 10px;
        width: 100%;
      }
    `;
  }

  render() {
    const menu = this._menu;

    return html`
      <div class="detail-menu__list card">${menu}</div>
    `;
  }
}

customElements.define('detail-menu-list', DetailMenuList);
