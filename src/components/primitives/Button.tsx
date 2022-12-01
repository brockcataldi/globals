import React, { MouseEvent, ReactElement } from 'react'
import styled from 'styled-components'
import Descriptor, { IDescriptorProps } from './Descriptor'

interface IButtonStyleProps {
    size?: 'normal' | 'square'
}

interface IButtonProps extends IDescriptorProps, IButtonStyleProps {
    className?: string
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const ButtonElement = styled.button<IButtonStyleProps>`
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

    ${(props) => {
        return props.size === 'normal'
            ? `
        padding: 0 0.5rem;
        height: 36px;
        `
            : `
        width: 44px;
        height: 44px;
        padding: 0;
        `
    }}
`

const Button = ({
    icon,
    label,
    onClick,
    className,
    iconAfter = false,
    iconTitle,
    showText = true,
    size = 'normal',
}: IButtonProps): ReactElement => {
    return (
        <ButtonElement onClick={onClick} className={className} size={size}>
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
