import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'

import InputUnit from '../elements/InputUnit'
import InputSelect from '../elements/InputSelect'
import InputNumber from '../elements/InputNumber'

import { SCALE_RATIOS } from '../../data/constants'
import IUnit from '../../data/models/IUnit'
import IScale from '../../data/models/IScale'

interface IScaleProps {
    id: string
    name: string
    scale: IScale
    onChange: (scale: IScale) => void
}

const ScaleWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
`

const Scale = ({ id, name, scale, onChange }: IScaleProps) => {
    const [ratio, setRatio] = useState<number | string>(
        SCALE_RATIOS.includes(scale.ratio) ? scale.ratio : 'custom',
    )

    const onChangeUnit = (unit: IUnit) => {
        onChange({ ...scale, base: unit })
    }

    const onChangeRatio = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value
        setRatio(value)
        if (value != 'custom') {
            onChange({ ...scale, ratio: Number(value) })
        }
    }

    const onChangeCustomRatio = (event: ChangeEvent<HTMLInputElement>) => {
        onChange({ ...scale, ratio: Number(event.target.value) })
    }

    return (
        <ScaleWrapper>
            <InputUnit id={id} title={'Base'} value={scale.base} onChange={onChangeUnit} />
            <InputSelect
                id={id}
                name={name}
                label={'Ratio'}
                showLabel={true}
                useLabel={true}
                value={ratio}
                onChange={onChangeRatio}
            >
                <option value={1.067}>1.067 - Minor Second</option>
                <option value={1.125}>1.125 - Major Second</option>
                <option value={1.2}>1.200 - Minor Third</option>
                <option value={1.25}>1.250 - Major Third</option>
                <option value={1.333}>1.333 - Perfect Fourth</option>
                <option value={1.414}>1.414 - Augmented Fourth</option>
                <option value={1.5}>1.500 - Perfect Fifth</option>
                <option value={1.618}>1.618 - Golden Ratio</option>
                <option value={'custom'}>Custom</option>
            </InputSelect>
            {ratio === 'custom' ? (
                <InputNumber
                    id={id}
                    name={name}
                    label={'Custom Ratio'}
                    showLabel={true}
                    useLabel={true}
                    value={scale.ratio}
                    onChange={onChangeCustomRatio}
                />
            ) : null}
        </ScaleWrapper>
    )
}

export type { IScaleProps }
export default Scale
export { ScaleWrapper }
