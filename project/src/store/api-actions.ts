import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {FilmsType} from '../types/films';
import {loadFilms, setDataLoadedStatus} from './actions';
import {APIRoute} from '../const';

export const fetchFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/loadFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmsType>(APIRoute.Films);
    dispatch(loadFilms(data));
    dispatch(setDataLoadedStatus(false));
  },
);

