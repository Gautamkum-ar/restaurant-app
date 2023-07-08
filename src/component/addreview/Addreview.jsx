import "../addreview/Addreview.css";

export const Addreview = () => {
  return (
    <div className="add__review__container">
      <div className="add__review">
        <h1>Add Your Review</h1>

        <div className="ratingsss">
          <p>Rating: </p>
          <select name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="comments">
          <p>Comment: </p>
          <input type="comments" />
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};
