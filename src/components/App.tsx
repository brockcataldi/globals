import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const AppWrapper = styled.div``
const AppOutlet = styled.main``

const App = () : ReactElement => {
  return (
    <AppWrapper>
      <AppOutlet>
        <Outlet />
      </AppOutlet>
    </AppWrapper>
  )
}

export default App
