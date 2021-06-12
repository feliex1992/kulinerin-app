import { LitElement, html, css } from 'lit-element';

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

  static get styles() {
    return css`
      .list-item__wrapper {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        border-radius: 5px;
        padding: 10px;
        margin-top: 10px;
      }

      .list-item__wrapper:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
      }

      h3 {
        text-align: center;
        border-bottom: 1px solid #d6dae0;
      }

      .review-wrapper {
        border-radius: 5px;
        padding: 10px;
      }

      p {
        text-align: right;
      }
    `;
  }

  render() {
    const name = this._name;
    const review = this._review;
    const date = this._date;

    return html`
      <div class="list-item__wrapper">
        <h3>${name}</h3>
        <div class="review-wrapper">
          <q>${review}</q>
        </div>
        <p><i>${date}</i></p>
      </div>
    `;
  }
}

customElements.define('detail-review-item', DetailReviewItem);
