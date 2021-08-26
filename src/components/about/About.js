import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyle";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} alt="coding" />
      <HeaderContainer>
        <h1>
          About Software Developer <span>Eser Akkurt</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h1>I'm Eser Akkurt.</h1>
        <h2>I’m currently learning Full-Stack Development Languages and Other tools.</h2>
        <h2>
          I've already known JS, ReactJS, ReactNative,  Django, HTML-CSS, SQL, PostgreSQL Python, Bootsrap, AWS Services.
        </h2>
        <h2>
          <a href="mailto:eser.akkurt@gmail.com">Send email</a> :
          eser.akkurt@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
