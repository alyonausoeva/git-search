import { Reducer } from 'react';

import { IRepository } from 'common/models/repository';

import { IAction } from '../actions';

export type IReducer = Reducer<IState, IAction>;

export type IState = {
    currentRepository: null | IRepository,
    searchResults: null | IRepository[]
};
