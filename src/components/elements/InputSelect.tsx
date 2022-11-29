import { ChangeEvent, ReactElement, FunctionComponent } from 'react'

import Field, { IFieldProps } from '../primitives/Field'
import Select from '../primitives/Select'

interface IInputSelectProps extends IFieldProps {
    id: string
    name: string
    children: ReactElement | ReactElement[]
    value: string | number
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const InputSelect: FunctionComponent<IInputSelectProps> = ({
    id,
    name,
    value,
    children,
    onChange,
    label,
    useLabel,
    showLabel,
    childrenBehind = true,
}: IInputSelectProps): ReactElement => {
    return (
        <Field
            label={label}
            useLabel={useLabel}
            showLabel={showLabel}
            htmlFor={id}
            childrenBehind={childrenBehind}
        >
            <Select name={name} id={id} value={value} onChange={onChange}>
                {children}
            </Select>
        </Field>
    )
}

export default InputSelect
