import { ChangeEvent, ReactElement } from 'react'

import Field, { IFieldProps } from '../primitives/Field'
import Input from '../primitives/Input'

interface IInputNumberProps extends IFieldProps {
    id: string
    name: string
    value: number
    min?: number
    max?: number
    step?: number
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputNumber = ({
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
}: IInputNumberProps): ReactElement => {
    return (
        <Field
            label={label}
            useLabel={useLabel}
            showLabel={showLabel}
            htmlFor={id}
            childrenBehind={childrenBehind}
            className={className}
        >
            <Input
                type={'number'}
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

export type { IInputNumberProps }
export default InputNumber
