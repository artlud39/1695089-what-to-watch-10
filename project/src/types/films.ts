export type ReviewType = {
  text: string,
  reviewRating: number,
  nickname: string,
  dateReview: string
};

export type FilmType = {
  id: number,
  nameFilm: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: [string],
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean,
  };

export type FilmsType = FilmType[];

export type UserAddFilmRiview = string;


