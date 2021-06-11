class DetailReview extends HTMLElement {
  connectedCallback() {
    this._customerReviews = this.getAttribute('customerReviews') || '[{ "name": "-", "description": "-", "date": "-" }]';
    this._idRestaurant = this.getAttribute('idRestaurant') || '-';
    this.render();
  }

  setCustomerReviews(customerReviews) {
    this._customerReviews = customerReviews;
    this.render();
  }

  render() {
    const customerReviews = JSON.parse(this._customerReviews);
    const idRestaurant = this._idRestaurant;

    let elementCustomerReviews = '';
    customerReviews.forEach((customerReview) => elementCustomerReviews += `
      <detail-review-item 
        nama="${customerReview.name}"
        review="${customerReview.review}"
        date="${customerReview.date}"
      ></detail-review-item>
    `);

    this.innerHTML = `
      <div class="detail-review">
        <div class="container">
          <h2 class="title__content review__title">Ulasan Pelanggan</h1>
          <div class="detail-review__wrapper">
            <detail-review-submite idRestaurant="${idRestaurant}"></detail-review-submite>
            ${elementCustomerReviews}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('detail-review', DetailReview);
