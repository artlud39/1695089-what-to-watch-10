import { useSearchParams } from 'react-router-dom';
import { QUERY_PARAM_NAME, Tab } from '../const';

export const useFilmTab = () => {
  const [searchParams] = useSearchParams();

  return searchParams.get(QUERY_PARAM_NAME) ?? Tab.Overview;
};
