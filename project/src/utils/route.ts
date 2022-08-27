import { AppRoute } from '../const';


export const getFilmUrl = (id: string | number): string => `/${AppRoute.Film.replace(':id', `${id}`)}`;

export const getPlayerUrl = (id: string | number): string => `/${AppRoute.Player.replace(':id', `${id}`)}`;

export const getAddReviewUrl = (id: string | number): string =>`/${AppRoute.Film.replace(':id', `${id}`)}/review`;

export const getMylistUrl = (): string => `/${AppRoute.MyList}/`;

export const getSignIntUrl = (): string => `/${AppRoute.SingIn}/`;
