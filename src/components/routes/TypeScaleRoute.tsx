import React, { ReactElement } from 'react'

import { useRecoilState } from 'recoil'
import { typeScaleAtom, typeScaleBoundsAtom, typeScaleSelectionsAtom } from '../../data/store'

import RouteWrapper from '../elements/RouteWrapper'
import RouteHeader from '../elements/RouteHeader'

import Scale from '../patterns/Scale'
import ScaleSelector from '../patterns/ScaleSelector'

const TypeScaleRoute = (): ReactElement => {
    const [scale, setScale] = useRecoilState(typeScaleAtom)
    const [scaleBounds, setScaleBounds] = useRecoilState(typeScaleBoundsAtom)
    const [scaleSelections, setScaleSelections] = useRecoilState(typeScaleSelectionsAtom)

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
        <RouteWrapper>
            <RouteHeader title={'Type Scale'} arrows={true} />
            <Scale id={'type-scale'} name={'type-scale'} scale={scale} onChange={setScale} />
            <ScaleSelector
                id={'type'}
                scale={scale}
                scaleBounds={scaleBounds}
                scaleSelections={scaleSelections}
                onClickAddBoundUpper={onClickAddBoundUpper}
                onClickAddBoundLower={onClickAddBoundLower}
                onChange={onChangeSelection}
            />
        </RouteWrapper>
    )
}

export default TypeScaleRoute
