import { comments } from '../../mock/comments';
import Review from '../review/review';

function Reviews() {

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          comments.map((comment) =>
            <Review key={comment.id} review={comment}/>
          )
        }
      </div>
    </div>
  );
}

export default Reviews;
