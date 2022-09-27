import { ErrorMessage, Gerne } from '../const';
import { FilmsType } from '../types/films';

export const getFilmGenres = (filmList: FilmsType): string[] =>
  [Gerne.AllGeneres, ...new Set(filmList.map((film) => film.genre))];

export const validatorFormSignIn = (email: string, password: string): string | null => {
  const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
  const isPasswordValid = /^(?=^[a-zA-Z0-9]{2,}$)(?=.*\d)(?=.*[a-zA-Z]).*$/.test(password);

  if (!email || !isPasswordValid) {
    return ErrorMessage.SignInValidate;
  }

  if (!isEmailValid) {
    return ErrorMessage.IncorrectEmail;
  }

  return null;
};

