import React, { ReactElement } from 'react'
import styled from 'styled-components'

import Text from '../primitives/Text'

const IndexRouteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

const IndexRoute = () : ReactElement => {
  return (
    <IndexRouteWrapper>
      <Text as={'h1'} align={'center'}>
        Globals.
      </Text>
    </IndexRouteWrapper>
  )
}

export default IndexRoute
