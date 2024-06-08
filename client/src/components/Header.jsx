import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png'
import { Container } from '../styles/Container';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  background-color: #fff;
`;

const NavbarParent = styled.div`
  transition: all .4s;
  box-shadow: ${(props) => (props.scrolled ? '0px 2px 15px rgba(0, 0, 0, 0.1)' : 'none')}; 
  position: ${(props) => (props.scrolled ? 'fixed' : 'relative')};
  top: 0;
  left: 0;
  right: 0;
  z-index: 999; 
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
  cursor: pointer;
`;

const Header = ({ aboutSectionRef, serviceSectionRef, contactSectionRef }) => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (ref) => {
    if (ref.current) {

      const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
      const offset = 120;
      const targetPosition = elementTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };  

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <NavbarParent scrolled={scrolled ? scrolled : undefined}>
      <Container>
        <Navbar>
          <Logo>
            <LogoImage src={logo} alt="Logo" />
            <LogoText>AKESHYA</LogoText>
          </Logo>
          <NavLinks>
            <NavLink onClick={scrollToHome}>Home</NavLink>
            <NavLink onClick={() => scrollToSection(aboutSectionRef)}>About</NavLink>
            <NavLink onClick={() => scrollToSection(serviceSectionRef)}>Services</NavLink>
            <NavLink onClick={() => scrollToSection(contactSectionRef)} className='btn'>Contact us</NavLink>
          </NavLinks>
        </Navbar>
        {/* <MobileNavbar>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Services</NavLink>
          <Button>Contact us</Button>
        </NavLinks>
      </MobileNavbar> */}
      </Container>
    </NavbarParent>
  );
};

export default Header;
