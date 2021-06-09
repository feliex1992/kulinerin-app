import { LitElement, html, css } from 'lit-element';

class RatingItem extends LitElement {
  constructor() {
    super();
    this._rating = this.getAttribute('rating') || 0;
    this._name = this.getAttribute('name') || '-';
    this.render();
  }

  static get styles() {
    return css`
      .rating-wrapper {
        display: flex;
        align-items: center;
        min-width: 50%;
        min-height: 1.2rem;
      }
      
      .rating-wrapper .rating__star-wrapper {
        background-color: #f3f3f3;
        border-radius: 5px;
        width: fit-content;
        margin: 10px 0;
        margin-left: 5px;
      }

      .rating-wrapper .rating__star-wrapper .rating__stars {
        --percent: calc(var(--rating) / 5 * 100%);
        display: inline-block;
        font-size: 1.3rem;
        font-family: Times;
        line-height: 1;
      }
      
      .rating-wrapper .rating__star-wrapper .rating__stars::before {
        content: '★★★★★';
        background: linear-gradient(90deg, #fc0 var(--percent), #fff var(--percent));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      .rating-wrapper .rating__label-value {
        margin: auto 0 auto 10px;
        font-size: 1.3rem;
      }

      .rating-wrapper .rating__label-total {
        font-size: 1rem;
      }
    `;
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
}

customElements.define('rating-item', RatingItem);
