import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';


type GenreItemProps = {
  genre: string;
  activeGenre: string;
  onGenreClick: (genre: string) => void;
}

const GenreItem = ({genre, activeGenre, onGenreClick}: GenreItemProps) => {

  const handleGenreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onGenreClick(genre);
  };

  return (
    <li className={classNames('catalog__genres-item', {'catalog__genres-item--active': activeGenre === genre})}>
      <Link to={`/${genre}`} className="catalog__genres-link" onClick={handleGenreClick}>{genre}</Link>
    </li>
  );
};

export default GenreItem;
