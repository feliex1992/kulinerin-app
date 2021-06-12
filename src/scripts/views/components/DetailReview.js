class DetailReview extends HTMLElement {
  connectedCallback() {
    this._customerReviews = this.getAttribute('customerReviews') || '[{ "name": "-", "description": "-", "date": "-" }]';
    this._idRestaurant = this.getAttribute('idRestaurant') || '-';
    this.render();
  }

  setCustomerReviews(customerReviews) {
    const lastReview = JSON.parse(customerReviews).reverse()[0];

    const newElementReviewItem = document.createElement('detail-review-item');
    newElementReviewItem.setAttributeReview(lastReview.name, lastReview.review, lastReview.date);

    const elementDetailReview = document.querySelector('.detail-review__wrapper');
    const elementBefore = document.querySelector('detail-review-item');
    elementDetailReview.insertBefore(newElementReviewItem, elementBefore);
  }

  render() {
    const customerReviews = JSON.parse(this._customerReviews).reverse();
    const idRestaurant = this._idRestaurant;

    let elementCustomerReviews = '';
    customerReviews.forEach((customerReview) => elementCustomerReviews += `
      <detail-review-item 
        name="${customerReview.name}"
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
