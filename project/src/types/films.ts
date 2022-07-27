export type ReviewType = {
  text: string,
  reviewRating: number,
  nickname: string,
  dateReview: string
};

export type FilmsType = {
  id: string,
  video: string,
  poster: string,
  title: string,
  bigPicture: string,
  picture: string,
  genre: string,
  released: number,
  runTime: string,
  starring: string[],
  director: string,
  description: string,
  rating: number,
  ratingLevel: string,
  ratingCount: number,
  reviews: ReviewType[]
};

export type UserAddFilmRiview = string;
