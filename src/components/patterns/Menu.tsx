import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { useRecoilState } from 'recoil'
import { useLocation } from 'react-router-dom'

import { WORKSPACE_ROUTES } from '../../data/constants'
import { menuOpenAtom } from '../../data/store'

import Link from '../primitives/Link'

const MenuWrapper = styled.nav`
    position: relative;
    border-radius: 0.5rem;
    background-color: white;
    border: 2px solid black;
    width: calc(100% - 2rem);
    max-width: 900px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    padding: 0.75rem;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    top: 80px;
`
const MenuList = styled.ul`
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 0.75rem;
    margin: 0;
`

const MenuItem = styled.li``

const Menu = () => {
    const location = useLocation()

    const [menuOpen, setMenuOpen] = useRecoilState(menuOpenAtom)
    const menuRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (menuOpen === true) {
            gsap.to(menuRef.current, {
                autoAlpha: 1,
                top: '112px',
                duration: 0.2,
            })
        } else {
            gsap.to(menuRef.current, {
                autoAlpha: 0,
                top: '80px',
                duration: 0.2,
            })
        }
    }, [menuOpen])

    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    return (
        <MenuWrapper ref={menuRef}>
            <MenuList>
                {WORKSPACE_ROUTES.map((WORKSPACE_ROUTE, index) => {
                    return (
                        <MenuItem key={index}>
                            <Link to={WORKSPACE_ROUTE.link} label={WORKSPACE_ROUTE.text} />
                        </MenuItem>
                    )
                })}
            </MenuList>
        </MenuWrapper>
    )
}

export default Menu
