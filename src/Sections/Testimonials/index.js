import React, { lazy } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Title>Few good words about us!</Title>
      <Carousal>
        <Slider {...settings}>
        <Card  
            text="Working with Webify has been a game-changer for our business. They developed a sleek, responsive web app that perfectly captures our vision. Aryaman and his team are incredibly professional and creative!"  
            name="Sarthak (Codebugged)"  
            image="avatar-1"  
          />  

          <Card  
            text="Webify turned our ideas into reality with an intuitive web app that streamlines our operations. Aryaman’s leadership and the team’s dedication truly stand out. Highly recommend them for web development!"  
            name="Aditya Verma (AP Moller Maersk)"  
            image="avatar-2"  
          />  

          <Card  
            text="Aryaman and the Webify team have been exceptional partners. They delivered a top-notch web app that exceeded our expectations and helped us establish a strong online presence. A pleasure to work with!"  
            name="Priya Sharma (TechRise Solutions)"  
            image="avatar-3"  
          />  

          <Card  
            text="Webify brought our business to life on the web. Their creativity, technical expertise, and focus on delivering the best results are unparalleled. Kudos to Aryaman for leading such an incredible team!"  
            name="Rahul Mehta (InnoCore Technologies)"  
            image="avatar-4"  
          />  
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
