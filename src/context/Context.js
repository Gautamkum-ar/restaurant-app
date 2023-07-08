import { createContext, useContext, useState } from "react";
import { cuisineData, restaurantsData } from "../data/Data";

const RestaurantContext = createContext();

export const ContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const cuisines = cuisineData;

  const showRestaurant = (id) => {
    const filterData = restaurantsData.filter(
      (restaurant) => restaurant.cuisine_id === id
    );
    setRestaurants(filterData);
  };

  const handleAddReview = (data, restro) => {
    const filter = restaurants.map((restaurant) =>
      restaurant.id == restro.id
        ? { ...restaurant, ratings: [...restaurant.ratings, data] }
        : restaurant
    );

    setRestaurants(filter);
  };
  return (
    <RestaurantContext.Provider
      value={{ cuisines, showRestaurant, restaurants, handleAddReview }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => useContext(RestaurantContext);
