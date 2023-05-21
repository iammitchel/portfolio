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
                Ugochukwu is a highly skilled and experienced front-end
                developer with a passion for creating visually appealing and
                user-friendly web interfaces. With 3 years of industry
                experience, I have developed a deep understanding of front-end
                technologies and best practices. <br />
                <br />
                Throughout my career, I have demonstrated expertise in HTML,
                CSS, and JavaScript, the core building blocks of front-end
                development. I have a strong command of HTML5 and CSS3,
                utilizing their knowledge to create semantic and accessible web
                pages. I am well-versed in JavaScript framework such as React,
                enabling me to develop dynamic and interactive user interfaces.{" "}
                <br />
                <br />
                I have a keen eye for design and understands the importance of
                user experience (UX) in web development. I collaborate closely
                with UX/UI designers, translating their mockups and wireframes
                into pixel-perfect and responsive web designs. I have experience
                in responsive design techniques, ensuring that websites and
                applications look and function flawlessly across different
                devices and screen sizes. <br />
                <br />
                In addition to my technical skills, I possess strong
                problem-solving abilities and an analytical mindset. I am adept
                at debugging and troubleshooting, able to identify and resolve
                front-end issues efficiently. I stay up-to-date with the latest
                industry trends, attending conferences and participating in
                online communities to expand their knowledge and skills. <br />
                <br />
                Overall, I am a dedicated front-end developer with a strong
                foundation in front-end technologies, a keen eye for design, and
                a commitment to delivering high-quality user experiences. My
                technical proficiency, problem-solving abilities, and
                collaborative nature make me a valuable asset to any
                development team.
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
