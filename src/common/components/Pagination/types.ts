export type IPagination = {
    className?: string,
    activePage: number,
    total: number,
    onClick: (page: number) => void;
}
