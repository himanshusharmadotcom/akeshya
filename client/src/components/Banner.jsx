import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import heroImg from '../assets/images/hero-img.png'
import { Container } from '../styles/Container';
import { NavLink } from 'react-router-dom';

const MainSection = styled.section`
  display: flex;
  align-items: center;

  @media(max-width: 992px){
    flex-direction: column;
    gap: 30px;
    padding-bottom: 50px;
  }
`;

const TextContent = styled.div`
  flex: 1;

  a{
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 13px 32px;
    border-radius: 50px;
    transition: 0.5s;
    color: #14279b;
    border: 2.5px solid #14279b;
    text-decoration: none;

  &:hover {
    background: #14279b;
    color: #fff;
  }
  }

  @media(max-width: 992px){
    order: 2;
  }
`;

const Heading = styled.h1`
    color: #1f3c9e;
    margin: 0 0 10px 0;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
`;

const SubHeading = styled.p`
  font-family: 'ralewayFont', sans-serif;
  color: #484848;
  margin-bottom: 50px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
`;

const ImageContent = styled.div`
  flex: 1;
  text-align: center;

  @media(max-width: 992px){
    order: 1;
  }
`;


const upDown = keyframes`
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 580px;
  animation: ${upDown} 2s ease-in-out infinite alternate-reverse both;

`;

const Banner = () => {

  return (
    <Container>
      <MainSection>
        <TextContent>
          <Heading data-aos="fade-up">Grow your business <br></br>with Akeshya</Heading>
          <SubHeading data-aos="fade-up" data-aos-delay="400">We are team of talented website designers, developers & digital marketeers</SubHeading>
          <NavLink to="/" data-aos="fade-up" data-aos-delay="600">Get Started</NavLink>
        </TextContent>
        <ImageContent data-aos="zoom-in">
          <HeroImage src={heroImg} className='animate' alt="Business illustration" />
        </ImageContent>
      </MainSection>
    </Container>

  );
};

export default Banner;
