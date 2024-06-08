import React from 'react';
import styled from 'styled-components';
import MainHeading from '../styles/MainHeading';
import { Container } from '../styles/Container';

const ProcessContainer = styled.div`
  padding: 50px 0;
  text-align: center;
  background: #fff;
`;

const ProcessTitle = styled.h2``;

const ProcessSubtitle = styled.p`
  margin-bottom: 50px;
  color: #666;
  font-size: 16px;
`;

const ProcessGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
`;

const ProcessItem = styled.div`
    flex-basis: calc((100% - 60px) / 2);
    z-index: 10;
    background: #f6f6f6;
    padding: 30px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
    transition: ease-in-out 0.4s;
    border-radius: 5px;

    &:hover{
        background-color: ${props => props.theme.colors.primaryColor};
    }
`;

const ProcessStepTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: #000;

  ${ProcessItem}:hover &{
    color: #fff;
  }
`;

const ProcessStepDescription = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.textColor};;

  ${ProcessItem}:hover &{
    color: #fff;
  }
`;

const Process = () => {
  return (
    <Container>
      <ProcessContainer>
        <MainHeading>OUR PROCESS</MainHeading>
        <ProcessSubtitle>Over the years we’ve evolved a tested method for attaining achievement for each one of our clients.</ProcessSubtitle>
        <ProcessGrid>
          <ProcessItem>
            <ProcessStepTitle>1. Planning</ProcessStepTitle>
            <ProcessStepDescription>
              We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we’re all on the same page.
            </ProcessStepDescription>
          </ProcessItem>
          <ProcessItem>
            <ProcessStepTitle>2. Design</ProcessStepTitle>
            <ProcessStepDescription>
              We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.
            </ProcessStepDescription>
          </ProcessItem>
          <ProcessItem>
            <ProcessStepTitle>3. Development</ProcessStepTitle>
            <ProcessStepDescription>
              We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.
            </ProcessStepDescription>
          </ProcessItem>
          <ProcessItem>
            <ProcessStepTitle>4. Marketing</ProcessStepTitle>
            <ProcessStepDescription>
              We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified track record of accomplishing brilliant results, gathering new leads and site visitors in your website and assisting them convert.
            </ProcessStepDescription>
          </ProcessItem>
        </ProcessGrid>
      </ProcessContainer>
    </Container>
  );
};

export default Process;
