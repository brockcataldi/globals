import React from 'react'

import RouteWrapper from '../elements/RouteWrapper'
import RouteHeader from '../elements/RouteHeader'
import TypeSheet from '../patterns/TypeSheet'

const TypeSheetRoute = () => {
    return (
        <RouteWrapper>
            <RouteHeader title={'Type Sheet'} arrows={true} />
            <TypeSheet />
        </RouteWrapper>
    )
}

export default TypeSheetRoute
