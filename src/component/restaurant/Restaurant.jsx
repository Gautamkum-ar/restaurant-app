import { useRestaurant } from "../../context/Context";
import { DishesCard } from "../dishecard/DishesCard";

import "../restaurant/Restaurant.css";

export const Restaurant = () => {
  const { restaurants } = useRestaurant();
  return (
    <div className="restaurant__container">
      {restaurants.map((restaurant) => (
        <div className="restaurant__main" key={restaurant.id}>
          <h1> Dishes by {restaurant.name}</h1>
          <DishesCard restaurant={restaurant} />
        </div>
      ))}
    </div>
  );
};
