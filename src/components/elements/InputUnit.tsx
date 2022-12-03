import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

import InputNumber from './InputNumber'
import InputSelect from './InputSelect'

import Input from '../primitives/Input'
import Select from '../primitives/Select'

import IUnit from '../../data/models/IUnit'
import Text from '../primitives/Text'

interface IInputUnit {
    id: string
    title: string
    value: IUnit
    onChange: (unit: IUnit) => void
}

const InputUnitInputNumber = styled(InputNumber)`
    ${Input} {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
`

const InputUnitInputSelect = styled(InputSelect)`
    ${Select} {
        border-left: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`

const InputUnitTitle = styled(Text)`
    grid-area: auto / span 2;
    font-size: 1rem;
    text-transform: lowercase;
    margin: 0 0 0.25rem;
    font-weight: 600;
`

const InputUnitWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 64px;
`

const InputUnit = ({ id, title, value, onChange }: IInputUnit) => {
    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        onChange({ ...value, value: Number(event.target.value) })
    }

    const onChangeSuffix = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange({ ...value, suffix: event.target.value })
    }

    return (
        <InputUnitWrapper>
            <InputUnitTitle as={'p'}>{title}</InputUnitTitle>
            <InputUnitInputNumber
                value={value.value}
                onChange={onChangeValue}
                id={`scale-value-${id}`}
                name={`scale-value-${id}`}
                label={'Unit Value'}
                showLabel={false}
                min={0}
                step={value.suffix === 'px' ? 1 : 0.1}
            />
            <InputUnitInputSelect
                value={value.suffix}
                onChange={onChangeSuffix}
                id={`scale-suffix-${id}`}
                name={`scale-suffix-${id}`}
                label={'Unit Suffix'}
                showLabel={false}
            >
                <option value={'px'}>px</option>
                <option value={'em'}>em</option>
                <option value={'rem'}>rem</option>
            </InputUnitInputSelect>
        </InputUnitWrapper>
    )
}

export default InputUnit
