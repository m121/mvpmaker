import React from "react"
import styled, { css } from "styled-components";
import { graphql, useStaticQuery, Link } from "gatsby"
import { Container, Section } from "../global"
import mano from "../../../src/images/product/mano.png";
import lista from "../../../src/images/product/lista.png";
import meta from "../../../src/images/product/meta.png";
import codigo from "../../../src/images/product/codigo.png"

const HowTo = () => {
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

  
  return (<Section id="howto"><StyledSection>
    <GetStartedContainer>
    <GetStartedTitle>How we do it?</GetStartedTitle>
      <FeaturesGrid>
     
      <FeatureItem>
      <StyledImage src={mano} width="20" alt="choose_project"/>
      <CardDescripton>1. Choose the project.</CardDescripton>
     
      </FeatureItem>
      <FeatureItem>
      <StyledImage src={codigo} alt="freelancers_take"/>
      <CardDescripton>2. A developer freelancer take the project.</CardDescripton>
      
    </FeatureItem>
    <FeatureItem>
    <StyledImage src={lista} alt="list_goals"/>
    <CardDescripton>3. Set goals, schedule dateline with your developer and then we send you the payment link. 
    </CardDescripton>
      
      </FeatureItem>
      <FeatureItem>
      <StyledImage src={meta} alt="deadline_project"/>
    <CardDescripton>4. We confirm your full project and we pay do the payment.
                       
    </CardDescripton>
      
      </FeatureItem>
      
      
     
      </FeaturesGrid>
    </GetStartedContainer>
  </StyledSection></Section>)
}

export default HowTo

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
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



const StyledImage = styled.img`
  align-self: center;
  justify-self: center;
  width: 100px;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
