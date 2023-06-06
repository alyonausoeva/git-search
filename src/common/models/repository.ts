export type IRepository = {
    id: number,
    url: string,
    name: string,
    updatedAt: string,
    stargazerCount: number,
    languages: { nodes: ILanguage[] },
    owner: {
        url: string,
        login: string,
        avatarUrl: string,
    },
    description: string
}

export type ILanguage = {
    name: string
}
