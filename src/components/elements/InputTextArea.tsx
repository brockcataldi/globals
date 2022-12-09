import { ChangeEvent, ReactElement } from 'react'

import Field, { IFieldProps } from '../primitives/Field'
import TextArea from '../primitives/TextArea'

interface IInputTextProps extends IFieldProps {
    id: string
    name: string
    value: string
    placeholder?: string
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const InputTextArea = ({
    id,
    name,
    value,
    onChange,
    label,
    useLabel = true,
    showLabel = true,
    childrenBehind = true,
    className,
    placeholder,
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
            <TextArea
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </Field>
    )
}

export type { IInputTextProps }
export default InputTextArea
