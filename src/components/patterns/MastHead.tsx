import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Menu from './Menu'

const MastHeadWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
`

const MastHead = () => {
    return (
        <MastHeadWrapper>
            <Header />
            <Menu />
        </MastHeadWrapper>
    )
}

export default MastHead
