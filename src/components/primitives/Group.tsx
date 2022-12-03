import styled from 'styled-components'

import { ButtonElement } from './Button'
import { LinkElement } from './Link'
import { FieldWrapper } from './Field'
import { LabelElement } from './Label'

const Group = styled.div`
    display: flex;
    flex-direction: row;

    ${ButtonElement},
    ${LinkElement},
    ${FieldWrapper} input[type='checkbox'] + ${LabelElement} {
        border-radius: 0;
    }

    ${ButtonElement}:first-child,
    ${LinkElement}:first-child,
    ${FieldWrapper}:first-child input[type='checkbox'] + ${LabelElement} {
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }

    ${ButtonElement}:not(:first-child),
    ${LinkElement}:not(:first-child),
    ${FieldWrapper}:not(:first-child) input[type='checkbox'] + ${LabelElement} {
        border-left: none;
    }

    ${ButtonElement}:last-child,
    ${LinkElement}:last-child,
    ${FieldWrapper}:last-child input[type='checkbox'] + ${LabelElement} {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }
`

export default Group
