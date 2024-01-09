import pg23 from "../../assets/Images/bloodSworn-issue1-pg23-colors.jpg";
import pg15 from "../../assets/Images/bloodSworn-issue1-pg15-colors.jpg";
import company from "../../assets/Images/BloodHaven_Productions.png";
import pg24 from "../../assets/Images/bloodSworn-issue1-pg24-colors-v3.jpg";
import pg18 from "../../assets/Images/bloodSworn-issue1-pg18-colors.jpg";
import "./about.scss";


// This is a static page mocking an "About Us" section for our fake user data
export default function About() {
    return (
        // Wrap JSX expressions inside a single parent element
        <div>
            <div className="Container">
                <div className="photoCompany">
                    <p id="paragraph1">Software development is not just a job; it is my passion. I relish the opportunity to tackle complex challenges 
                        and bring innovative solutions to life. The thrill of creating functional, elegant software is what drives me 
                        every day.From cutting-edge frameworks and languages to tried-and-true tools, I thrive on staying up-to-date 
                        with the ever-evolving tech landscape. Expect to see a diverse skill set that includes but is not limited to 
                        JavaScript, Python, React, Node.js, and more.
                    </p>
                    <div className="picture">
                        <img className="comic" src={pg23} alt="comic book" />
                        <img className="comic" src={pg15} alt="comic book" />
                        <img className="comic" src={company} alt="company" />
                        <img className="comic" src={pg24} alt="comic book" />
                        <img className="comic" src={pg18} alt="comic book" />
                    </div>
                    <p id="paragraph2">While my career highlights undoubtedly serve as the primary point of interest, 
                        I would like to take a moment to provide insight into my personal endeavors. As a passionate enthusiast, 
                        I embarked on an entrepreneurial venture known as BloodHaven Productions. My deep-seated affinity for the art of storytelling, 
                        particularly within the realm of comic books, ignited the inspiration to create my own independent comic book series, 
                        an ongoing project titled &quot;BloodSworn.&quot; My dedication to this artistic pursuit mirrors the same unwavering commitment 
                        I exhibit in the realm of coding, both receiving my full and undivided attention until the desired level of perfection is attained.
                    </p>
                    <p id="thanks">Thank you for reading my journey, click on the projects button in the navbar to see my work.</p>
                </div>
            </div>
        </div>
    );
}