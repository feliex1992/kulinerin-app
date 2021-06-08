import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import CONFIG from '../../globals/config';

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
      name,
      pictureId,
      city,
      address,
      rating,
      categories,
      menus,
      description,
    } = restaurant;

    let listMenuFoods = '';
    menus.foods.forEach((food) => {
      listMenuFoods += `<li>${food.name}</li>`;
    });

    contentElement.innerHTML += `
      <div>
        <h1 class="title__content title-detail">${name}</h1>
        <img 
          class="detail-image"
          src="${CONFIG.BASE_IMAGE_URL_LARGE}${pictureId}"
          alt="${name}"
        >
        <div class="card container">
          <h3>${city}</h3>
          ${address}
          <rating-item rating="${rating}" name="${name}"></rating-item>
        <div>

        <p>Kategori : ${categories.map((categorie) => ` ${categorie.name}`)}</p>
        <p><h3>Menu</h3><p>
        Makanan
        <ul>
          ${listMenuFoods}
        </ul>
        <p>${description}</p>
      </div>
    `;
  },
};

export default DetailRestaurant;
