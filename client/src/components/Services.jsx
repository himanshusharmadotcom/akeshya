import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { FaPalette, FaCode, FaBullhorn, FaHeadset } from 'react-icons/fa';
import MainHeading from '../styles/MainHeading';
import { Container } from '../styles/Container';

// Define styled components
const ServicesContainer = styled.div`
  padding: 50px 0;
  text-align: center;
  background: #fff;
`;

const Title = styled.h2`
`;

const Subtitle = styled.p`
  margin-bottom: 50px;
  color: #666;
  font-size: 16px;
`;

const ServicesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const ServiceItem = styled.div`
  flex-basis: calc((100% - 90px) / 4);
  padding: 30px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 111;

  &:after{
    content: '';
    position: absolute;
    top: -85%;
    right: -75%;
    width: 100%;
    height: 100%;
    background: #e1f0fa;
    border-radius: 30%;
    transition: 0.25s;
  }

  &:hover:after{
    top: 0;
    right: 0;
    border-radius: unset;
    background: ${props => props.theme.colors.primaryColor};
    z-index: -1;
  }
`;

const IconWrapper = styled.div`
    font-size: 36px;
    background: ${props => props.theme.colors.primaryColor};
    margin-bottom: 20px;
    color: #fff;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${ServiceItem}:hover & {
        background: #fff;
        color: ${props => props.theme.colors.primaryColor};
    }
`;

const ServiceTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;

   ${ServiceItem}:hover & {
    color: #fff;
  }
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  color: #666;
  
  ${ServiceItem}:hover & {
    color: #fff;
  }
`;

const Services = forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <ServicesContainer>
        <MainHeading>SERVICES</MainHeading>
        <Subtitle>Akeshya will serve as your consultant and development partner to help you turn your idea into a reality.</Subtitle>
        <ServicesGrid>
          <ServiceItem>
            <IconWrapper>
              <FaPalette />
            </IconWrapper>
            <ServiceTitle>Design</ServiceTitle>
            <ServiceDescription>
              Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.
            </ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <IconWrapper>
              <FaCode />
            </IconWrapper>
            <ServiceTitle>Development</ServiceTitle>
            <ServiceDescription>
              Our development team can construct platforms to help your business thrive by creating powerful customized solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools.
            </ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <IconWrapper>
              <FaBullhorn />
            </IconWrapper>
            <ServiceTitle>Marketing</ServiceTitle>
            <ServiceDescription>
              A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.
            </ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <IconWrapper>
              <FaHeadset />
            </IconWrapper>
            <ServiceTitle>Support</ServiceTitle>
            <ServiceDescription>
              Since the beginning, we at Akeshya have specialized in website maintenance. We recognize the significance of having your business online 24 hours a day, seven days a week, and we've created a system to ensure that we're always available.
            </ServiceDescription>
          </ServiceItem>
        </ServicesGrid>
      </ServicesContainer>
    </Container>
  );
});

export default Services;
