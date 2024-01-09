import profileImage from "../../assets/Images/profile.jpg";
import "./header.scss";

export default function Header() {
    return (
        <div className="homePage">
               <img id="photo" src={profileImage} alt="Cody Schwengler, Fullstack Developer" />
            <div>
                <div id="aboutme">
                    <h1>I am Cody Schwengler</h1>
                    <p> Fullstack developer, REACT lover, and Owner of BloodHaven Productions Comics.</p>
                    <p> I invite you to explore my digital playground—a collection of projects, experiences, and code snippets that showcase my journey in the world of software development.</p>
                </div>
            </div>
        </div>
    );
}