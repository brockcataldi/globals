import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Link as A } from 'react-router-dom'
import Descriptor, { IDescriptorProps } from './Descriptor'

interface ILinkStyleProps {
    size?: 'normal' | 'square'
}

interface ILinkProps extends IDescriptorProps, ILinkStyleProps {
    to: string
    className?: string
}

const LinkElement = styled(A)<ILinkStyleProps>`
    appearance: none;
    -webkit-apperance: none;
    border: 2px solid black;
    border-radius: 0.5rem;
    background-color: white;
    cursor: pointer;
    box-sizing: border-box;
    color: black;
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    display: grid;
    place-items: center;

    ${(props) => {
        return props.size === 'normal'
            ? `
        padding: 0 0.5rem;
        height: 36px;
        `
            : `
        width: 44px;
        height: 44px;
        `
    }}
`

const Link = ({
    icon,
    iconTitle,
    iconAfter,
    label,
    showText = true,
    to,
    size = 'normal',
    className,
}: ILinkProps): ReactElement => {
    return (
        <LinkElement to={to} className={className} size={size}>
            <Descriptor
                icon={icon}
                label={label}
                iconAfter={iconAfter}
                iconTitle={iconTitle}
                showText={showText}
            />
        </LinkElement>
    )
}

export type { ILinkProps }
export default Link
export { LinkElement }
