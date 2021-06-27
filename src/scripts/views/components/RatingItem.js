import { LitElement, html } from 'lit-element';

class RatingItem extends LitElement {
  constructor() {
    super();
    this._rating = this.getAttribute('rating') || 0;
    this._name = this.getAttribute('name') || '-';
    this.render();
  }

  render() {
    const rating = this._rating;
    const name = this._name;

    return html`
      <div class="rating-wrapper">
        Rating :
        <div class="rating__star-wrapper">
          <div class="rating__stars" style="--rating: ${Number(rating)};" aria-label="Rating ${name} adalah ${rating} dari 5 bintang."></div>
        </div>
        <h2 class="rating__label-value">${rating}</h2><span class="rating__label-total">/5</span>
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('rating-item', RatingItem);
