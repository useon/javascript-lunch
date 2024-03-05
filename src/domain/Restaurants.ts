import Restaurant from './Restaurant';
import { TCategory } from '../type/types';

class Restaurants {
  #restaurants: Restaurant[];

  constructor() {
    this.#restaurants = [];
  }

  addRestaurant(restaurant: Restaurant) {
    this.#restaurants.push(restaurant);
  }

  getFilteredByCategory(category: TCategory) {
    return [...this.#restaurants.filter((restaurant) => restaurant.getCategory() === category)];
  }

  getSortedByName() {
    return [...this.#restaurants.sort((a, b) => Number(a.getName()) - Number(b.getName()))];
  }

  getSortedByDistance() {
    return [...this.#restaurants.sort((a, b) => a.getDistance() - b.getDistance())];
  }
}

export default Restaurants;
