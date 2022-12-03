import React, { FunctionComponent, SVGProps } from 'react'
import styled from 'styled-components'

import Icon from './Icon'
import Text from './Text'

interface IDescriptorProps {
    label: string
    showText?: boolean
    icon?: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>
    iconTitle?: string | undefined
    iconAfter?: boolean
}

const DescriptorWrapper = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`

const DescriptorText = styled(Text)`
    white-space: nowrap;
`

const Descriptor = ({
    label,
    showText = true,
    icon,
    iconAfter = false,
    iconTitle,
}: IDescriptorProps) => {
    return (
        <DescriptorWrapper>
            {iconAfter === false && icon !== undefined ? (
                <Icon icon={icon} title={iconTitle}></Icon>
            ) : null}
            <DescriptorText as={'span'} show={showText}>
                {label}
            </DescriptorText>
            {iconAfter === true && icon !== undefined ? (
                <Icon icon={icon} title={iconTitle}></Icon>
            ) : null}
        </DescriptorWrapper>
    )
}

export type { IDescriptorProps }
export default Descriptor
export { DescriptorWrapper }
