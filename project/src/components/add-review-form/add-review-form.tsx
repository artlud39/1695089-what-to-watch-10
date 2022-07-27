import {useState, ChangeEvent} from 'react';

const ratings: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function AddReviewForm(): JSX.Element {

  const [userAdd, setUserAdd] = useState({
    rating: '',
    reviewText: '',
  });


  const handlerChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    const value = target.value;
    setUserAdd(()=> ({
      ...userAdd,
      reviewText: value,
    }));
  };

  return (
    <form className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {ratings.map((rating) => (
            <>
              <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating} />
              <label className="rating__label" htmlFor={`star-${rating}`}>{`Rating ${rating}`}</label>
            </>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={handlerChange}
          value={userAdd.reviewText}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
