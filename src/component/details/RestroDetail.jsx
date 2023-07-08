import { useState } from "react";
import "../details/RestroDetail.css";
import { Addreview } from "../addreview/Addreview";

export const RestroDetails = ({ findRestaurant }) => {
  const [toggleAdd, setToggleAdd] = useState(false);

  const { name, address, menu, averageRating } = findRestaurant;
  return (
    <div className="restro__details__container">
      <div className="details__left">
        <h1 className="restro__name">{name}</h1>
        <div className="restro__menu">
          {menu.map((item) => (
            <p>{item.name},</p>
          ))}
        </div>
        <p className="address">{address}</p>
        <p className="avg__rating">Average Rating: {averageRating}</p>
      </div>
      <div className="right">
        <button onClick={() => setToggleAdd(true)}>Add Review</button>
      </div>
      {toggleAdd && (
        <Addreview
          findRestaurant={findRestaurant}
          setToggleAdd={setToggleAdd}
        />
      )}
    </div>
  );
};
