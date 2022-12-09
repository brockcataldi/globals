import React, { KeyboardEvent } from 'react'
import styled from 'styled-components'

import Field, { IFieldProps } from '../primitives/Field'
import { LabelElement } from '../primitives/Label'
import Input from '../primitives/Input'

interface IInputCheckboxProps extends IFieldProps {
    id: string
    name: string
    value: string
    checked: boolean
    onChange: (value: string) => void
}

const InputCheckboxInput = styled(Input)`
    display: none;
`

const InputCheckboxField = styled(Field)`
    ${LabelElement} {
        padding: 0 0.5rem;
        height: 36px;
        border-radius: 0.5rem;
        border: 2px solid black;
        display: grid;
        place-items: center;
        cursor: pointer;
    }

    ${InputCheckboxInput}:checked + ${LabelElement} {
        color: white;
        background-color: black;
    }
`

const InputCheckbox = ({
    label,
    id,
    name,
    className,
    value,
    onChange,
    checked,
    icon,
    iconAfter,
    iconTitle,
}: IInputCheckboxProps) => {
    const handleChange = () => {
        onChange(value)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            onChange(value)
        }
    }

    return (
        <InputCheckboxField
            label={label}
            useLabel={true}
            showLabel={true}
            htmlFor={id}
            childrenBehind={false}
            className={className}
            icon={icon}
            iconAfter={iconAfter}
            iconTitle={iconTitle}
        >
            <InputCheckboxInput
                type={'checkbox'}
                name={name}
                id={id}
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                checked={checked}
                tabIndex={0}
            />
        </InputCheckboxField>
    )
}

export type { IInputCheckboxProps }
export default InputCheckbox
export { InputCheckboxInput, InputCheckboxField }
