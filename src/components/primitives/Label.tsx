import React from 'react'
import styled from 'styled-components'

import Descriptor, { IDescriptorProps } from './Descriptor'

interface ILabelStyleProps {
    show: boolean
}

interface ILabelProps extends IDescriptorProps, ILabelStyleProps {
    htmlFor: string
    className?: string
}

const LabelElement = styled.label<ILabelStyleProps>`
    ${(props) => {
        if (props.show) {
            return `
                display: block;
                font-size: 1rem;
                text-transform: lowercase;
                margin-bottom: 0.25rem;
                font-weight: 600;
            `
        } else {
            return `
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                border: 0;
            `
        }
    }}
`

const Label = ({
    htmlFor,
    className,
    show,
    label,
    icon,
    iconAfter = false,
    iconTitle,
    showText = true,
}: ILabelProps) => {
    return (
        <LabelElement htmlFor={htmlFor} className={className} show={show}>
            <Descriptor
                icon={icon}
                label={label}
                iconAfter={iconAfter}
                iconTitle={iconTitle}
                showText={showText}
            />
        </LabelElement>
    )
}

export default Label
export { LabelElement }
