import {createAction} from '@reduxjs/toolkit';


export const changeGenreAction = createAction('movies/genre/changeGenre', (genre) => ({
  payload: genre
}));
