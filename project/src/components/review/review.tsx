import { CommentType } from '../../types/films';


type DetailsPropsType = {
  review: CommentType,
}

function Review({review}: DetailsPropsType) {
  const {
    comment,
    date,
    rating,
    user
  } = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;

