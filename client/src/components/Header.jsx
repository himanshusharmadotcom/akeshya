import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png'

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 0px;
  background-color: #fff;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
    width: 54px;
    margin-right: 10px;
    padding-bottom: 5px;
    margin: 0;
    max-height: 70px;
`;

const LogoText = styled.h1`
  color: #1f3c9e;
  font-size: 30px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 1px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #1f3c9e;
  font-size: 15px;
  font-family: 'openSansFont', sans-serif;
`;

const Header = () => {
    return (
        <Navbar>
            <Logo>
                <LogoImage src={logo} alt="Logo" />
                <LogoText>AKESHYA</LogoText>
            </Logo>
            <NavLinks>
                <NavLink href="#">Home</NavLink>
                <NavLink href="#">About</NavLink>
                <NavLink href="#">Services</NavLink>
                <NavLink href="#" className='btn'>Contact us</NavLink>
            </NavLinks>
        </Navbar>
    );
};

export default Header;
