import API_ENDPOINT from '../globals/api-endpoint';

console.log(API_ENDPOINT.list);

class RestaurantDbSource {
    static async listRestaurant() {
        const response = await fetch(API_ENDPOINT.list);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async restaurantDetailById(id) {
        const response = await fetch(API_ENDPOINT.detail(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
    }
}

export default RestaurantDbSource;
