import React, { FunctionComponent, ReactElement, SVGProps } from 'react'
import styled from 'styled-components'

import Label from './Label'

interface IFieldProps {
    childrenBehind?: boolean
    htmlFor?: string
    label?: string
    showLabel?: boolean
    useLabel?: boolean
    children?: ReactElement | ReactElement[]
    className?: string
    icon?: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>
    iconTitle?: string | undefined
    iconAfter?: boolean
}

const FieldWrapper = styled.div``

const Field: FunctionComponent<IFieldProps> = ({
    label,
    useLabel,
    showLabel = true,
    htmlFor,
    children,
    childrenBehind = true,
    className,
    icon,
    iconTitle,
    iconAfter,
}: IFieldProps) => {
    return (
        <FieldWrapper className={className}>
            {childrenBehind === false && children !== undefined ? children : null}
            {useLabel === true && label !== undefined && htmlFor !== undefined ? (
                <Label
                    show={showLabel}
                    htmlFor={htmlFor}
                    label={label}
                    icon={icon}
                    iconTitle={iconTitle}
                    iconAfter={iconAfter}
                />
            ) : null}
            {childrenBehind === true && children !== undefined ? children : null}
        </FieldWrapper>
    )
}

export type { IFieldProps }
export default Field
export { FieldWrapper }
