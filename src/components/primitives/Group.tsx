import styled from 'styled-components'

import { ButtonElement } from './Button'
import { LinkElement } from './Link'

const Group = styled.div`
    display: flex;
    flex-direction: row;

    ${ButtonElement},
    ${LinkElement} {
        border-radius: 0;
    }

    ${ButtonElement}:first-child,
    ${LinkElement}:first-child {
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }

    ${ButtonElement}:not(:first-child),
    ${LinkElement}:not(:first-child) {
        border-left: none;
    }

    ${ButtonElement}:last-child,
    ${LinkElement}:last-child {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }
`

export default Group
