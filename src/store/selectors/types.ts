import { IRepository } from 'common/models/repository';

import { IState } from '../reducers';

export type ISelectCurrentRepository = (state: IState) => IRepository | null;

export type ISelectSearchResults = (state: IState) => IRepository[] | null;
