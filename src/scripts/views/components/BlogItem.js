import CONFIG from '../../globals/config';
import { SKELETON_BLOG_ITEM } from '../../../templates/theme';

class BlogItem extends HTMLElement {
  connectedCallback() {
    this._right = this.getAttribute('right') || 'false';
    this._statLoading = this.getAttribute('statLoading') || 'false';

    this._datePost = this.getAttribute('datePost') || '01 Jan 2021';
    this._titlePost = this.getAttribute('titlePost') || '-';
    this._imagePost = this.getAttribute('imagePost') || '-';
    this._descriptionPost = this.getAttribute('descriptionPost') || '-';
    this.render();
  }

  render() {
    const rightItem = (this._right === 'true' ? '-right' : '');
    this.innerHTML = (this._statLoading === 'true'
      ? SKELETON_BLOG_ITEM(rightItem)
      : `
        <div tabindex="0" class="posts-blog__item">
          <div class="blog-image-wrapper">
            <img class="blog-image${rightItem}" src="${CONFIG.BASE_IMAGE_URL_MEDIUM}${this._imagePost}" alt="Menu Unik Untuk Keluarga">
          </div>
          <div class="blog-content">
            <div class="blog-content__text${rightItem} card">
              <p class="blog-content__post-date">${this._datePost}</p>
              <h3 class="blog-content__post-title">${this._titlePost}</h3>
              <p class="blog-text__paragraf">${this._descriptionPost}</p>
            </div>
          </div>
        </div>
      `
    );
  }
}

customElements.define('blog-item', BlogItem);
