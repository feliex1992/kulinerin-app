import RestaurantDbSource from '../../data/restaurantdb-source';

class ListBlog extends HTMLElement {
  connectedCallback() {
    this._statLoading = true;
    this._blogContent = [];
    this.render();
    this._getDataRestaurant();
  }

  async _getDataRestaurant() {
    this._blogContent = await RestaurantDbSource.getListRestaurant();
    this._statLoading = false;
    this.render();
  }

  render() {
    const statLoading = this._statLoading;
    const blogContent = this._blogContent;

    let blogItem = '';

    if (statLoading) {
      for (let x = 0; x < 3; x++) {
        const rightItem = (((x + 1) % 2) === 0 ? 'right="true"' : '');
        blogItem += `<blog-item statLoading="${statLoading}" ${rightItem}></blog-item>`;
      }
    } else {
      for (let x = 0; x < 3; x++) {
        if (blogContent[x]) {
          const rightItem = (((x + 1) % 2) === 0 ? 'right="true"' : '');
          blogItem += `
            <blog-item 
              ${rightItem}
              datePost="05 May 2021"
              titlePost="${blogContent[x].name}"
              imagePost="${blogContent[x].pictureId}"
              descriptionPost="${blogContent[x].description}"
            ></blog-item>`;
        }
      }
      if (blogContent.length === 0) blogItem = '<p>Maaf postingan belum tersedia untuk saat ini!</p>';
    }

    this.innerHTML = `
      <div class="latest-blog">
        <div class="container">
          <h2 tabindex="0" class="title__content">Postingan Terakhir</h2>

          ${blogItem}
        </div>
      </div>
    `;
  }
}

customElements.define('list-blog', ListBlog);
