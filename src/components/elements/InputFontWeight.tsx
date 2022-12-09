import { ChangeEvent, ReactElement } from 'react'
import InputSelect from './InputSelect'

import { FONT_WEIGHTS } from '../../data/constants'

interface IInputFontWeightProps {
    id: string
    name: string
    label?: string
    showLabel?: boolean
    useLabel?: boolean
    className?: string
    value: string
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const InputFontWeight = ({
    id,
    name,
    label = 'Weight',
    showLabel = true,
    useLabel = true,
    className,
    value,
    onChange,
}: IInputFontWeightProps): ReactElement => {
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
            {FONT_WEIGHTS.map((FONT_WEIGHT, index) => (
                <option value={FONT_WEIGHT} key={index}>
                    {FONT_WEIGHT}
                </option>
            ))}
        </InputSelect>
    )
}

export type { IInputFontWeightProps }
export default InputFontWeight
export { FONT_WEIGHTS }
