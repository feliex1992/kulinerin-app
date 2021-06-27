import { LitElement, html } from 'lit-element';

class DetailReviewItem extends LitElement {
  constructor() {
    super();
    this._name = this.getAttribute('name') || '-';
    this._review = this.getAttribute('review') || '-';
    this._date = this.getAttribute('date') || '-';
    this.render();
  }

  setAttributeReview(name, review, date) {
    this._name = name;
    this._review = review;
    this._date = date;
    this.render();
  }

  render() {
    const name = this._name;
    const review = this._review;
    const date = this._date;

    return html`
      <div class="list-item__wrapper">
        <h3 class="reviewer-name">${name}</h3>
        <div class="review-wrapper">
          <q>${review}</q>
        </div>
        <p class="review-date"><i>${date}</i></p>
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('detail-review-item', DetailReviewItem);
