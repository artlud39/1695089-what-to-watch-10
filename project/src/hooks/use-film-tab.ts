import { useSearchParams } from 'react-router-dom';
import { Tab } from '../const';

const QUERY_PARAM_NAME = 'tab';

export const useFilmTab = () => {
  const [searchParams] = useSearchParams();

  return searchParams.get(QUERY_PARAM_NAME) ?? Tab.Overview;
};
