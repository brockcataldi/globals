import { ChangeEvent, ReactElement } from 'react'

import Field, { IFieldProps } from '../primitives/Field'
import Input from '../primitives/Input'

interface IInputTextProps extends IFieldProps {
    id: string
    name: string
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputText = ({
    id,
    name,
    value,
    onChange,
    label,
    useLabel = true,
    showLabel = true,
    childrenBehind = true,
    className,
}: IInputTextProps): ReactElement => {
    return (
        <Field
            label={label}
            useLabel={useLabel}
            showLabel={showLabel}
            htmlFor={id}
            childrenBehind={childrenBehind}
            className={className}
        >
            <Input type={'text'} name={name} id={id} value={value} onChange={onChange} />
        </Field>
    )
}

export type { IInputTextProps }
export default InputText
