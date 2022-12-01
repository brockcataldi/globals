import React, { ReactElement } from 'react'

import RouteWrapper from '../elements/RouteWrapper'
import RouteHeader from '../elements/RouteHeader'

const TypeViewsRoute = (): ReactElement => {
    return (
        <RouteWrapper>
            <RouteHeader arrows={true} />
        </RouteWrapper>
    )
}

export default TypeViewsRoute
