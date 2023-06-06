import { ACTIONS } from '../actions';

import { IReducer } from './types';

export const initialState = {
  currentRepository: null,
  searchResults: null
};

export const reducer: IReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.setCurrentRepository:
      return {
        ...state,
        currentRepository: action.payload
      };
    case ACTIONS.setSearchResults:
      return {
        ...state,
        searchResults: action.payload
      };
    default:
      return state;
  }
};
