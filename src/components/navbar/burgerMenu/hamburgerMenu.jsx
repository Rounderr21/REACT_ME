import { Link } from 'react-scroll';
import './hamburgerMenu.scss';

export default function Hamburger() {

    return (
        <>
            <label className='hamburger-menu'>
                <input type="checkbox" />
            </label>
            <nav>
            <Link
            to="header"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            className="navLink"
            // onClick={() => handlePageChange('home')}
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
        //   onClick={() => handlePageChange('about')}
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
		//   onClick={() => handlePageChange('projects')}
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
		//   onClick={() => handlePageChange('resume')}
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
		//   onClick={() => handlePageChange('contact')}
		>
			Contact
		</Link>
            </nav>
        </>
    );
}
