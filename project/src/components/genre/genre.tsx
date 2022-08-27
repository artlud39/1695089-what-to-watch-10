import React from 'react';
import { Link } from 'react-router-dom';


type GenreProps = {
  genre: string;
  activeGenre: string;
  onGenreClick: (genre: string) => void;
}

const GenreItem = ({genre, activeGenre, onGenreClick}: GenreProps) => {

  const handleGenreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onGenreClick(genre);
  };

  return (
    <li className={`catalog__genres-item ${activeGenre === genre ? 'catalog__genres-item--active' : ''}`}>
      <Link to={`/${genre}`} className="catalog__genres-link" onClick={handleGenreClick}>{genre}</Link>
    </li>
  );
};

export default GenreItem;
