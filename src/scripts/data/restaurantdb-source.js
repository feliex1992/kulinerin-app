import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async getListRestaurant() {
    try {
      const response = await fetch(API_ENDPOINT.GET_LIST_RESTAURANT);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (err) {
      return { error: true, message: err.message };
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (err) {
      return { error: true, message: err.message };
    }
  }

  static async postCustomerReview(id, name, review) {
    try {
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
    } catch (err) {
      return { error: true, message: err.message };
    }
  }
}

export default RestaurantDbSource;
