import React, { Component } from 'react';
//import Link from 'react-router/Link'
import { Navbar, Nav, NavItem, Grid } from 'react-bootstrap';

import LogoImg from '../../images/header_logo.png';

class Header extends Component {
  render () {
    return (
      <div className="header">
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/"><img src={ LogoImg } alt="logo" className="img-logo" /></a>
              </Navbar.Brand>
               <Navbar.Toggle />
            </Navbar.Header>
              <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} href="/about-tst">TST소개</NavItem>
                <NavItem eventKey={2} href="/about-company">회사소개</NavItem>
                <NavItem eventKey={2} href="/payment">결제하기</NavItem>
                <NavItem eventKey={4} href="/register">회원가입</NavItem>
                <NavItem eventKey={5} href="/login">로그인</NavItem>
              </Nav>
              </Navbar.Collapse>
             
          </Grid>
        </Navbar>
      </div> 
    );
  }
}

export default Header;