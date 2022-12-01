import React from 'react'
import styled from 'styled-components'

import ScaleSelectorItem from './ScaleSelectorItem'
import Button from '../primitives/Button'

import { between, tee } from '../../data/utilities'

import IScale from '../../data/models/IScale'
import IScaleBounds from '../../data/models/IScaleBounds'

import { PlusIcon } from '../icons/icons'

interface IScaleSelectorProps {
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
`

const ScaleSelector = ({
    id,
    scale,
    scaleBounds,
    scaleSelections,
    onClickAddBoundUpper,
    onClickAddBoundLower,
    onChange,
}: IScaleSelectorProps) => {
    const { upper, lower } = scaleBounds

    const large = [...scaleSelections].filter((value) => value >= 0).sort((a, b) => a - b)
    const small = [...scaleSelections].filter((value) => value < 0).sort((a, b) => b - a)

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
                    const name =
                        checked === false
                            ? ''
                            : scaleIndex >= 0
                                ? tee(large.indexOf(scaleIndex))
                                : tee(-1 * (small.indexOf(scaleIndex) + 1))
                    return (
                        <ScaleSelectorItem
                            name={name}
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
