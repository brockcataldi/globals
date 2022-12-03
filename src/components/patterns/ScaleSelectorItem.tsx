import React from 'react'
import styled from 'styled-components'

import { calculateScaleEntry } from '../../data/utilities'

import IScale from '../../data/models/IScale'

interface IScaleSelectorItemDisplayStylesProps {
    type: 'type' | 'spacing'
}

interface IScaleSelectorItemProps extends IScaleSelectorItemDisplayStylesProps {
    name: string
    index: number
    id: string
    scale: IScale
    checked: boolean
    onChange: (index: number, checked: boolean) => void
}

const ScaleSelectorItemWrapper = styled.li`
    width: 100%;

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
    transition: 100ms border-width ease-in-out;

    ${ScaleSelectorItemCheckbox}:checked + & {
        border-width: 4px;
    }
`

const ScaleSelectorItemSize = styled.p`
    margin: 0;
    text-align: center;
`

const ScaleSelectorItemName = styled.p`
    margin: 0;
    text-align: center;
    font-weight: 700;
`

const ScaleSelectorItemDisplay = styled.p<IScaleSelectorItemDisplayStylesProps>`
    margin: 0;
    display: block;

    ${(props) => {
        if (props.type == 'spacing') {
            return `
                width: 100%;
                background-color: black;
            `
        } else {
            return `
                white-space: nowrap;
                overflow: hidden;
            `
        }
    }}
`

const ScaleSelectorItem = ({
    type,
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

                {type === 'type' ? (
                    <ScaleSelectorItemDisplay style={{ fontSize: size }} type={type}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </ScaleSelectorItemDisplay>
                ) : (
                    <ScaleSelectorItemDisplay
                        style={{ height: size }}
                        type={type}
                    ></ScaleSelectorItemDisplay>
                )}
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
