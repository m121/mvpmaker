import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Caracteristicas</Subtitle>
      <SectionTitle>¿Por qué elegirnos ?</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Completo MVP</FeatureTitle>
          <FeatureText>
             Creamos, diseñamos y te configuramos el hosting con tu dominio
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Único pago</FeatureTitle>
          <FeatureText>
            Pagas una vez por el proyecto completo
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Tiempo definido</FeatureTitle>
          <FeatureText>
           Máximo 2 meses para crearte tu MVP
          </FeatureText>
        </FeatureItem>
        
        <FeatureItem>
          <FeatureTitle>Profesionales</FeatureTitle>
          <FeatureText>Solamente desarrolladores profesionales</FeatureText>
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
