import React, { FunctionComponent, ReactElement } from 'react'
import styled from 'styled-components'

import Label from './Label'

interface IFieldProps {
    childrenBehind?: boolean
    htmlFor?: string
    label?: string
    showLabel?: boolean
    useLabel?: boolean
    children?: ReactElement | ReactElement[]
}

const FieldWrapper = styled.div``

const Field: FunctionComponent<IFieldProps> = ({
    label,
    useLabel,
    showLabel = true,
    htmlFor,
    children,
    childrenBehind = true,
}: IFieldProps) => {
    return (
        <FieldWrapper>
            {childrenBehind === false && children !== undefined ? children : null}
            {useLabel === true && label !== undefined && htmlFor !== undefined ? (
                <Label show={showLabel} htmlFor={htmlFor} label={label} />
            ) : null}
            {childrenBehind === true && children !== undefined ? children : null}
        </FieldWrapper>
    )
}

export type { IFieldProps }
export default Field
export { FieldWrapper }
