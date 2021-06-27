import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { ERROR_CONNECTION, SKELETON_DETAIL_RESTAURANT } from '../../../templates/theme';

const DetailRestaurant = {
  async render() {
    return `
      <section id="content"></section>
    `;
  },

  async afterRender() {
    const contentElement = document.querySelector('#content');

    const url = UrlParser.parseActiveUrlWithoutCombiner();

    contentElement.innerHTML = SKELETON_DETAIL_RESTAURANT;

    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);

    if (restaurant.error) {
      contentElement.innerHTML = ERROR_CONNECTION;
    }

    const {
      id,
      name,
      pictureId,
      city,
      address,
      rating,
      categories,
      description,
      menus,
      customerReviews,
    } = restaurant;

    const listCategories = categories.map((categorie) => ` ${categorie.name}`).sort().toString();
    const strRestaurant = JSON.stringify(restaurant);
    const strMenus = JSON.stringify(menus);
    const strCustomerReviews = JSON.stringify(customerReviews);

    contentElement.innerHTML = `
      <div class="container title-detail__wrapper">
        <h1 class="title__content title-detail">${name}</h1>
      </div>

      <detail-item 
        pictureId="${pictureId}" 
        name="${name}"
        city="${city}"
        address="${address}"
        rating="${rating}"
        categories="${listCategories}"
      ></detail-item>

      <detail-description description="${description}"></detail-description>

      <detail-menu menus='${strMenus}'></detail-menu>

      <detail-review customerReviews='${strCustomerReviews}' idRestaurant="${id}"></detail-review>

      <like-button idRestaurant="${id}" restaurant='${strRestaurant}'></like-button>
    `;
  },
};

export default DetailRestaurant;
