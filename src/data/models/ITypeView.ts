interface ITypeView {
    label: string
    families: string
    weight: string
    style: string
    variant: string
    variables?: { [key: string]: number }
}

export default ITypeView
