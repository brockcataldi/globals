import React, { MouseEvent, ReactElement } from 'react'
import styled from 'styled-components'
import Descriptor, { IDescriptorProps } from './Descriptor'

interface IButtonProps extends IDescriptorProps {
    className?: string
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const ButtonElement = styled.button`
    appearance: none;
    -webkit-apperance: none;
    padding: 0.25rem 0.5rem;
    border: 2px solid black;
    border-radius: 0.5rem;
    background-color: white;
    cursor: pointer;
    box-sizing: border-box;
    height: 36px;
    color: black;
    font-weight: 700;
    font-size: 1rem;
`

const Button = ({
    icon,
    label,
    onClick,
    className,
    iconAfter = false,
    iconTitle,
    showText = true,
}: IButtonProps): ReactElement => {
    return (
        <ButtonElement onClick={onClick} className={className}>
            <Descriptor
                icon={icon}
                label={label}
                iconAfter={iconAfter}
                iconTitle={iconTitle}
                showText={showText}
            />
        </ButtonElement>
    )
}

export type { IButtonProps }
export default Button
export { ButtonElement }
