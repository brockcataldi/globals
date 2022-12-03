import React, { ReactElement } from 'react'

import { typeScaleAtom, typeScaleBoundsAtom, typeScaleSelectionsAtom } from '../../data/store'

import RouteWrapper from '../elements/RouteWrapper'
import RouteHeader from '../elements/RouteHeader'
import ScaleForm from '../patterns/ScaleForm'

const TypeScaleRoute = (): ReactElement => {
    return (
        <RouteWrapper>
            <RouteHeader title={'Type Scale'} arrows={true} />
            <ScaleForm
                id={'type'}
                type={'type'}
                scaleAtom={typeScaleAtom}
                scaleBoundsAtom={typeScaleBoundsAtom}
                scaleSelectionsAtom={typeScaleSelectionsAtom}
            />
        </RouteWrapper>
    )
}

export default TypeScaleRoute
