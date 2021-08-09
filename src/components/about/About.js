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
        <h1>I'm Eser.</h1>
        <h2>I’m currently juniour Full-Stack Developer.</h2>
        <h2>
          I've already known JS, ReactJS, Django, HTML-CSS,SQL, PostgreSQL
          Python, Bootsrap .
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
