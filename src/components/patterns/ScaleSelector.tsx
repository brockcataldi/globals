import React from 'react'
import styled from 'styled-components'

import ScaleSelectorItem from './ScaleSelectorItem'
import Button from '../primitives/Button'

import { between, nameScaleEntry } from '../../data/utilities'

import IScale from '../../data/models/IScale'
import IScaleBounds from '../../data/models/IScaleBounds'

import { PlusIcon } from '../vectors/vectors'

interface IScaleSelectorProps {
    type: 'type' | 'spacing'
    id: string
    scale: IScale
    scaleBounds: IScaleBounds
    scaleSelections: number[]
    onClickAddBoundUpper: () => void
    onClickAddBoundLower: () => void
    onChange: (index: number, checked: boolean) => void
}

const ScaleSelectorWrapper = styled.div`
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
`

const ScaleSelectorList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    width: 100%;
`

const ScaleSelector = ({
    type,
    id,
    scale,
    scaleBounds,
    scaleSelections,
    onClickAddBoundUpper,
    onClickAddBoundLower,
    onChange,
}: IScaleSelectorProps) => {
    const { upper, lower } = scaleBounds

    return (
        <ScaleSelectorWrapper>
            <Button
                icon={PlusIcon}
                label={'Add Upper Scale Item'}
                onClick={onClickAddBoundUpper}
                showText={false}
                size={'square'}
            />
            <ScaleSelectorList>
                {between(upper, lower).map((scaleIndex: number, index: number) => {
                    const checked = scaleSelections.includes(scaleIndex)

                    return (
                        <ScaleSelectorItem
                            type={type}
                            name={
                                checked === false
                                    ? ''
                                    : nameScaleEntry(scaleIndex, scaleSelections, 'tee')
                            }
                            key={index}
                            index={scaleIndex}
                            id={id}
                            scale={scale}
                            checked={checked}
                            onChange={onChange}
                        />
                    )
                })}
            </ScaleSelectorList>
            <Button
                icon={PlusIcon}
                label={'Add Lower Scale Item'}
                onClick={onClickAddBoundLower}
                showText={false}
                size={'square'}
            />
        </ScaleSelectorWrapper>
    )
}

export type { IScaleSelectorProps }
export default ScaleSelector
export { ScaleSelectorWrapper, ScaleSelectorList }
