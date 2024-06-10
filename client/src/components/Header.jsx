import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png'
import { Container } from '../styles/Container';
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarParent = styled.div`
  transition: all .4s;
  box-shadow: ${(props) => (props.scrolled ? '0px 2px 15px rgba(0, 0, 0, 0.1)' : 'none')}; 
  position: ${(props) => (props.scrolled ? 'fixed' : 'relative')};
  top: 0;
  left: 0;
  right: 0;
  z-index: 999; 
  background-color: #fff;

  .header-body{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  background-color: #fff;
  width: 100%;
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

  @media (max-width: 992px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #1f3c9e;
  font-size: 15px;
  font-family: 'openSansFont', sans-serif;
  cursor: pointer;
`;

const MobileNavbar = styled.div`
  display: none;

  .icons{
    color: ${props => props.theme.colors.primaryColor};
    font-size: 24px;
    cursor: pointer;
  }

  @media (max-width: 992px) {
    display: block;
  }
`;

const MbBody = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;

  & > div {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    z-index: 1000;
    width: 90%;
    height: 80%;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 20px 0;

    .btn{
        width: 100%;
        display: inline-block;
    }
  }

  a {
    color: #000;
    text-decoration: none;
    font-size: 18px;
  }

  .close-icon {
    position: absolute;
    top: -36px;
    right: 0;
    font-size: 24px;
    cursor: pointer;
    color: #fff;
  }
`;

const Header = ({ aboutSectionRef, serviceSectionRef, contactSectionRef }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

    setMenuOpen(false)
  };

  return (
    <>
      <NavbarParent scrolled={scrolled ? scrolled : undefined}>
        <Container>
          <div className='header-body'>
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
            <MobileNavbar>
              <FaBars className='icons' onClick={() => setMenuOpen(true)} />
            </MobileNavbar>
          </div>
        </Container>
      </NavbarParent>
      {menuOpen && (
        <MbBody>
          <div>
            <FaTimes className="close-icon" onClick={() => setMenuOpen(false)} />
            <ul>
              <li><NavLink onClick={scrollToHome}>Home</NavLink></li>
              <li><NavLink onClick={() => { scrollToSection(aboutSectionRef); setMenuOpen(false); }}>About</NavLink></li>
              <li><NavLink onClick={() => { scrollToSection(serviceSectionRef); setMenuOpen(false); }}>Services</NavLink></li>
              <li><NavLink onClick={() => { scrollToSection(contactSectionRef); setMenuOpen(false); }} className='btn'>Contact us</NavLink></li>
            </ul>
          </div>
        </MbBody>
      )}
    </>
  );
};

export default Header;
