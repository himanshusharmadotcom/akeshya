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
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  .img-wp{
    text-align: center;
    flex-basis: calc((100% - 50px) / 6);
  }

  @media(max-width: 768px){
    .img-wp{
      flex-basis: calc((100% - 20px) / 3);
    }
  }

  @media(max-width: 576px){
    .img-wp{
      flex-basis: calc((100% - 10px) / 2);
    }
  }


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
          <div className="img-wp">
            <Logo src={client1} alt="Logo 1" data-aos="zoom-in" />
          </div>
          <div className="img-wp">
            <Logo src={client2} alt="Logo 2" data-aos="zoom-in" data-aos-delay="100" />
          </div>
          <div className="img-wp">
            <Logo src={client3} alt="Logo 3" data-aos="zoom-in" data-aos-delay="200" />
          </div>
          <div className="img-wp">
            <Logo src={client4} alt="Logo 4" data-aos="zoom-in" data-aos-delay="300" />
          </div>
          <div className="img-wp">
            <Logo src={client5} alt="Logo 5" data-aos="zoom-in" data-aos-delay="400" />
          </div>
          <div className="img-wp">
            <Logo src={client6} alt="Logo 6" data-aos="zoom-in" data-aos-delay="500" />
          </div>
        </LogoSectionInner>
      </Container>
    </LogoParent>
  )
}

export default LogoSection