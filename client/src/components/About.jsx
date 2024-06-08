import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { IoCheckmarkDone } from "react-icons/io5";
import MainHeading from '../styles/MainHeading';
import { Container } from '../styles/Container';
import { NavLink } from 'react-router-dom';

const AboutSection = styled.section`
  padding: 50px 0;
  text-align: center;
`;

const TextGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const TextContent = styled.div`
  flex: 1;
  margin: 0 10px;
  text-align: left;
  font-family: 'Raleway', sans-serif;
  
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
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.textColor};

  .icons{
    color: ${props => props.theme.colors.primaryColor};
    font-size: 20px;
  }
`;

const About = forwardRef((props, ref) => {
    return (
        <Container ref={ref}>
            <AboutSection>
                <MainHeading>ABOUT US</MainHeading>
                <TextGroup>
                    <TextContent>
                        <Paragraph>
                            We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.
                        </Paragraph>
                        <Paragraph>
                            <strong><IoCheckmarkDone className="icons" /></strong> We started with a simple idea: do what is best for the client.
                        </Paragraph>
                        <Paragraph>
                            <strong><IoCheckmarkDone className="icons" /></strong> Our methodical and individual approach to each project delivers the finest possible results for your media.
                        </Paragraph>
                        <Paragraph>
                            <strong><IoCheckmarkDone className="icons" /></strong> Our day-to-day work is to solve your problems utilizing the most up-to-date, practical adaptive technology, and we have a lot of fun doing it.
                        </Paragraph>
                    </TextContent>
                    <TextContent>
                        <Paragraph>
                            We're professional, but we're also friendly, and we'll always pay attention to your concerns. We expect to work with innovative people that have an open mind and are dedicated to making every idea a reality. We want to hear from you if you're interested in SEO, have Web Development ideas, or require a graphic designer who can match your goals.
                        </Paragraph>
                        <NavLink to="/">Learn More</NavLink>
                    </TextContent>
                </TextGroup>
            </AboutSection>
        </Container>
    )
});

export default About