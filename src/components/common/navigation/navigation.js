import React, { Component } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { Menu, X } from "react-feather"
import {Link} from "gatsby"
import { Container } from "../../global"
import styled, { css } from "styled-components";
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
  ActionsContainer,
} from "./style"

const NAV_ITEMS = ["", "", ""]

export default class Navigation extends Component {
  state = {
    mobileMenuOpen: false,
    hasScrolled: false,
    email : '',
    buttontxt : 'Enviar',
    buttondisabled : false
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 32) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  handleChangeEmail = event =>{
    this.setState({email : event.target.value})
  }



  sendemails = () =>{

   if(this.state.email != ''){
  var data = {
    email_address: this.state.email,
    status: "subscribed",
    merge_fields: {
      FNAME : "",
      LNAME : ""
    }
	};
    fetch('https://cors-anywhere.herokuapp.com/https://us19.api.mailchimp.com/3.0/lists/25e4390e8b/members/', {
      method: 'POST', // or 'PUT'
   //   mode: 'no-cors',
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Authorization' :`Basic ${process.env.GATSBY_MAILCHIMP_ACCESS_TOKEN}`
      }
    }).then(res => res.json())
    .catch(error => {
      this.setState({email : '',buttontxt : '¡Hay un error!'})
      //  console.error('Error:', error)
      })
    .then(response =>{
      this.setState({email : '',buttontxt : '¡Enviado!',buttondisabled : true})
      // console.log('Success:', response)
      });

   }
   else{
    this.setState({email : '',buttontxt : '¡Escribe tu correo!'})
   }
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false })
    }
  }

  getNavAnchorLink = item => (
    <Link to="/" onClick={this.closeMobileMenu}>
      {item}
    </Link>
  )

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  )

  render() {
    const { mobileMenuOpen } = this.state

    return (
      <Nav {...this.props} scrolled={this.state.hasScrolled}>
        
        <StyledContainer>
         
          <Brand>
            <Scrollspy offset={-64} item={["home"]} currentClassName="active">
              <Link to="/" onClick={this.closeMobileMenu}>
                MVP maker
                </Link>
            </Scrollspy>
          </Brand>
          <Mobile>
           {/* <button
              onClick={this.toggleMobileMenu}
              style={{ color: "black", background: "none" }}
            >
              {this.state.mobileMenuOpen ? (
                <X size={24} alt="close menu" />
              ) : (
                <Menu size={24} alt="open menu" />
              )}
            </button>*/}
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
          <ActionsContainer>
           
          </ActionsContainer>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
        <DivEmail>
        <FormEmail>
        <Label>¿Envíame un correo cuando haya una promoción especial? </Label>
        <Input type="email" placeholder="Correo" name="email" value={this.state.email} onChange={this.handleChangeEmail}></Input>
        <Button onClick={this.sendemails} disabled={this.state.buttondisabled}>{this.state.buttontxt}</Button>

        </FormEmail>
        </DivEmail>
      </Nav>
    )
  }
  
}


export const DivEmail = styled.div`
display : block;
text-align: center;
width : 100%;
background-color : #333333;
padding 7px 0 7px 0;  
`;


export const FormEmail = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-items: center;
  
`;

export const Input = styled.input`
vertical-align: middle;
  margin: 5px 10px 5px 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  `;

export const Button = styled.button`
padding: 10px 20px;
font-family: inherit;
font-size: 14px;
font-weight: 700;
border: 1px solid #ddd;
color: white;  
border: 2px solid white; 

&:hover {
  background-color: #e5195f; /* Green */
  color: white;
}
`;

export const Label = styled.p`
margin: 5px 10px 5px 0;
color : white;
font-family : sans-serif;
`;
