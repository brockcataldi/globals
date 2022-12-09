import React from 'react'
import { RecoilState, useRecoilState } from 'recoil'

import IScale from '../../data/models/IScale'
import IScaleBounds from '../../data/models/IScaleBounds'

import Text from '../primitives/Text'
import Scale from './Scale'
import ScaleSelector from './ScaleSelector'

interface IScaleFormProps {
    id: string
    type: 'type' | 'spacing'
    title?: string
    scaleAtom: RecoilState<IScale>
    scaleBoundsAtom: RecoilState<IScaleBounds>
    scaleSelectionsAtom: RecoilState<number[]>
}

const ScaleForm = ({
    id,
    type,
    title,
    scaleAtom,
    scaleBoundsAtom,
    scaleSelectionsAtom,
}: IScaleFormProps) => {
    const [scale, setScale] = useRecoilState(scaleAtom)
    const [scaleBounds, setScaleBounds] = useRecoilState(scaleBoundsAtom)
    const [scaleSelections, setScaleSelections] = useRecoilState(scaleSelectionsAtom)

    const onClickAddBoundUpper = () => {
        setScaleBounds({ ...scaleBounds, upper: scaleBounds.upper + 1 })
    }
    const onClickAddBoundLower = () => {
        setScaleBounds({ ...scaleBounds, lower: scaleBounds.lower - 1 })
    }

    const onChangeSelection = (index: number, checked: boolean) => {
        if (checked === true) {
            setScaleSelections([...scaleSelections, index])
        } else {
            setScaleSelections(scaleSelections.filter((value) => value !== index))
        }
    }

    return (
        <>
            {title === undefined ? null : <Text as={'h3'}>{title}</Text>}
            <Scale id={`${id}-scale`} name={`${id}-scale`} scale={scale} onChange={setScale} />
            <ScaleSelector
                id={id}
                type={type}
                scale={scale}
                scaleBounds={scaleBounds}
                scaleSelections={scaleSelections}
                onClickAddBoundUpper={onClickAddBoundUpper}
                onClickAddBoundLower={onClickAddBoundLower}
                onChange={onChangeSelection}
            />
        </>
    )
}

export type { IScaleFormProps }
export default ScaleForm
