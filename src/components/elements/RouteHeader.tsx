import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

import { WORKSPACE_ROUTES } from '../../data/constants'

import Group from '../primitives/Group'
import Link from '../primitives/Link'
import Text from '../primitives/Text'

import { ArrowRightIcon, ArrowLeftIcon } from '../icons/icons'

interface IRouteHeaderProps {
    arrows: boolean
    title: string
}

const RouteHeaderWrapper = styled.header`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

const RouteHeader = ({ title, arrows }: IRouteHeaderProps) => {
    const { pathname } = useLocation()

    const routeIndex = WORKSPACE_ROUTES.findIndex((value) => {
        return value.link === pathname
    })

    const backLink = routeIndex > 0 ? WORKSPACE_ROUTES[routeIndex - 1] : null
    const nextLink =
        routeIndex < WORKSPACE_ROUTES.length - 1 ? WORKSPACE_ROUTES[routeIndex + 1] : null

    return (
        <RouteHeaderWrapper>
            <Text as={'h2'}>{title}</Text>
            {arrows === false ? null : (
                <Group>
                    {backLink === null ? null : (
                        <Link to={backLink.link} label={backLink.text} icon={ArrowLeftIcon} />
                    )}
                    {nextLink === null ? null : (
                        <Link
                            to={nextLink.link}
                            label={nextLink.text}
                            icon={ArrowRightIcon}
                            iconAfter={true}
                        />
                    )}
                </Group>
            )}
        </RouteHeaderWrapper>
    )
}

export type { IRouteHeaderProps }
export default RouteHeader
export { RouteHeaderWrapper }
