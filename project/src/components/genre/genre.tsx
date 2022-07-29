import React from 'react';
import { Genre } from '../../const';

type GenreProps = {
  genre: Genre;
  activeGenre: Genre;
  handleGenreClick: (genre: Genre) => void;
}

const GenreItem = ({genre, activeGenre, handleGenreClick}: GenreProps) => {

  const onGenreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleGenreClick(genre);
  };

  return (
    <li className={`catalog__genres-item ${activeGenre === genre ? 'catalog__genres-item--active' : ''}`}>
      <a href={`/${genre}`} className="catalog__genres-link" onClick={onGenreClick}>{genre}</a>
    </li>
  );
};

export default GenreItem;
