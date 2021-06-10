class DetailReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="detail-review">
        <div class="container">
          <h2 class="title__content review__title">Ulasan Pelanggan</h1>
          <div class="detail-review__wrapper">
            <detail-review-submite></detail-review-submite>
            <detail-review-list></detail-review-list>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('detail-review', DetailReview);
