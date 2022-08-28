import { CommentType } from '../../types/comments';
import { humanizeCommentDate } from '../../utils/common';

type DetailsProps = {
  review: CommentType,
}

function Review({review}: DetailsProps) {
  const {
    comment,
    date,
    rating,
    user
  } = review;

  const commentDate = humanizeCommentDate(date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={commentDate}>{commentDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;

