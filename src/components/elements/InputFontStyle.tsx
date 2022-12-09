import { ChangeEvent, ReactElement } from 'react'
import InputSelect from './InputSelect'
import { FONT_STYLES } from '../../data/constants'

interface IInputFontStyleProps {
    id: string
    name: string
    label?: string
    showLabel?: boolean
    useLabel?: boolean
    className?: string
    value: string
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const InputFontStyle = ({
    id,
    name,
    label = 'Style',
    showLabel = true,
    useLabel = true,
    className,
    value,
    onChange,
}: IInputFontStyleProps): ReactElement => {
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
            {FONT_STYLES.map((FONT_STYLE, index) => (
                <option value={FONT_STYLE} key={index}>
                    {FONT_STYLE}
                </option>
            ))}
        </InputSelect>
    )
}

export type { IInputFontStyleProps }
export default InputFontStyle
export { FONT_STYLES }
