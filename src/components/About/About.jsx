

import React, {useState} from 'react'
import './about.css'

import { Container,Row,Col } from 'reactstrap'
import aboutImg from '../../assests/Images/mitch2.jpg'

import Education from './Education'
import Skills from './Skills'

const About = () => {

    const [aboutFilter, setAboutFilter]= useState('ABOUT')

  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>About Me</h2>
          </Col>
          <Col lg="4" md="3">
            <div className="about__btns d-flex flex-column align-items-center">
              <button
                className={`about__btn ${
                  aboutFilter === "ABOUT" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutFilter("ABOUT")}
              >
                About me
              </button>
              <button
                className={`about__btn ${
                  aboutFilter === "EDUCATION" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutFilter("EDUCATION")}
              >
                Education
              </button>
              <button
                className={`about__btn ${
                  aboutFilter === "SKILLS" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutFilter("SKILLS")}
              >
                Skills
              </button>
            </div>
          </Col>
          <Col lg="8" md="9">
            {aboutFilter === "ABOUT" && (
              <div className="about__content__wrapper">
                {/* <div className="about__img ">
                  <img src={aboutImg} alt="" className="w-100" />
                </div> */}
                <div className="about__content">
                  <h2>I'm Mitchel Ogbu</h2>
                  <p>
                    Mitchel is a frontend developer who loves to build and
                    maintain a formidable impact in the field of digital
                    technology and also to develop lasting solutions to issues
                    within the technological and business career environment. <br />
                    Ugochukwu is a highly skilled and experienced front-end
                    developer with a passion for creating visually appealing and
                    user-friendly web interfaces. With 3 years of industry
                    experience, I have developed a deep understanding of
                    front-end technologies and best practices. <br />
                    <br />
                    Throughout my career, I have demonstrated expertise in HTML,
                    CSS, and JavaScript, the core building blocks of front-end
                    development. I have a strong command of HTML5 and CSS3,
                    utilizing their knowledge to create semantic and accessible
                    web pages. I am well-versed in JavaScript frameworks such as
                    React, enabling me to develop dynamic and interactive user
                    interfaces. <br />
                    <br />
                    I have a keen eye for design and understand the importance
                    of user experience (UX) in web development. I collaborate
                    closely with UX/UI designers, translating their mockups and
                    wireframes into pixel-perfect and responsive web designs. I
                    have experience in responsive design techniques, ensuring
                    that websites and applications look and function flawlessly
                    across different devices and screen sizes. <br />
                    <br />
                    {/* In addition to my technical skills, I possess strong
                problem-solving abilities and an analytical mindset. I am adept
                at debugging and troubleshooting,and able to identify and resolve
                front-end issues efficiently. I stay up-to-date with the latest
                industry trends, attending conferences and participating in
                online communities to expand my knowledge and skills. <br />
                <br /> */}
                    Overall, I am a dedicated front-end developer with a strong
                    foundation in front-end technologies, a keen eye for design,
                    and a commitment to delivering high-quality user
                    experiences. My technical proficiency, problem-solving
                    abilities, and collaborative nature makes me a valuable
                    asset to any development team.
                  </p>

                  <div className="social__Links">
                    <h6 className="mb-3">Connect with me:</h6>
                    <span>
                      <a href="https://github.com/iammitchel">
                        <i className="ri-github-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://twitter.com/MitchelOgbu">
                        <i className="ri-twitter-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://www.linkedin.com/in/iammitchel/">
                        <i className="ri-linkedin-box-fill"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://www.instagram.com/mitchelogbu/">
                        <i className="ri-instagram-line"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {aboutFilter === "EDUCATION" && <Education />}

            {aboutFilter === "SKILLS" && <Skills />}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About