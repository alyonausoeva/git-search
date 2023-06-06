import { useDispatch } from 'react-redux';

import { ACTIONS } from './actionTypes';
import { IGetActionCreators } from './types';

export const getActionCreators: IGetActionCreators = () => {
  const dispatch = useDispatch();

  return {
    setCurrentRepository(data) {
      dispatch({
        type: ACTIONS.setCurrentRepository,
        payload: data
      });
    },
    setSearchResults(data) {
      dispatch({
        type: ACTIONS.setCurrentRepository,
        payload: data
      });
    }
  };
};
