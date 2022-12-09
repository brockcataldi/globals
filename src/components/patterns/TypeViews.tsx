import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

import { typeViewsAtom } from '../../data/store'
import ITypeView from '../../data/models/ITypeView'

import TypeView from './TypeView'
import Button from '../primitives/Button'
import { PlusIcon } from '../vectors/vectors'

const TypeViewsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
`

const TypeViews = () => {
    const [typeViews, setTypeViews] = useRecoilState(typeViewsAtom)

    const onChange = (view: ITypeView, index: number) => {
        setTypeViews([...typeViews.slice(0, index), view, ...typeViews.slice(index + 1)])
    }

    const onClickAdd = () => {
        setTypeViews([
            ...typeViews,
            {
                label: '',
                families: '',
                weight: '400',
                style: 'normal',
                variant: 'normal',
            },
        ])
    }

    const onCopy = (view: ITypeView, index: number) => {
        setTypeViews([...typeViews.slice(0, index), view, view, ...typeViews.slice(index + 1)])
    }

    const onDelete = (index: number) => {
        setTypeViews([...typeViews.slice(0, index), ...typeViews.slice(index + 1)])
    }

    return (
        <TypeViewsWrapper>
            {typeViews.map((typeView, index) => {
                return (
                    <TypeView
                        key={index}
                        index={index}
                        id={index}
                        typeView={typeView}
                        onChange={onChange}
                        onCopy={onCopy}
                        onDelete={onDelete}
                    />
                )
            })}
            <Button
                label={'Add Another'}
                icon={PlusIcon}
                onClick={onClickAdd}
                size={'square'}
                showText={false}
            />
        </TypeViewsWrapper>
    )
}

export default TypeViews
export { TypeViewsWrapper }
