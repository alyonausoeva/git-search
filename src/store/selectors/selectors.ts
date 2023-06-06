import { ISelectCurrentRepository, ISelectSearchResults } from './types';

export const selectCurrentRepository: ISelectCurrentRepository = (state) => state.currentRepository;

export const selectSearchResults: ISelectSearchResults = (state) => state.searchResults;
