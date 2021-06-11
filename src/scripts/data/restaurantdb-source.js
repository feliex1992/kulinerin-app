import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async getListRestaurant() {
    const response = await fetch(API_ENDPOINT.GET_LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async postCustomerReview(id, name, review) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, review }),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantDbSource;
