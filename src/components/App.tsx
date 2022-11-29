import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import MastHead from './patterns/MastHead'

const AppWrapper = styled.div``
const AppOutlet = styled.main``

const App = (): ReactElement => {
    return (
        <AppWrapper>
            <MastHead />
            <AppOutlet>
                <Outlet />
            </AppOutlet>
        </AppWrapper>
    )
}

export default App
