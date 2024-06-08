import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../styles/Container';

const FooterContainer = styled.div`
  padding: 20px 0;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSpan = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
`;

const RightSpan = styled.div`
  display: flex;
  gap: 20px;

  a{
    font-size: 16px;
    color: ${props => props.theme.colors.primaryColor};
    text-decoration: none;
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <FooterInner>
                    <LeftSpan>
                        &copy; Copyright <strong>Akesyha</strong>. All Rights Reserved
                    </LeftSpan>
                    <RightSpan>
                        <NavLink to="/">Terms and conditions</NavLink>
                        <NavLink to="/">Refund policy</NavLink>
                        <NavLink to="/">Privacy policy</NavLink>
                    </RightSpan>
                </FooterInner>
            </Container>
        </FooterContainer>
    );
};

export default Footer;
