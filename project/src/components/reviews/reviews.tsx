import { selectComments } from '../../store/comments-slice/select';
import Review from '../review/review';
import {useAppSelector} from '../../hooks/index';

function Reviews() {

  const comments = useAppSelector(selectComments);

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
