import React from 'react'
import styled from 'styled-components'

import Text from '../primitives/Text'
import { Imprint } from '../vectors/vectors'

const FooterWrapper = styled.footer`
    margin-top: 2rem;
`
const FooterContent = styled.div`
    border-top: 2px solid black;
    padding: 2rem 0;
    max-width: 1024px;
    margin: 0 auto;
    display: grid;
    place-items: center;
    box-sizing: border-box;
`

const FooterImprintWrapper = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 0.5rem;
`

const FooterImprintText = styled(Text)`
    text-align: center;
`

const FooterLink = styled.a``

const FooterSignature = styled(Imprint)`
    width: 3rem;
`

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterImprintWrapper>
                    <FooterImprintText as={'span'}>Created out of spite by</FooterImprintText>
                    <FooterLink href={'https://example.com'} target={'_blank'}>
                        <FooterSignature />
                        <Text as={'span'} show={false}>
                            Brock
                        </Text>
                    </FooterLink>
                </FooterImprintWrapper>
            </FooterContent>
        </FooterWrapper>
    )
}

export default Footer
export {
    FooterWrapper,
    FooterContent,
    FooterImprintWrapper,
    FooterImprintText,
    FooterLink,
    FooterSignature,
}
