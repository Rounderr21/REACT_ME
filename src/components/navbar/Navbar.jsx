import { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.scss';
import initals from '../../assets/Images/initials.png'
import Hamburger from './burgerMenu/hamburgerMenu';

const Navbar = ({ onPageChange }) => {
  const [activePage, setActivePage] = useState('home'); // Default active page

  const handlePageChange = (page) => {
    setActivePage(page);
    onPageChange(page); // Call the onPageChange prop function passed from App.js
  };

  return (
    <>
     <nav className="navbar">
        <div className="left-side">
          <img id='initals' src={initals} alt="" />
        </div>
        <div className='right-side'>
          <Link
            to="header"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            className="navLink"
            onClick={() => handlePageChange('home')}
          >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
          className="navLink"
          onClick={() => handlePageChange('about')}
        >
          About
        </Link>
		<Link
		  to="projects"
		  spy={true}
		  smooth={true}
		  duration={500}
		  activeClass="active"
      className="navLink"
		  onClick={() => handlePageChange('projects')}
		>
			Projects
		</Link>
		<Link
		  to="resume"
		  spy={true}
		  smooth={true}
		  duration={500}
		  activeClass="active"
      className="navLink"
		  onClick={() => handlePageChange('resume')}
		>
			Resume
		</Link>
		<Link
		  to="contact"
		  spy={true}
		  smooth={true}
		  duration={500}
		  activeClass="active"
      className="navLink"
		  onClick={() => handlePageChange('contact')}
		>
			Contact
		</Link>
    </div>
    <div className='hamburger'><Hamburger /></div>
      </nav>
    </>
  );
};

export default Navbar;
