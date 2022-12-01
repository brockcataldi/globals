import { ChangeEvent, ReactElement } from 'react'

import Field, { IFieldProps } from '../primitives/Field'
import Input from '../primitives/Input'

interface IInputNumberProps extends IFieldProps {
    id: string
    name: string
    value: number
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputNumber = ({
    id,
    name,
    value,
    onChange,
    label,
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
            <Input type={'number'} name={name} id={id} value={value} onChange={onChange} />
        </Field>
    )
}

export default InputNumber
