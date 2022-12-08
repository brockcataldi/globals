import { ChangeEvent, ReactElement } from 'react'
import InputSelect from './InputSelect'

interface IInputFontVariantProps {
    id: string
    name: string
    label?: string
    showLabel?: boolean
    useLabel?: boolean
    className?: string
    value: string
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const FONT_VARIANTS = ['normal', 'small-caps']

const InputFontVariant = ({
    id,
    name,
    label = 'Variant',
    showLabel = true,
    useLabel = true,
    className,
    value,
    onChange,
}: IInputFontVariantProps): ReactElement => {
    return (
        <InputSelect
            id={id}
            name={name}
            label={label}
            showLabel={showLabel}
            useLabel={useLabel}
            className={className}
            value={value}
            onChange={onChange}
        >
            {FONT_VARIANTS.map((FONT_VARIANT, index) => (
                <option value={FONT_VARIANT} key={index}>
                    {FONT_VARIANT}
                </option>
            ))}
        </InputSelect>
    )
}

export type { IInputFontVariantProps }
export default InputFontVariant
export { FONT_VARIANTS }
