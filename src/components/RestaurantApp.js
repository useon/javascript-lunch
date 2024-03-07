import Component from './Component';
import RestaurantRepository from '../domain/RestaurantRepository';

class RestaurantApp extends Component {
  #restaurants;

  constructor() {
    super();
    this.#restaurants = RestaurantRepository.transformRestaurants('전체', '이름순');
  }

  render() {
    this.innerHTML = this.template();
  }

  setEvent() {
    this.querySelector('restaurant-list').setAttribute('restaurants', `${JSON.stringify(this.#restaurants)}`);
    this.querySelector('restaurant-add-modal').setAttribute('open', 'false');

    this.addEventListener('selectChange', () => {
      this.#generateRestaurantsBySelection();
    });

    this.addEventListener('gnbButtonClick', () => {
      this.querySelector('restaurant-add-modal').setAttribute('open', 'true');
    });

    this.addEventListener('submitButtonClick', (event) => {
      RestaurantRepository.addRestaurant(event.detail);

      this.#restaurants = this.#generateRestaurantsBySelection();

      this.querySelector('restaurant-list').setAttribute('restaurants', `${JSON.stringify(this.#restaurants)}`);
      this.querySelector('restaurant-add-modal').setAttribute('open', 'false');
    });

    this.addEventListener('cancelButtonClick', () => {
      this.querySelector('restaurant-add-modal').setAttribute('open', 'false');
    });
  }

  #generateRestaurantsBySelection() {
    const category = this.querySelector('.category').value;
    const sorting = this.querySelector('.sorting').value;

    this.#restaurants = RestaurantRepository.transformRestaurants(category, sorting);

    this.querySelector('restaurant-list').setAttribute('restaurants', `${JSON.stringify(this.#restaurants)}`);
  }

  template() {
    return `
      <custom-header></custom-header>
      <filter-box-container></filter-box-container>
      <restaurant-list></restaurant-list>
      <restaurant-add-modal></restaurant-add-modal>
    `;
  }
}

export default RestaurantApp;
