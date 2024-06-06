import styled from "styled-components";
import Banner from "../components/Banner";
import Header from "../components/Header";
import client1 from '../assets/images/clients/client-1.png'
import client2 from '../assets/images/clients/client-2.png'
import client3 from '../assets/images/clients/client-3.png'
import client4 from '../assets/images/clients/client-4.png'
import client5 from '../assets/images/clients/client-5.png'
import client6 from '../assets/images/clients/client-6.png'
import { IoCheckmarkDone } from "react-icons/io5";


const Container = styled.div``;

const LogoSection = styled.div`
  padding: 10px 0;
  background: #f3f9fd;
`;

const LogoSectionInner = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.img`
  width: 80px;
  filter: grayscale(100);
  transition: all 0.4s ease-in-out;
  display: inline-block;
  padding: 10px 0;

  &:hover{
    filter: none;
  }
`;

const AboutSection = styled.section`
  padding: 50px 0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  color: #1f3c9e;

  &::after {
    content: "";
    width: 50px;
    height: 3px;
    background: #1f3c9e;
    position: absolute;
    top: 50%;
    right: -40%;
    transform: translateY(-50%);
  }

  &::before {
    content: "";
    width: 50px;
    height: 3px;
    background: #1f3c9e;
    position: absolute;
    top: 50%;
    left: -40%;
    transform: translateY(-50%);
  }
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

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  color: #1f3c9e;
  border: 2px solid #1f3c9e;
  border-radius: 25px;
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: #1f3c9e;
    color: #fff;
  }
`;

export default function Home() {
    return (
        <>
            <Container className='container'>
                <Header />
                <Banner />
            </Container>
            <LogoSection>
                <Container className="container">
                    <LogoSectionInner>
                        <Logo src={client1} alt="Logo 1" />
                        <Logo src={client2} alt="Logo 2" />
                        <Logo src={client3} alt="Logo 3" />
                        <Logo src={client4} alt="Logo 4" />
                        <Logo src={client5} alt="Logo 5" />
                        <Logo src={client6} alt="Logo 5" />
                    </LogoSectionInner>
                </Container>
            </LogoSection>
            <Container className='container'>
                <AboutSection>
                    <Title>About Us</Title>
                    <TextGroup>
                        <TextContent>
                            <Paragraph>
                                We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.
                            </Paragraph>
                            <Paragraph>
                                <strong><IoCheckmarkDone className="icons"/></strong> We started with a simple idea: do what is best for the client.
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
                            <Button href="#">Learn More</Button>
                        </TextContent>
                    </TextGroup>
                </AboutSection>
            </Container>
        </>
    )
}