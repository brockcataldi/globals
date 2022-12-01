import React from 'react'
import styled from 'styled-components'

import Group from '../primitives/Group'
import Link from '../primitives/Link'
import Text from '../primitives/Text'

interface IRouteHeaderProps {
    title: string

    arrows: boolean
    backTo?: string
    backLabel?: string
    nextTo?: string
    nextLabel?: string
}

const RouteHeaderWrapper = styled.header`
    padding: 2rem 0;
`

const RouteHeader = ({
    title,
    arrows,
    backTo,
    nextTo,
    backLabel = 'Back',
    nextLabel = 'Next',
}: IRouteHeaderProps) => {
    return (
        <RouteHeaderWrapper>
            <Text as={'h2'}>{title}</Text>
            {arrows === false ? null : (
                <Group>
                    {backTo === undefined ? null : <Link to={backTo} label={backLabel} />}
                    {nextTo === undefined ? null : <Link to={nextTo} label={nextLabel} />}
                </Group>
            )}
        </RouteHeaderWrapper>
    )
}

export type { IRouteHeaderProps }
export default RouteHeader
export { RouteHeaderWrapper }
