import React, { ReactElement } from 'react'

import RouteWrapper from '../elements/RouteWrapper'
import RouteHeader from '../elements/RouteHeader'

const TypeScaleRoute = (): ReactElement => {
    return (
        <RouteWrapper>
            <RouteHeader title={'Type Scale'} arrows={true} />
        </RouteWrapper>
    )
}

export default TypeScaleRoute
