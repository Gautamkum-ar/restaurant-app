import { useState } from "react";
import "../addreview/Addreview.css";
import { useRestaurant } from "../../context/Context";

export const Addreview = ({ findRestaurant, setToggleAdd }) => {
  const [addReviewData, setAddReviewData] = useState({
    rating: "",
    comment: "",
    revName: "Gautam Kumar",
    pp: "https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg",
  });

  const { handleAddReview } = useRestaurant();
  return (
    <div className="add__review__container">
      <div className="add__review">
        <h1>Add Your Review</h1>
        <button onClick={() => setToggleAdd(false)} className="close">
          X
        </button>

        <div className="ratingsss">
          <p>Rating: </p>
          <select
            onChange={(e) =>
              setAddReviewData({ ...addReviewData, rating: e.target.value })
            }
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="comments">
          <p>Comment: </p>
          <input
            type="comments"
            onChange={(e) =>
              setAddReviewData({ ...addReviewData, comment: e.target.value })
            }
          />
        </div>
        <button
          onClick={() => {
            handleAddReview(addReviewData, findRestaurant);
            setToggleAdd(false);
          }}
          className="add__btn"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
