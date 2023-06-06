export type ISearchInputProps = {
    className?: string,
    fixedValue: string,
    placeholder: string,
    switchSuggestions?: (params: boolean) => void,
    onChange?: () => void,
    onSearch: (params: string) => void
}
