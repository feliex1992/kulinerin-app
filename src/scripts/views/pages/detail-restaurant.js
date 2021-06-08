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
    console.log(restaurant);
    const categories = restaurant.categories.map((category) => ` ${category.name}`);

    contentElement.innerHTML += `
      <div class="container">
        <img 
          class="detail-image"
          src="${CONFIG.BASE_IMAGE_URL_LARGE}${restaurant.pictureId}"
          alt="${restaurant.name}"
        >
        <div class="card container">
          <h1 class="title__content">${restaurant.name}</h1>
          <h3>${restaurant.city}</h3>
          <p>${restaurant.address}</p>
          <div class="rating-wrapper">
            Rating : 
            <div class="rating__star-wrapper">
              <div class="rating__stars" style="--rating: ${Number(restaurant.rating)};" aria-label="Rating ${restaurant.name} adalah ${restaurant.rating} dari 5 bintang."></div>
            </div>
            <h2 class="rating__label-value">${restaurant.rating}</h2><span class="rating__label-total">/5</span>
          </div>
          <p>Kategori : ${categories}</p>
          
          <p>${restaurant.description}</p>
        <div>
      </div>
    `;
  },
};

export default DetailRestaurant;
