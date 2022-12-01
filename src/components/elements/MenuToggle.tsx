import React, { KeyboardEvent, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import gsap from 'gsap'

import Text from '../primitives/Text'

import { menuOpenAtom } from '../../data/store'

interface IMenuToggleProps {
    className?: string
}

const MenuToggleWrapper = styled.div``

const MenuToggleLabel = styled.label`
    appearance: none;
    -webkit-appearance: none;
    padding: 0.25rem;
    border: 2px solid black;
    border-radius: 0.5rem;
    cursor: pointer;
    position: relative;
    background-color: white;
    box-sizing: border-box;
    cursor: pointer;
    display: block;
`

const MenuToggleDots = styled.div`
    width: 32px;
    height: 32px;
    position: relative;
`

const MenuToggleDot = styled.span`
    width: 6px;
    height: 6px;
    display: block;
    position: absolute;
    background-color: black;
    border-radius: 8px;
    top: 13px;
    left: 0;
    opacity: 1;
`

const MenuToggleDotLeft = styled(MenuToggleDot)`
    left: 3px;
`

const MenuToggleDotMiddle = styled(MenuToggleDot)`
    left: 13px;
`

const MenuToggleDotRight = styled(MenuToggleDot)`
    left: 23px;
`

const MenuToggleInput = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`

const MenuToggle = ({ className }: IMenuToggleProps) => {
    const [menuOpen, setMenuOpen] = useRecoilState(menuOpenAtom)

    const dotLeft = useRef<HTMLSpanElement>(null)
    const dotMiddle = useRef<HTMLSpanElement>(null)
    const dotRight = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (menuOpen === true) {
            gsap.to(dotLeft.current, {
                width: '26px',
                height: '3px',
                top: '14.5px',
                left: '3px',
                rotation: '45deg',
                duration: 0.1,
            })

            gsap.to(dotMiddle.current, {
                opacity: 0,
                duration: 0.1,
            })

            gsap.to(dotRight.current, {
                width: '26px',
                height: '3px',
                top: '14.5px',
                left: '3px',
                rotation: '-45deg',
                duration: 0.1,
            })
        } else {
            gsap.to(dotLeft.current, {
                width: '6px',
                height: '6px',
                top: '13px',
                left: '3px',
                rotation: '0',
                duration: 0.1,
            })

            gsap.to(dotMiddle.current, {
                opacity: 1,
                duration: 0.1,
            })

            gsap.to(dotRight.current, {
                width: '6px',
                height: '6px',
                top: '13px',
                left: '23px',
                rotation: '0',
                duration: 0.1,
            })
        }
    }, [menuOpen])

    const onChange = () => {
        setMenuOpen(!menuOpen)
    }

    const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            setMenuOpen(!menuOpen)
        }
    }

    return (
        <MenuToggleWrapper className={className}>
            <MenuToggleInput
                id={'menu-toggle'}
                name={'menu-toggle'}
                checked={menuOpen}
                onChange={onChange}
            />
            <MenuToggleLabel htmlFor={'menu-toggle'} tabIndex={0} onKeyDown={onKeyDown}>
                <MenuToggleDots>
                    <MenuToggleDotLeft ref={dotLeft} />
                    <MenuToggleDotMiddle ref={dotMiddle} />
                    <MenuToggleDotRight ref={dotRight} />
                    <Text show={false}>Menu</Text>
                </MenuToggleDots>
            </MenuToggleLabel>
        </MenuToggleWrapper>
    )
}

export type { IMenuToggleProps }
export default MenuToggle
export {
    MenuToggleWrapper,
    MenuToggleInput,
    MenuToggleLabel,
    MenuToggleDots,
    MenuToggleDot,
    MenuToggleDotLeft,
    MenuToggleDotMiddle,
    MenuToggleDotRight,
}
