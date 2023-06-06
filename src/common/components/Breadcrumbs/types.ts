import { ReactElement } from 'react';

export type IBreadcrumbsProps = {
    className?: string,
    items: IBreadcrumb[]
}

export type IBreadcrumb = {
    title: string,
    onClick?: () => void
}

export type IRenderBreadcrumb = (item: IBreadcrumb) => ReactElement<HTMLDivElement>
