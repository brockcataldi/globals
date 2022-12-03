import React, { ReactElement } from 'react'

import RouteHeader from '../elements/RouteHeader'
import RouteWrapper from '../elements/RouteWrapper'

const ExportRoute = (): ReactElement => {
    return (
        <RouteWrapper>
            <RouteHeader title={'Export'} arrows={false} />
        </RouteWrapper>
    )
}

export default ExportRoute
