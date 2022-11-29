import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

import Text from '../primitives/Text'
import gsap from 'gsap'
import MenuToggle from '../elements/MenuToggle'
import Link from '../primitives/Link'
import { DownloadIcon } from '../icons/icons'

const HeaderWrapper = styled.header`
    padding: 1rem;
    width: calc(100% - 2rem);
    box-sizing: border-box;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    max-width: 1024px;
    border-radius: 0.5rem;
    background-color: white;
    border: 2px solid black;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    opacity: 0;
    visibility: hidden;
    top: 0;
    z-index: 20;
`

const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
`

const HeaderTitle = styled(Text)`
    width: unset;
`

const Header = () => {
    const location = useLocation()

    const wrapperRef = useRef<HTMLElement>(null)
    const titleRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        if (location.pathname !== '/') {
            gsap.to(wrapperRef.current, {
                top: '1rem',
                autoAlpha: 1,
                duration: 0.3,
            })
        } else {
            gsap.to(wrapperRef.current, {
                top: '0rem',
                autoAlpha: 0,
                duration: 0.3,
            })
        }
    }, [location])

    return (
        <HeaderWrapper ref={wrapperRef}>
            <HeaderTitle ref={titleRef} as={'h1'} align={'center'}>
                Globals
            </HeaderTitle>
            <HeaderActions>
                <Link
                    to={'/export'}
                    label={'Export'}
                    showText={false}
                    icon={DownloadIcon}
                    size={'square'}
                />
                <MenuToggle />
            </HeaderActions>
        </HeaderWrapper>
    )
}

export default Header
