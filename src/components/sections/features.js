import React from "react"
import styled from "styled-components"
import imgpagina from "../../../src/images/product/pagina.png";
import imgpago from "../../../src/images/product/pago.png";
import imgprogramador from "../../../src/images/product/programador.png";
import imgtiempo from "../../../src/images/product/cronografo.png";
import { Section, Container } from "../global"

const Features = () => (
  <Section id="caracteristicas">
    <StyledContainer>
      
      <SectionTitle>Why people choose us ?</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
        <ImageWrapper>
        <StyledImage src={imgpagina} alt="full_mvp"/>
          </ImageWrapper>
          <FeatureTitle>Full Website</FeatureTitle>
          <FeatureText>
             We build, we design and we set the hosting configuration for your website.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <ImageWrapper>
        <StyledImage src={imgpago} alt="one_payment"/>
          </ImageWrapper>
          <FeatureTitle>One payment</FeatureTitle>
          <FeatureText>
            You only pay once for the project.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <ImageWrapper>
        <StyledImage src={imgtiempo} alt="deadline"/>
          </ImageWrapper>
          <FeatureTitle>Deadline time</FeatureTitle>
          <FeatureText>
           The deadline is 2 months to build your website.
          </FeatureText>
        </FeatureItem>
        
        <FeatureItem>
        <ImageWrapper>
        <StyledImage src={imgprogramador} alt="pro_people"/>
          </ImageWrapper>
          <FeatureTitle>Experts</FeatureTitle>
          <FeatureText>We only accept best developers.</FeatureText>
        </FeatureItem>
       
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`

const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled.img`
  align-self: center;
  justify-self: center;
  width: 70px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 200px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 70px;
    display: none;
  }
`
