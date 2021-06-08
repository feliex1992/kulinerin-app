import RestaurantDbSource from '../../data/restaurantdb-source';

class ListRestaurant extends HTMLElement {
  connectedCallback() {
    this._statLoading = true;
    this._restaurants = [];
    this.render();
    this._getDataRestaurant();
  }

  async _getDataRestaurant() {
    this._restaurants = await RestaurantDbSource.getListRestaurant();
    this._statLoading = false;
    this.render();
  }

  render() {
    const statLoading = this._statLoading;
    const restaurants = this._restaurants;

    let restaurantItem = '';

    if (statLoading) {
      for (let x = 0; x < 5; x++) {
        restaurantItem += `
          <restaurant-item
            statLoading="true"
            tabindex="0"
            id="${x}"
            name="name"
            description="description"
            pictureId="pictureId"
            city="city"
            rating="rating"
          ></restaurant-item>
        `;
      }
    } else {
      restaurants.forEach((restaurant) => {
        const {
          id,
          name,
          description,
          pictureId,
          city,
          rating,
        } = restaurant;

        restaurantItem += `
          <restaurant-item
            tabindex="0"
            statLoading="false"
            id="${id}"
            name="${name}"
            description="${description}"
            pictureId="${pictureId}"
            city="${city}"
            rating=${rating}
          ></restaurant-item>
        `;
      });
    }

    this.innerHTML = `
      <div class="list-restaurant">
        <h2 tabindex="0" class="list-restaurant__title title__content">Daftar Restoran</h2>
        <div class="list-restaurant__content">
          ${restaurantItem}
        </div>
      </div>
    `;
  }
}

customElements.define('list-restaurant', ListRestaurant);
