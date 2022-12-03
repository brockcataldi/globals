import React from 'react'

import { useRecoilState } from 'recoil'
import {
    marginScaleAtom,
    marginScaleBoundsAtom,
    marginScaleSelectionsAtom,
    paddingScaleAtom,
    paddingScaleBoundsAtom,
    paddingScaleSelectionsAtom,
    spacingScalesAtom,
} from '../../data/store'

import ScaleForm from '../patterns/ScaleForm'
import InputRadio from '../elements/InputRadio'
import RouteHeader from '../elements/RouteHeader'
import RouteWrapper from '../elements/RouteWrapper'
import Group from '../primitives/Group'

import { LockIcon, UnlockIcon } from '../icons/icons'

const SpacingRoute = () => {
    const [spacingScales, setSpacingScales] = useRecoilState(spacingScalesAtom)

    return (
        <RouteWrapper>
            <RouteHeader title={'Spacing'} arrows={true} />
            <Group>
                <InputRadio
                    label={'Shared Scale'}
                    id={'scale-set-type-shared'}
                    name={'scale-set-type'}
                    value={'shared'}
                    icon={LockIcon}
                    checked={spacingScales === 'shared'}
                    onChange={setSpacingScales}
                />
                <InputRadio
                    label={'Split Scales'}
                    id={'scale-set-type-split'}
                    name={'scale-set-type'}
                    value={'split'}
                    icon={UnlockIcon}
                    checked={spacingScales === 'split'}
                    onChange={setSpacingScales}
                />
            </Group>

            <ScaleForm
                title={spacingScales === 'shared' ? 'Margin & Padding' : 'Margin'}
                id={'margin'}
                type={'spacing'}
                scaleAtom={marginScaleAtom}
                scaleBoundsAtom={marginScaleBoundsAtom}
                scaleSelectionsAtom={marginScaleSelectionsAtom}
            />
            {spacingScales === 'split' ? (
                <ScaleForm
                    title={'Padding'}
                    id={'padding'}
                    type={'spacing'}
                    scaleAtom={paddingScaleAtom}
                    scaleBoundsAtom={paddingScaleBoundsAtom}
                    scaleSelectionsAtom={paddingScaleSelectionsAtom}
                />
            ) : null}
        </RouteWrapper>
    )
}

export default SpacingRoute
