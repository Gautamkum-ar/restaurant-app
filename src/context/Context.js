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
  return (
    <RestaurantContext.Provider
      value={{ cuisines, showRestaurant, restaurants }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => useContext(RestaurantContext);
