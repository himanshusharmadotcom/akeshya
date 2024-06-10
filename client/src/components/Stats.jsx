import React, { useState } from 'react';
import styled from 'styled-components';
import { VscSmiley } from "react-icons/vsc";
import { BsJournalRichtext } from "react-icons/bs";
import { GoClock } from "react-icons/go";
import { BsGlobe2 } from "react-icons/bs";
import statsImg from '../assets/images/counts-img.svg';
import { Container } from '../styles/Container';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

// Define styled components
const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;

  @media(max-width: 992px){
    flex-direction: column;
    gap: 20px;
  }
`;

const StatsImage = styled.div`
    img{
        width: 450px;
        max-width: 100%;
        height: auto;
    }
`;

const LeftSpan = styled.div`
    flex-basis: 50%;
`;

const RightSpan = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
    flex-basis: 50%;
`;

const StatItem = styled.div`
    display: flex;
    align-items: center;
    gap: 22px;
    color: #1f3c9e;
    flex-basis: calc((100% - 30px) / 2);

    span{
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 10px;
        color: #000;
    }
`;

// const StatValue = styled.div`
//   font-size: 36px;
//   font-weight: bold;
//   margin-bottom: 10px;
//   color: #000;
// `;

const StatLabel = styled.div`
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    color: #484848;
`;

const StatIcon = styled.div`
  font-size: 36px;
  color: #1f3c9e;
  margin-bottom: 10px;
`;

// Main Stats component
const Stats = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (
        <Container>
            <StatsContainer>
                <LeftSpan data-aos="flip-up" data-aos-delay="150">
                    <StatsImage>
                        <img src={statsImg} alt="Stat Image" />
                    </StatsImage>
                </LeftSpan>
                <RightSpan data-aos="flip-down" data-aos-delay="300">
                    <StatItem>
                        <StatIcon><VscSmiley /></StatIcon>
                        <div>
                            <ScrollTrigger onEnter={() => setCounterOn(true)}>
                                {counterOn && <CountUp start={0} end={3835039} duration={3} />}
                            </ScrollTrigger>
                            <StatLabel><strong>Organic Reach</strong> (Global)</StatLabel>
                        </div>
                    </StatItem>
                    <StatItem>
                        <StatIcon><BsJournalRichtext /></StatIcon>
                        <div>
                            <ScrollTrigger onEnter={() => setCounterOn(true)}>
                                {counterOn && <CountUp start={0} end={85} duration={3} />}
                            </ScrollTrigger>
                            <StatLabel><strong>Campaigns</strong></StatLabel>
                        </div>
                    </StatItem>
                    <StatItem>
                        <StatIcon><GoClock /></StatIcon>
                        <div>
                            <ScrollTrigger onEnter={() => setCounterOn(true)}>
                                {counterOn && <CountUp start={0} end={14081} duration={3} />}
                            </ScrollTrigger>
                            <StatLabel><strong>Watch Hours</strong> (Asia)</StatLabel>
                        </div>
                    </StatItem>
                    <StatItem>
                        <StatIcon><BsGlobe2 /></StatIcon>
                        <div>
                            <ScrollTrigger onEnter={() => setCounterOn(true)}>
                                {counterOn && <CountUp start={0} end={17} duration={3} />}
                            </ScrollTrigger>
                            <StatLabel><strong>Excellent CTR %</strong> (Asia)</StatLabel>
                        </div>
                    </StatItem>
                </RightSpan>
            </StatsContainer>
        </Container>
    );
};

export default Stats;
