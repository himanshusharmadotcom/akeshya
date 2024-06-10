import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { SiMaterialdesign } from "react-icons/si";
import { IoIosCode } from "react-icons/io";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { GrMultimedia } from "react-icons/gr";
import { MdImageSearch } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { FaSearchLocation } from "react-icons/fa";
import { PiStrategy } from "react-icons/pi";
import { IoIosContacts } from "react-icons/io";
import { MdOutlineSocialDistance } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import MainHeading from '../styles/MainHeading';
import { Container } from '../styles/Container';

const FeaturesContainer = styled.div`
  padding: 50px 0;
  text-align: center;
  background: #fff;
`;

const FeaturesSubtitle = styled.p`
  margin-bottom: 50px;
  color: #666;
  font-size: 16px;
`;

const FeaturesGrid = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

const FeatureItem = styled.div`
  flex-basis: calc((100% - 90px) / 4);
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  text-align: left;
  display: flex;
  align-items: center;

  &:hover{
    background: #eef7fc;
  }

  a{
    font-size: 18px;
    color: #000;
    text-decoration: none;
    font-weight: 500;
    display: flex;
  }

  @media(max-width: 992px){
    flex-basis: calc((100% - 60px) / 3);
  }

  @media(max-width: 768px){
    flex-basis: calc((100% - 30px) / 2);
  }

   @media(max-width: 576px){
    flex-basis: 100%;
  }

`;

const Icon = styled.span``;

const features = [
  { title: 'Web design', icon: <SiMaterialdesign style={{ color: '#FFA500' }} /> },
  { title: 'Development', icon: <IoIosCode style={{ color: '#4B0082' }} /> },
  { title: 'Branding', icon: <MdOutlineBrandingWatermark style={{ color: '#FF1493' }} /> },
  { title: 'Media buying', icon: <GrMultimedia style={{ color: '#8A2BE2' }} /> },
  { title: 'Search engine', icon: <MdImageSearch style={{ color: '#1E90FF' }} /> },
  { title: 'Brand strategy', icon: <PiStrategy style={{ color: '#FFA500' }} /> },
  { title: 'Local search marketing', icon: <FaSearchLocation style={{ color: '#FFD700' }} /> },
  { title: 'Lead Tracking & Management', icon: <GoGraph style={{ color: '#4B0082' }} /> },
  { title: 'Contact management', icon: <IoIosContacts style={{ color: '#FFA500' }} /> },
  { title: 'Media management', icon: <GrMultimedia style={{ color: '#FF1493' }} /> },
  { title: 'Social scheduling', icon: <MdOutlineSocialDistance style={{ color: '#FFA500' }} /> },
  { title: 'Ad retargeting', icon: <RiAdvertisementFill style={{ color: '#32CD32' }} /> },
];

const CoreFeatures = () => {
  return (
    <Container>
      <FeaturesContainer>
        <div data-aos="fade-up">
          <MainHeading>OUR CORE FEATURES</MainHeading>
          <FeaturesSubtitle>Akesyha is a forward-thinking and intelligent design firm that is technically and creatively capable of transforming your brand into its best digital self. Our approach to design and development results in compelling, engaging branding and immersive digital experiences that provide a value for money.</FeaturesSubtitle>
        </div>
        <FeaturesGrid data-aos="fade-up" data-aos-delay="100">
          {features.map((feature, index) => (
            <FeatureItem key={index}>
              <NavLink to="/"><Icon>{feature.icon}</Icon> &nbsp;&nbsp;{feature.title}</NavLink>
            </FeatureItem>
          ))}
        </FeaturesGrid>
      </FeaturesContainer>
    </Container>
  );
};

export default CoreFeatures;
