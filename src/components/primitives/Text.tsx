import styled from 'styled-components'

interface ITextProps {
    size?: string
    align?: string
    case?: string
    show?: boolean
}

const Text = styled.p<ITextProps>`
    ${(props) => {
        return props.show === true || props.show === undefined
            ? `
			margin: 0 0 0.5rem;
			display: block;
			width: 100%;
			text-transform: ${props.case ? props.case : 'lowercase'};
			text-align: ${props.align ? props.align : 'left'};`
            : `
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			border: 0;`
    }}
`

export type { ITextProps }
export default Text
