import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { RiMailSendLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import Button from '../styles/Button';
import MainHeading from '../styles/MainHeading';
import { Container } from '../styles/Container';

const ContactContainer = styled.div`
  padding: 50px 0;
  background-color: #fff;
  text-align: center;
`;

const ContactDetails = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: left;
    gap: 20px;
    padding: 50px 0;
`;

const Title = styled.h3`
  font-size: 36px;
  color: ${props => props.theme.colors.primaryColor}; 
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
`;

const FirstSpan = styled.div`
    flex-basis: calc(30% - (20px / 3));
`;

const SecondSpan = styled.div`
    flex-basis: calc(30% - (20px / 3));
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  svg {
    color: ${props => props.theme.colors.primaryColor};
    margin-right: 10px;
    font-size: 24px;
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 16px;
  }

  p {
    margin: 0;
    font-size: 16px;
  }
`;

const ThirdSpan = styled.div`
    flex-basis: calc(40% - (20px / 3));
    background: #f9f9f9;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const InputField = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextAreaField = styled.textarea`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

const SubmitButton = styled.button`
`;

const ContactUs = forwardRef((props, ref) => {
    return (
        <Container ref={ref}>
            <ContactContainer>
                <MainHeading data-aos="fade-up">Contact Us</MainHeading>
                <ContactDetails>
                    <FirstSpan data-aos="fade-up" data-aos-delay="100">
                        <Title>Akeshya</Title>
                        <Subtitle>Designers, developers & marketeers capable of delivering solutions according to your needs.</Subtitle>
                    </FirstSpan>
                    <SecondSpan data-aos="fade-up" data-aos-delay="200">
                        <ContactItem>
                            <GrLocation style={{ "fontSize": "44px" }} />
                            <p>26-2-789, 7th Street, Jyothi Nagar, Nellore, Andhra Pradesh 524004</p>
                        </ContactItem>
                        <ContactItem>
                            <RiMailSendLine />
                            <a href="mailto:info@akeshya.com">info@akeshya.com</a>
                        </ContactItem>
                        <ContactItem>
                            <IoCallOutline />
                            <p>+91 94942 40922</p>
                        </ContactItem>
                    </SecondSpan>
                    <ThirdSpan data-aos="fade-up" data-aos-delay="300">
                        <form>
                            <InputField type="text" placeholder="Your Name" />
                            <InputField type="email" placeholder="Your Email" />
                            <InputField type="text" placeholder="Subject" />
                            <TextAreaField rows="5" placeholder="Message" />
                            <SubmitButton type="submit" className='btn'>Send Message</SubmitButton>
                        </form>
                    </ThirdSpan>
                </ContactDetails>

            </ContactContainer>
        </Container>
    );
});

export default ContactUs;
