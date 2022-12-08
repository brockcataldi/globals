import React, { ReactElement } from 'react'
// import { useRecoilState } from 'recoil'

import RouteWrapper from '../elements/RouteWrapper'
import RouteHeader from '../elements/RouteHeader'
import Externals from '../patterns/Externals'
import TypeViews from '../patterns/TypeViews'

const TypeViewsRoute = (): ReactElement => {
    return (
        <RouteWrapper>
            <RouteHeader title={'Type Views'} arrows={true} />
            <Externals />
            <TypeViews />
        </RouteWrapper>
    )
}

export default TypeViewsRoute
