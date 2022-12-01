import React from 'react'
import styled from 'styled-components'

import { calculateScaleEntry } from '../../data/utilities'

import IScale from '../../data/models/IScale'

interface IScaleSelectorItemProps {
    name: string
    index: number
    id: string
    scale: IScale
    checked: boolean
    onChange: (index: number, checked: boolean) => void
}

const ScaleSelectorItemWrapper = styled.li`
    &:not(:last-child) {
        margin: 0 0 1rem 0;
    }
`

const ScaleSelectorItemCheckbox = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`

const ScaleSelectorItemLabel = styled.label`
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 2px solid black;
    display: grid;
    box-sizing: border-box;
    grid-template-columns: 48px 64px 1fr;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
    transition: 100ms background-color ease-in-out, 100ms color ease-in-out;

    ${ScaleSelectorItemCheckbox}:checked + & {
        background-color: black;
        color: white;
    }
`

const ScaleSelectorItemSize = styled.p`
    margin: 0;
    text-align: center;
`

const ScaleSelectorItemName = styled.p`
    margin: 0;
    text-align: center;
`

const ScaleSelectorItemDisplay = styled.p`
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    margin: 0;
`

const ScaleSelectorItem = ({
    name,
    id,
    index,
    scale,
    checked,
    onChange,
}: IScaleSelectorItemProps) => {
    const size = calculateScaleEntry(index, scale).join('')

    const onChangeCheckbox = () => {
        onChange(index, !checked)
    }

    const onKeyDownLabel = () => {
        onChange(index, !checked)
    }

    return (
        <ScaleSelectorItemWrapper>
            <ScaleSelectorItemCheckbox
                id={`${id}-scale-item-${index}`}
                name={`${id}-scale-item-${index}`}
                checked={checked}
                onChange={onChangeCheckbox}
            />

            <ScaleSelectorItemLabel
                htmlFor={`${id}-scale-item-${index}`}
                tabIndex={0}
                onKeyDown={onKeyDownLabel}
            >
                <ScaleSelectorItemName>{name}</ScaleSelectorItemName>
                <ScaleSelectorItemSize>{size}</ScaleSelectorItemSize>
                <ScaleSelectorItemDisplay style={{ fontSize: size }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ScaleSelectorItemDisplay>
            </ScaleSelectorItemLabel>
        </ScaleSelectorItemWrapper>
    )
}

export type { IScaleSelectorItemProps }
export default ScaleSelectorItem
export {
    ScaleSelectorItemWrapper,
    ScaleSelectorItemCheckbox,
    ScaleSelectorItemLabel,
    ScaleSelectorItemName,
    ScaleSelectorItemSize,
    ScaleSelectorItemDisplay,
}
