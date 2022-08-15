export interface RestaurantFromApi {
  name: string;
  address: string;
  average_price: string;
  cuisine: string;
  image_url: string;
  latitude: string;
  longitude: string;
  rating: string;
}

export interface RestaurantsFromApi {
  [key: string]: RestaurantFromApi
}

export interface Restaurant {
  name: string;
  address: string;
  average_price: number;
  cuisine: string;
  image_url: string;
  latitude: number;
  longitude: number;
  rating: number;
}

export interface Restaurants {
  [key: string]: Restaurant
}
