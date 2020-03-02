import React from "react"
import styled, { css } from "styled-components";
import { graphql, useStaticQuery, Link } from "gatsby"
import { Container, Section } from "../global"
import imgsplash from "../../../src/images/product/splash.png";
import imgweb from "../../../src/images/product/web.png";
import imgwebfull from "../../../src/images/product/webfull.png";

const GetStarted = () => {
  const data = useStaticQuery(graphql`
  query {
    file(sourceInstanceName: { eq: "product" }, name: { eq: "home" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`)

  
  return (<Section id="start"><StyledSection>
    <GetStartedContainer>
    <GetStartedTitle>Elige el proyecto deseado</GetStartedTitle>
      <FeaturesGrid>
     
      <FeatureItem>
      <CardWrapper>
        <CardHeader>
          <CardHeading>Splash landing</CardHeading>
        </CardHeader>

        <CardBody>
        <ImageWrapper>
        <StyledImage src={imgsplash} alt="splash_page"/>
          </ImageWrapper>

          <CardFieldset>
            <CardDescripton>Una sola página sencilla usada para capturar correos</CardDescripton>
            <CardDescriptonPrice>$100 USD</CardDescriptonPrice>

    
          </CardFieldset>

          <CardFieldset>
            <CardButton target="_blank" href="https://mateo796943.typeform.com/to/ltwuDB">Elegir</CardButton>
          </CardFieldset>

          
        </CardBody>
        <CardFieldset>
          <CardLink href="/terminos/">Términos y condiciones</CardLink>
          </CardFieldset>
      </CardWrapper>
      </FeatureItem>
      <FeatureItem>
      <CardWrapper>
        <CardHeader>
          <CardHeading>Landing page básica</CardHeading>
        </CardHeader>

        <CardBody>
        <ImageWrapper>
        <StyledImage src={imgweb} alt="Landing_page"/>
          </ImageWrapper>

          <CardFieldset>
            <CardDescripton>Una sola página sencilla con un formulario y captura de correos</CardDescripton>
            <CardDescriptonPrice>$250 USD</CardDescriptonPrice>

    
          </CardFieldset>

          <CardFieldset>
            <CardButton target="_blank" href="https://mateo796943.typeform.com/to/qMXRCn">Elegir</CardButton>
          </CardFieldset>

          
        </CardBody>
        <CardFieldset>
          <CardLink href="/terminos/">Términos y condiciones</CardLink>
          </CardFieldset>
      </CardWrapper>
    </FeatureItem>
    <FeatureItem>
      <CardWrapper>
        <CardHeader>
          <CardHeading>Página informativa</CardHeading>
        </CardHeader>

        <CardBody>
        <ImageWrapper>
          <StyledImage src={imgwebfull} alt="web_informativa"/>
          
          </ImageWrapper>

          <CardFieldset>
            <CardDescripton>Una página informativa con hasta 5 páginas,dos formularios y captura de correos</CardDescripton>
            <CardDescriptonPrice>$500 USD</CardDescriptonPrice>

    
          </CardFieldset>

          <CardFieldset>
            <CardButton target="_blank" href="https://mateo796943.typeform.com/to/E9pMz9">Elegir</CardButton>
          </CardFieldset>
          
          
        </CardBody>
        <CardFieldset>
          <CardLink href="/terminos/">Términos y condiciones</CardLink>
          </CardFieldset>
      </CardWrapper>
      </FeatureItem>
      
     
      </FeaturesGrid>
    </GetStartedContainer>
  </StyledSection></Section>)
}

export default GetStarted

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 4%, 100% 100%, 0% 100%);
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const TryItButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

const Subtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
  padding-top: 16px;
  font-size: 14px;
  color: ${props => props.theme.color.primary};
`

export const CardGallery = styled.div`
margin: 5px;
border: 1px solid #ccc;
float: left;
width: 180px;
`;


export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const CardHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const CardIcon = styled.span`
  color: #666;
  cursor: pointer;
  opacity: .25;
  transition: opacity .25s ease-in;

  &:hover {
    opacity: .95;
  }

  ${props =>
    props.big &&
    css`
      font-size: 26px;
    `}

  ${props =>
    props.eye &&
    css`
      position: absolute;
      top: 8px;
      right: 0;
    `}

  ${props =>
    props.small &&
    css`
      font-size: 14px;
    `}
`;

export const CardDescripton = styled.p`
text-align: center;
`;
export const CardDescriptonPrice = styled.h3`
text-align: center;
color : #77dd77
`;

export const CardOptions = styled.ul`
  padding: 0;
  margin: 16px 0 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`;

export const CardOptionsItem = styled.li`
  &:nth-of-type(n + 2) {
    margin-left: 16px;
  }
`;

export const CardButton = styled.a`
  display: block;
  width: 100%;
  text-decoration:none;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const CardLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  padding : 20px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;

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
  width: 200px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 70px;
    display: none;
  }
`


const FeaturesGrid = styled.div`
  max-width: 950px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
