import { MouseEventHandler } from 'react';

export type ISearchResultProps = {
    className?: string,
    name: string,
    url: string,
    updatedAt: string,
    stargazerCount: number,
    onNameClick: MouseEventHandler<HTMLHeadingElement>;
}
