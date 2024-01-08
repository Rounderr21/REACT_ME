import project from "../../assets/Images/project1.png"
import project2 from "../../assets/Images/project2.png"
import project3 from "../../assets/Images/project3.png"
import githubImage from "../../assets/Images/Github.png"
import "./projects.scss";

export default function Projects() {
    return (
        <div className="Container">
            <div className="grid-item grid-item-2">
                <div className="workContainer">
                    <a id="project" href="https://pure-scrubland-49342-080c7f0b82aa.herokuapp.com/"><img src={project} alt="ForeverFriends" />ForeverFriends</a>
                    <a id="project2" href="https://rounderr21.github.io/Live_Local/"> <img src={project2} alt="Live Local" />Live Local</a>
                    <a id="project3" href="https://github.com/Rounderr21/Node.js_README_Generator"> <img src={project3} alt="Node.js README Generator" />Node.js README Generator</a>
                </div>
                <p id="paragraph">Above are three exemplary projects that showcase my prowess as a developer. Should you wish to explore additional projects, kindly click on the provided icon <a href="https://github.com/Rounderr21"><img id="github" src={githubImage} alt="Github account" /></a>, which will redirect you to my GitHub repository for a comprehensive overview of my work.</p>
            </div>
        </div>
    );
}
