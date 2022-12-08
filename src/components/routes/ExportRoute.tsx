import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

import { objectifyScale, objectifyView } from '../../data/utilities'

import RouteHeader from '../elements/RouteHeader'
import RouteWrapper from '../elements/RouteWrapper'
import {
    typeScaleAtom,
    typeScaleSelectionsAtom,
    spacingScalesAtom,
    marginScaleAtom,
    marginScaleSelectionsAtom,
    paddingScaleAtom,
    paddingScaleSelectionsAtom,
    typeViewsAtom,
} from '../../data/store'

const ExportPre = styled.pre`
    border: 2px solid black;
    border-radius: 0.5rem;
    resize: none;
    width: 100%;
    padding: 1rem;
    margin: 0;
    box-sizing: border-box;
    white-space: pre-wrap;
`

const ExportRoute = (): ReactElement => {
    const spacingScales = useRecoilValue(spacingScalesAtom)

    const exportScale =
        spacingScales === 'shared'
            ? {
                  spacing: objectifyScale(marginScaleAtom, marginScaleSelectionsAtom),
              }
            : {
                  margin: objectifyScale(marginScaleAtom, marginScaleSelectionsAtom),
                  padding: objectifyScale(paddingScaleAtom, paddingScaleSelectionsAtom),
              }

    const exportObject = {
        font: {
            size: objectifyScale(typeScaleAtom, typeScaleSelectionsAtom),
            views: objectifyView(typeViewsAtom),
        },
        ...exportScale,
    }

    return (
        <RouteWrapper>
            <RouteHeader title={'Export'} arrows={true} />
            <ExportPre>{JSON.stringify(exportObject, null, 4)}</ExportPre>
        </RouteWrapper>
    )
}

export default ExportRoute
