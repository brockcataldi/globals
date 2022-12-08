import { ChangeEvent, ReactElement } from 'react'

import Field, { IFieldProps } from '../primitives/Field'
import Range from '../primitives/Range'

interface IInputRangeProps extends IFieldProps {
    id: string
    name: string
    value: number
    min?: number
    max?: number
    step?: number
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputRange = ({
    id,
    name,
    value,
    onChange,
    label,
    min,
    max,
    step,
    useLabel = true,
    showLabel = true,
    childrenBehind = true,
    className,
}: IInputRangeProps): ReactElement => {
    return (
        <Field
            label={label}
            useLabel={useLabel}
            showLabel={showLabel}
            htmlFor={id}
            childrenBehind={childrenBehind}
            className={className}
        >
            <Range
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                min={min}
                max={max}
                step={step}
            />
        </Field>
    )
}

export default InputRange
