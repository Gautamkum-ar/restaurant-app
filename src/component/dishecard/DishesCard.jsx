import { Link } from "react-router-dom";
import "../dishecard/DishesCard.css";

export const DishesCard = ({ restaurant }) => {
  return (
    <div className="dishes__card">
      {restaurant.menu.map((menu) => {
        const { imgSrc, id, price, qty, name } = menu;
        return (
          <Link className="card" key={id} to={`details/${restaurant.id}`}>
            <section className="menu__img">
              <img src={imgSrc} alt={name} />
            </section>
            <section className="menu__details">
              <h3>{name}</h3>
              <p>
                Rs. {price} for {qty}
              </p>
              <p>{restaurant.name}</p>
            </section>
          </Link>
        );
      })}
    </div>
  );
};
