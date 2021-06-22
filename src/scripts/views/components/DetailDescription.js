import { SKELETON_DETAIL_DESCRIPTION } from '../../../templates/theme';

class DetailDescription extends HTMLElement {
  connectedCallback() {
    this._statLoading = this.getAttribute('statLoading') || 'false';
    this._description = this.getAttribute('description') || '-';
    this.render();
  }

  render() {
    const description = this._description;
    const statLoading = this._statLoading;

    if (statLoading === 'true') {
      this.innerHTML = SKELETON_DETAIL_DESCRIPTION;
    } else {
      this.innerHTML = `
        <div class="detail-description">
          <div class="container">
            <h2 class="title__content description__title">Tentang Restaurant</h2>
            <div class="description__content">
              <p>${description}</p>
            </div>
          </div>
        </div>
      `;
    }
  }
}

customElements.define('detail-description', DetailDescription);
