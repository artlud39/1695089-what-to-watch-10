import RatingSelect from '../rating/rating';
import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/index';
import { sendCommentAction } from '../../store/api-actions';
import { useAppSelector } from '../../hooks/index';
import { selectIsSendingComment } from '../../store/comments-slice/select';

const MIN_RATING = 0;

type AddReviewFormProps = {
  filmId: number;
}

function AddReviewForm({filmId}: AddReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isSending = useAppSelector(selectIsSendingComment);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(MIN_RATING);

  const handleSetRating = (value: string) => {
    setRating(parseInt(value, 10));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendCommentAction({filmId, comment, rating}));
  };

  const filmFormStyle = {
    background: 'rgba(255, 255, 255, 0.2)',
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <RatingSelect isSending={isSending} onChangeRating={handleSetRating}/>

        <div className="add-review__text" style={filmFormStyle}>
          <textarea
            value={comment}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            onChange={(evt) => setComment(evt.target.value)}
            placeholder="Review text"
            disabled={isSending}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              disabled={isSending}
              type="submit"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AddReviewForm;
