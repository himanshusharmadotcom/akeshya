import styled from "styled-components";
import client1 from '../assets/images/clients/client-1.png'
import client2 from '../assets/images/clients/client-2.png'
import client3 from '../assets/images/clients/client-3.png'
import client4 from '../assets/images/clients/client-4.png'
import client5 from '../assets/images/clients/client-5.png'
import client6 from '../assets/images/clients/client-6.png'


const Container = styled.div``;

const LogoParent = styled.div`
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

const LogoSection = () => {
    return (
        <LogoParent>
            <Container>
                <LogoSectionInner>
                    <Logo src={client1} alt="Logo 1" data-aos="zoom-in"/>
                    <Logo src={client2} alt="Logo 2" data-aos="zoom-in" data-aos-delay="100"/>
                    <Logo src={client3} alt="Logo 3" data-aos="zoom-in" data-aos-delay="200"/>
                    <Logo src={client4} alt="Logo 4" data-aos="zoom-in" data-aos-delay="300"/>
                    <Logo src={client5} alt="Logo 5" data-aos="zoom-in" data-aos-delay="400"/>
                    <Logo src={client6} alt="Logo 5" data-aos="zoom-in" data-aos-delay="500"/>
                </LogoSectionInner>
            </Container>
        </LogoParent>
    )
}

export default LogoSection