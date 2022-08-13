import {
  Restaurant,
  RestaurantFromApi,
  Restaurants,
  RestaurantsFromApi,
} from '../types'

const toRestaurant = (data: RestaurantFromApi): Restaurant => {
  return {
    name: data.name,
    address: data.address,
    cuisine: data.cuisine,
    image_url: data.image_url,
    average_price: Number(data.average_price),
    latitude: Number(data.latitude),
    longitude: Number(data.longitude),
    rating: Number(data.rating),
  }
}

export const toRestaurants = (data: RestaurantsFromApi): Restaurants => {
  const result: Restaurants = {}

  Object.keys(data).forEach((v) => {
    result[v] = toRestaurant(data[v])
  })

  return result
}
