import styled from "styled-components";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Process from "../components/Process";
import CoreFeatures from "../components/CoreFeatures";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import About from "../components/About";
import LogoSection from "../components/LogoSection";
import { useEffect, useRef } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import GoToTop from "../components/GoToTop";

const Home = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const aboutSectionRef = useRef(null);
  const serviceSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  return (
    <>
      <Header aboutSectionRef={aboutSectionRef} serviceSectionRef={serviceSectionRef} contactSectionRef={contactSectionRef} />
      <Banner />
      <LogoSection />
      <About ref={aboutSectionRef} />
      <Stats />
      <Services ref={serviceSectionRef} />
      <Process />
      <CoreFeatures />
      <ContactUs ref={contactSectionRef} />
      <GoToTop />
      <Footer />
    </>
  )
}

export default Home