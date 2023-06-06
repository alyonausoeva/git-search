import { IRepository } from 'common/models/repository';

export const getNewCurrentRepositories = (allRepositories: IRepository[], page: number): IRepository[] => allRepositories.slice((page - 1) * 10, ((page - 1) * 10) + 10);
