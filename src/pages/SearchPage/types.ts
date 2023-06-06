import { IRepository } from 'common/models/repository';

export type IOnSearch = (q: string) => void;

export type IOnRepositoryNameClick = (repository: IRepository) => void;

export type IHandlePagination = (page: number) => void;

export type IUpdateCurrentSearchResults = (page: number) => void;
