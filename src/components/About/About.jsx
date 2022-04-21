

import React, {useState} from 'react'
import './about.css'

import { Container,Row,Col } from 'reactstrap'
import aboutImg from '../../assests/Images/michy1.png'

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
            {""}
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
              <div className="about__content__wrapper d-flex gap-5">
                <div className="about__img w-25">
                  <img src={aboutImg} alt="" className="w-100" />
                </div>
                <div className="about__content w-75">
                  <h2>I'm Mitchel Ogbu</h2>
                  <p>
                    Mitchel is a frontend developer who loves to build and
                    maintain a formidable impact in the field of digital
                    technology and also to develop lasting solutions to issues
                    within the technological and business career environment.
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