import styled from 'styled-components'

interface ITextProps {
  size?: string
  align?: string
  case?: string
}

const Text = styled.p<ITextProps>`
  margin: 0;
  display: block;
  width: 100%;

  ${(props) => {
    return `text-transform: ${props.case ? props.case : 'lowercase'};`
  }}
  ${(props) => {
    return `text-align: ${props.align ? props.align : 'left'};`
  }}
`

export type { ITextProps }
export default Text
