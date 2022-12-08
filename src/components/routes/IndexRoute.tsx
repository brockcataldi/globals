import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { PlusIcon } from '../vectors/vectors'

import Text from '../primitives/Text'
import Link from '../primitives/Link'

const IndexRouteWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    gap: 2rem;
    box-sizing: border-box;
    padding: 1rem;
`

const IndexTitle = styled(Text)`
    font-size: 8rem;
`

const IndexRoute = (): ReactElement => {
    return (
        <IndexRouteWrapper>
            <IndexTitle as={'h1'} align={'center'}>
                Globals
            </IndexTitle>
            <Link
                icon={PlusIcon}
                iconAfter={true}
                label={'New Project'}
                showText={true}
                to={'/type-views'}
            />
            <Text align={'center'}>
                There will be more buttons here <strong>soon</strong>, there just aren&apos;t any
                right now
            </Text>
        </IndexRouteWrapper>
    )
}

export default IndexRoute
