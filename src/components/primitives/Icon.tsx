import React, { ReactElement, FunctionComponent, SVGProps } from 'react'
import styled from 'styled-components'

interface IIconProps {
    icon: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>
    title?: string | undefined
}

const IconElement = styled.div`
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
`
const Icon = ({ icon, title }: IIconProps): ReactElement => {
    const IconNode = icon

    return (
        <IconElement>
            <IconNode title={title}></IconNode>
        </IconElement>
    )
}

export type { IIconProps }
export default Icon
export { IconElement }
