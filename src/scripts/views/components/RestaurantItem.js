import CONFIG from '../../globals/config';
import { SKELETON_RESTAURANT_ITEM } from '../../../templates/theme';

class RestaurantItem extends HTMLElement {
  connectedCallback() {
    this._statLoading = this.getAttribute('statLoading') || 'true';

    this._id = this.getAttribute('id') || null;
    this._name = this.getAttribute('name') || null;
    this._description = this.getAttribute('description') || null;
    this._pictureId = this.getAttribute('pictureId') || null;
    this._city = this.getAttribute('city') || null;
    this._rating = this.getAttribute('rating') || null;

    this.render();
  }

  render() {
    this.innerHTML = (this._statLoading === 'true'
      ? SKELETON_RESTAURANT_ITEM
      : `
      <div class="restaurant-item card">
        <img class="restaurant-item__thumbnail"
          src="${CONFIG.BASE_IMAGE_URL_SMALL}${this._pictureId}"
          alt="${this._name}"
        >
        <div class="restaurant-item__content">
          <h3 class="restaurant-item__title"><a href="/#/detail/${this._id}">${this._name}</a></h3>

          <span class="restaurant-item__city">${this._city}</span>

          <rating-item rating="${this._rating}" name="${this._name}"></rating-item>
          
          <p class="restaurant-item__description">${this._description}</p>
        </div>
      </div>
    `);
  }
}

customElements.define('restaurant-item', RestaurantItem);
