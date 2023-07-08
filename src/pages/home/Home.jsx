import { Cuisine } from "../../component/cuisine/Cuisine";
import { Restaurant } from "../../component/restaurant/Restaurant";
import "../home/Home.css";

export const Home = () => {
  return (
    <div className="home__container">
      <h1 className="head">Food Ordering App</h1>
      <Cuisine />
      <Restaurant />
    </div>
  );
};
