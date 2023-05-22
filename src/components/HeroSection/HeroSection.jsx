import React from "react";
import "./HeroSection.css";

import { Container, Row, Col } from "reactstrap";
import TypeWriterEffect from "react-typewriter-effect";

import heroImg from "../../assests/Images/mitch.jpg";

const HeroSection = () => {
  return (
    <section className="hero__section" id="home">
      <Container className="body">
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <p className="mb-3">Welcome to my world!</p>

              <h2 className="hero__title mb-4">
                <>
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "Red Hat Display",
                      color: "#fffff",
                      fontWeight: 500,
                      fontSize: "1.5em",
                    }}
                    startDelay={2000}
                    cursorColor="#3F3D56"
                    multiText={[
                      "I am Mitchel Ogbu",
                      "I am a Frontend Developer",
                    ]}
                    loop={true}
                    multiTextDelay={1000}
                    typeSpeed={30}
                  />
                </>
              </h2>

              <p>
                {/* Ugochukwu is a frontend developer who loves to explore
                opportunities that make room for the attainment of skills,
                nurturing of potentials and capabilities in the utilization of
                modern technology. */}
                Mitchel is a skilled front-end developer with a passion for
                creating visually appealing and user-friendly websites. With
                several years of experience, I have a solid understanding of
                HTML, CSS, and JavaScript, enabling me to bring designs to life
                and deliver seamless user experiences. I am adept at utilizing
                popular frameworks and libraries like React, to build
                responsive and interactive interfaces. My attention to
                detail, problem-solving abilities, and strong communication
                skills make me a valuable team member, capable of collaborating
                effectively with designers and back-end developers. Always
                staying up-to-date with the latest industry trends, I am
                committed to continuous learning and improving my skills to
                provide cutting-edge solutions for web development projects.
              </p>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
