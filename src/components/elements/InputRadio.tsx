import React, { KeyboardEvent } from 'react'
import styled from 'styled-components'

import Field, { IFieldProps } from '../primitives/Field'
import { LabelElement } from '../primitives/Label'
import Input from '../primitives/Input'

interface IInputRadioProps extends IFieldProps {
    id: string
    name: string
    value: string
    checked: boolean
    onChange: (value: string) => void
}

const InputRadioInput = styled(Input)`
    display: none;
`

const InputRadioField = styled(Field)`
    ${LabelElement} {
        padding: 0 0.5rem;
        height: 36px;
        border-radius: 0.5rem;
        border: 2px solid black;
        display: grid;
        place-items: center;
        cursor: pointer;
    }

    ${InputRadioInput}:checked + ${LabelElement} {
        color: white;
        background-color: black;
    }
`

const InputRadio = ({
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
}: IInputRadioProps) => {
    const handleChange = () => {
        onChange(value)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            onChange(value)
        }
    }

    return (
        <InputRadioField
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
            <InputRadioInput
                type={'radio'}
                name={name}
                id={id}
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                checked={checked}
                tabIndex={0}
            />
        </InputRadioField>
    )
}

export type { IInputRadioProps }
export default InputRadio
export { InputRadioField, InputRadioInput }
