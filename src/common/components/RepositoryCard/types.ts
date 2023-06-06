import { ILanguage } from 'common/models/repository';

export type IRepositoryCardProps = {
    className?: string,
    name: string,
    url: string,
    avatarUrl?: string,
    stargazerCount: number,
    updatedAt: string,
    languages: ILanguage[],
    owner: string,
    ownerUrl: string,
    description: string
}
