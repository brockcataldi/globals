import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

import InputFontStyle from '../elements/InputFontStyle'
import InputFontVariant from '../elements/InputFontVariant'
import InputFontWeight from '../elements/InputFontWeight'
import InputText from '../elements/InputText'
import Group from '../primitives/Group'
import Button from '../primitives/Button'

import { CopyIcon, TrashIcon } from '../vectors/vectors'

import ITypeView from '../../data/models/ITypeView'

interface ITypeViewProps {
    index: number
    id: string | number
    typeView: ITypeView
    onChange: (typeView: ITypeView, index: number) => void
    onCopy: (typeView: ITypeView, index: number) => void
    onDelete: (index: number) => void
}

const TypeViewWrapper = styled.div`
    border: 2px solid black;
    padding: 1rem;
    border-radius: 0.5rem;
`

const TypeViewDisplay = styled.p`
    margin: 0;
    font-size: 1.5rem;
`

const TypeViewRow = styled.div`
    display: grid;
    gap: 1rem;
    margin: 1rem 0;
    align-items: center;

    &:nth-child(2) {
        grid-template-columns: 1fr 3fr;
    }

    &:nth-child(3) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    &:last-child {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }
`

const TypeView = ({ id, index, typeView, onChange, onCopy, onDelete }: ITypeViewProps) => {
    const handleChange = (key: string, value: string) => {
        onChange({ ...typeView, [key]: value }, index)
    }

    const onChangeLabel = (event: ChangeEvent<HTMLInputElement>) => {
        handleChange('label', event.target.value)
    }

    const onChangeFamilies = (event: ChangeEvent<HTMLInputElement>) => {
        handleChange('families', event.target.value)
    }

    const onChangeWeight = (event: ChangeEvent<HTMLSelectElement>) => {
        handleChange('weight', event.target.value)
    }

    const onChangeStyle = (event: ChangeEvent<HTMLSelectElement>) => {
        handleChange('style', event.target.value)
    }

    const onChangeVariant = (event: ChangeEvent<HTMLSelectElement>) => {
        handleChange('variant', event.target.value)
    }

    const onClickCopy = () => {
        onCopy(typeView, index)
    }

    const onClickDelete = () => {
        onDelete(index)
    }

    return (
        <TypeViewWrapper>
            <TypeViewDisplay
                style={{
                    fontFamily: typeView.families,
                    fontWeight: typeView.weight,
                    fontStyle: typeView.style,
                    fontVariant: typeView.variant,
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </TypeViewDisplay>
            <TypeViewRow>
                <InputText
                    id={`type-view--label-${id}`}
                    name={`type-view--label-${id}`}
                    value={typeView.label}
                    onChange={onChangeLabel}
                    label={'Label'}
                    showLabel={true}
                    useLabel={true}
                />
                <InputText
                    id={`type-view--families-${id}`}
                    name={`type-view--families-${id}`}
                    value={typeView.families}
                    onChange={onChangeFamilies}
                    label={'Families'}
                    showLabel={true}
                    useLabel={true}
                />
            </TypeViewRow>
            <TypeViewRow>
                <InputFontWeight
                    id={`type-view--families-${id}`}
                    name={`type-view--families-${id}`}
                    value={typeView.weight}
                    onChange={onChangeWeight}
                />
                <InputFontStyle
                    id={`type-view--style-${id}`}
                    name={`type-view--style-${id}`}
                    value={typeView.style}
                    onChange={onChangeStyle}
                />
                <InputFontVariant
                    id={`type-view--variant-${id}`}
                    name={`type-view--variant-${id}`}
                    value={typeView.variant}
                    onChange={onChangeVariant}
                />
            </TypeViewRow>
            <TypeViewRow>
                <Group>
                    <Button
                        icon={CopyIcon}
                        label='Copy'
                        showText={false}
                        onClick={onClickCopy}
                        size={'square'}
                    />
                    <Button
                        icon={TrashIcon}
                        label='Delete'
                        showText={false}
                        onClick={onClickDelete}
                        size={'square'}
                    />
                </Group>
            </TypeViewRow>
        </TypeViewWrapper>
    )
}

export type { ITypeViewProps }
export default TypeView
export { TypeViewWrapper, TypeViewRow, TypeViewDisplay }
