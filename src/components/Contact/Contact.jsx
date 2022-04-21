

import React from 'react'
import './Contact.css'

import { Container, Row, Col } from 'reactstrap'

const Contact = () => {
  return (
    <section id='contact'>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Get In Touch</h2>
          </Col>

          <Col lg="6" md="6">
            <div className="contact__info-container d-flex align-items-center gap-5">
              <div className="single__info-box w-50">
                <h6>Address</h6>
                <p>Lagos, Nigeria</p>
              </div>
              <div className="single__info-box w-50">
                <h6>Phone</h6>
                <p>+2349090435885</p>
              </div>
            </div>
            <div className="contact__info-container d-flex align-items-center gap-5">
              <div className="single__info-box w-50">
                <h6>Email</h6>
                <p>mitchelogbu37@gmail.com</p>
              </div>
              <div className="single__info-box w-50">
                <h6>Location</h6>
                <p>3/13 Thomas Drive Akoka</p>
              </div>
            </div>
            <Col lg="6" md="6"></Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact