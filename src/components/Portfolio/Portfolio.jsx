import React from "react";
import "./Portfolio.css";

import { Container, Row, Col } from "reactstrap";

import img01 from "../../assests/Images/movie.jpg";
import img02 from "../../assests/Images/to-do-list-apps.png";

const portfolioData = [
  {
    imgUrl: img01,
    title: "Movie App",
    Url: "https://michy-movie-app.netlify.app/",
  },
  {
    imgUrl: img02,
    title: "Todo-App",
    Url: "https://michy-todo-application.netlify.app/",
  },
];

const portfolio = () => {
  return (
    <section  id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className='portfolio__top mb-5'>
            <h6>Explore my work and give me feedback</h6>
            <h2>Portfolio</h2>
          </Col>

          {portfolioData.map((item, index) => (
            <Col lg='4' md='6' sm='6' key={index} >
              <div className="portfolio__card">
                <div className="portfolio__img">
                      <img src={item.imgUrl} alt="" className="w-100"/>
                    </div>
                    <div className="portfolio__content">
                      <h5>{item.title}</h5>
                      <a href={item.Url}>View live</a>
                    </div>
                  </div>
                
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default portfolio;
