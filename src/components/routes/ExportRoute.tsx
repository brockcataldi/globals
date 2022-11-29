import React, { ReactElement } from 'react'

import RouteWrapper from '../elements/RouteWrapper'
import RouteHeader from '../elements/RouteHeader'

const ExportRoute = (): ReactElement => {
    return (
        <RouteWrapper>
            <RouteHeader title={'Export'} arrows={false} />
        </RouteWrapper>
    )
}

export default ExportRoute
