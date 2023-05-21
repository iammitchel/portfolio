import React, {useRef, useEffect} from 'react';
import { Container} from 'reactstrap';
import { AiOutlineMenu } from "react-icons/ai";


import './header.css';

const navLinks =[
    {
        display: 'Home',
        url: '#home'
    },

     {
        display: 'About',
        url: '#about'
    },

     {
        display: 'Portfolio',
        url: '#portfolio'
    },

     {
        display: 'Contact',
        url: '#contact'
    },
];

const Header = ({ click }) => {

  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;

    const handleScroll = () => {
      const isBelow = (
        document.body.scrollTop > 80 && document.documentElement.scrollTop > 80
      );

      if (isBelow) header?.classList.add('header__shrink');
      else header?.classList.remove('header__shrink');
    };

    const option = { passive: true };

    window.addEventListener('scroll', handleScroll, option);

    return () => {
    window.removeEventListener("scroll", handleScroll, option);
    };
  }, []);

  const handleClick = e=>{
    e.preventDefault()
    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 70,
    })
  }

return (
  <header className="header" ref={headerRef}>
    <Container>
      <div className="navigation d-flex align-items-center justify-content-between">
        <div className="logo">
          <h5>PORTFOLIO</h5>
        </div>
        <div className="nav__menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__items" key={index}>
                <a href={item.url} onClick={handleClick}>
                  {item.display}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu">
          <AiOutlineMenu onClick={click} />
        </div>
      </div>
    </Container>
  </header>
);
  
};



export default Header