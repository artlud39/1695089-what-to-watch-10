import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import type { State, AppDispatch } from '../types/state';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
