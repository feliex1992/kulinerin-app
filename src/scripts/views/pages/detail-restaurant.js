import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';

const DetailRestaurant = {
  async render() {
    return `
      <section id="content"></section>
    `;
  },

  async afterRender() {
    const contentElement = document.querySelector('#content');

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
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
    console.log(restaurant);

    const listCategories = categories.map((categorie) => ` ${categorie.name}`).sort().toString();
    const strMenus = JSON.stringify(menus);
    const strCustomerReviews = JSON.stringify(customerReviews);

    contentElement.innerHTML += `
      <div class="container">
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
    `;
  },
};

export default DetailRestaurant;
