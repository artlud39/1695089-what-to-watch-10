import { store } from '../store/index.js';
import { reducer } from '../store/reducer';

export type Reducer = ReturnType<typeof reducer>;
export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
