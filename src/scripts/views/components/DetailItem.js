import CONFIG from '../../globals/config';

class DetailItem extends HTMLElement {
  connectedCallback() {
    this._pictureId = this.getAttribute('pictureId') || '-';
    this._name = this.getAttribute('name') || '-';
    this._city = this.getAttribute('city') || '-';
    this._address = this.getAttribute('address') || '-';
    this._rating = this.getAttribute('rating') || '-';
    this._categories = this.getAttribute('categories') || [];
    this.render();
  }

  render() {
    const pictureId = this._pictureId;
    const name = this._name;
    const city = this._city;
    const address = this._address;
    const rating = this._rating;
    const categories = this._categories;

    this.innerHTML = `
      <div tabindex="0" class="detail-item container">
        <div class="detail-item__image-wrapper">
          <img 
            class="detail-item__image"
            src="${CONFIG.BASE_IMAGE_URL_LARGE}${pictureId}"
            alt="${name}"
          >
        </div>
        
        <div class="detail-item__info-detail card">
          <div class="info-detail">
            <h3>${city}</h3>
            <p>${address}</p>
            <br>
            <p>Kategori Menu : ${categories}</p>
            <rating-item rating="${rating}" name="${name}"></rating-item>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('detail-item', DetailItem);
