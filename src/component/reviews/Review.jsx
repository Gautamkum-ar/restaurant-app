import "../reviews/Review.css";

export const Review = ({ findRestaurant }) => {
  const {
    name,
    id,
    address,
    phone,
    menu,
    ratings,
    averageRating,
    description,
  } = findRestaurant;
  return (
    <div className="review__container">
      <h1>Reviews</h1>

      {ratings.map((rating) => (
        <div className="user__card">
          <section className="user">
            <div className="user__details">
              <img src={rating.pp} alt="" />
              <p> {rating.revName}</p>
            </div>
            <p>{rating.comment}</p>
          </section>
          <p>{rating.rating}⭐</p>
        </div>
      ))}
    </div>
  );
};
