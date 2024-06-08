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
import { useRef } from "react";


const Home = () => {
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
      <Footer />
    </>
  )
}

export default Home