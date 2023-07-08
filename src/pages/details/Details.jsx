import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import "../details/Details.css";
import { useRestaurant } from "../../context/Context";
import { RestroDetails } from "../../component/details/RestroDetail";
import { Review } from "../../component/reviews/Review";
import { useState } from "react";
import { Addreview } from "../../component/addreview/Addreview";

export const Details = () => {
  const navigate = useNavigate();

  const { restaurants } = useRestaurant();
  const { restaurantId } = useParams();

  const findRestaurant = restaurants.find(
    (restro) => restaurantId.toString() === restro.id.toString()
  );

  return (
    <div className="details__container">
      <button className="back__btn" onClick={() => navigate("/")}>
        <FaArrowLeft />
      </button>
      <RestroDetails findRestaurant={findRestaurant} />
      <Review findRestaurant={findRestaurant} />
    </div>
  );
};
