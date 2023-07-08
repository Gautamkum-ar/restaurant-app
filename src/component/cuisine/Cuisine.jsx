import { useRestaurant } from "../../context/Context";

import "../cuisine/Cuisine.css";

export const Cuisine = () => {
  const { cuisines, showRestaurant } = useRestaurant();
  return (
    <div className="cuisine__container">
      <h2>Select Your Cuisine</h2>
      <div className="cuisine__main">
        {cuisines.map((cuisine) => (
          <button key={cuisine.id} onClick={() => showRestaurant(cuisine.id)}>
            {cuisine.name}
          </button>
        ))}
      </div>
    </div>
  );
};
