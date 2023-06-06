import { IRepository } from 'common/models/repository';

import { ACTIONS } from './actionTypes';

export type IActionCreators = {
    setCurrentRepository: (repository: IRepository) => void;
    setSearchResults: (data: IRepository[]) => void
}

export type IAction = {
    type: ACTIONS.setCurrentRepository,
    payload: IRepository
} | {
    type: ACTIONS.setSearchResults,
    payload: IRepository[]
}

export type IGetActionCreators = () => IActionCreators;
