import React, { ReactElement } from 'react'

import { useRecoilState } from 'recoil'
import { typeScaleAtom, typeScaleBoundsAtom, typeScaleSelectionsAtom } from '../../data/store'

import RouteWrapper from '../elements/RouteWrapper'
import RouteHeader from '../elements/RouteHeader'

import Scale from '../patterns/Scale'
import ScaleSelector from '../patterns/ScaleSelector'
import Text from '../primitives/Text'

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
            <RouteHeader arrows={true} />
            <Text as={'h2'}>Scale</Text>
            <Text as={'p'}>
                Define your base font size and ratio, I personally prefer rems but it is up to you.
            </Text>
            <Scale id={'type-scale'} name={'type-scale'} scale={scale} onChange={setScale} />
            <Text as={'h2'}>Scale Entries</Text>
            <Text as={'p'}>
                Select the desired options below to add them to the type sizing list. It will also give them a label by default. <strong>Soon you&apos;ll be able to choose the type of label</strong> 
            </Text>
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
