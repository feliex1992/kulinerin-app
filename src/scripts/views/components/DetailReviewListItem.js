import { LitElement, html, css } from 'lit-element';

class DetailReviewListItem extends LitElement {
  constructor() {
    super();
    this._nama = this.getAttribute('nama') || '-';
    this._review = this.getAttribute('review') || '-';
    this.render();
  }

  static get styles() {
    return css`

    `;
  }

  render() {
    const nama = this._nama;
    const review = this._review;

    return html`
      <div class="list-item_wrapper">
        <h3>${nama}</h3>
        <p>${review}</p>
      </div>
    `;
  }
}

customElements.define('review-list-item', DetailReviewListItem);
