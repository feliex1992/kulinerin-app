class DetailDescription extends HTMLElement {
  connectedCallback() {
    this._description = this.getAttribute('description') || '-';
    this.render();
  }

  render() {
    const description = this._description;

    this.innerHTML = `
      <div class="detail-description">
        <div class="container">
          <h2 class="title__content description__title">Tentang Restaurant</h1>
          <div class="description__content">
            <p>${description}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('detail-description', DetailDescription);
