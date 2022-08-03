import React from 'react';


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
      <a href={`/${genre}`} className="catalog__genres-link" onClick={handleGenreClick}>{genre}</a>
    </li>
  );
};

export default GenreItem;
