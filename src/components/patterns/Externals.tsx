import React, { ChangeEvent, useEffect } from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

import { externalsAtom } from '../../data/store'

import InputTextArea from '../elements/InputTextArea'

const ExternalsWrapper = styled.div``

const Externals = () => {
    const [externals, setExternals] = useRecoilState(externalsAtom)

    useEffect(() => {
        if (externals !== '' && externals !== ' ') {
            const a: HTMLLinkElement[] = []

            const p = new DOMParser()
            const d = p.parseFromString(externals, 'text/html')
            const n = d.querySelectorAll('link')

            n.forEach((v: HTMLLinkElement) => {
                a.push(v)
            })

            a.map((v: HTMLLinkElement) => {
                document.head.appendChild(v)
            })

            return () => {
                a.map((v: HTMLLinkElement) => {
                    document.head.removeChild(v)
                })
            }
        }
    }, [externals])

    const onChangeExternals = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setExternals(event.target.value)
    }

    return (
        <ExternalsWrapper>
            <InputTextArea
                label={'External Stylesheets'}
                useLabel={true}
                showLabel={true}
                id={'externals'}
                name={'externals'}
                value={externals}
                onChange={onChangeExternals}
                placeholder={
                    '<link href="https://fonts.googleapis.com/css2?family=Example+Font&display=swap" rel="stylesheet">'
                }
            />
        </ExternalsWrapper>
    )
}

export default Externals
