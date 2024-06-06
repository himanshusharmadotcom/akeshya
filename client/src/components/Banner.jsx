import React from 'react';
import styled, { keyframes } from 'styled-components';
import heroImg from '../assets/images/hero-img.png'

const MainSection = styled.section`
  display: flex;
  align-items: center;
`;

const TextContent = styled.div`
  flex: 1;
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

const Button = styled.a`

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
`;

const ImageContent = styled.div`
  flex: 1;
  text-align: center;
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
        <MainSection>
            <TextContent>
                <Heading>Grow your business <br></br>with Akeshya</Heading>
                <SubHeading>We are team of talented website designers, developers & digital marketeers</SubHeading>
                <Button href="#">Get Started</Button>
            </TextContent>
            <ImageContent>
                <HeroImage src={heroImg} className='animate' alt="Business illustration" />
            </ImageContent>
        </MainSection>
    );
};

export default Banner;
