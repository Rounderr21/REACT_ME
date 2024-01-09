import project from "../../assets/Images/project1.png";
import project2 from "../../assets/Images/project2.png";
import project3 from "../../assets/Images/project3.png";
import project4 from "../../assets/Images/project4.png";
import project5 from "../../assets/Images/project5.png";
import project6 from "../../assets/Images/project6.png";
import githubImage from "../../assets/Images/Github.png";
import "./projects.scss";

const projectItems = [
	{
		id: 1,
		title: 'ForeverFriends',
		src: project,
		link: 'https://pure-scrubland-49342-080c7f0b82aa.herokuapp.com/',
		repo: 'https://github.com/Rounderr21/FureverFriends',
		description:
			"Where passionate people meet their pets.",
	},
    {
        id: 2,
        title: 'Live Local',
        src: project2,
        link: 'https://rounderr21.github.io/Live_Local/',
        repo: 'https://github.com/Rounderr21/Live_Local',
        description:
            "Live Local is a website that allows users to search for local events in their area.",
    },
    {
        id: 3,
        title: 'Node.js README Generator',
        src: project3,
        link: 'https://github.com/Rounderr21/Node.js_README_Generator',
        repo: 'https://github.com/Rounderr21/Node.js_README_Generator',
        description:
            "A command-line application that dynamically generates a README.md from a user's input.",
    },
    {
        id: 4,
        title: 'City Weather',
        src: project4,
        link: 'https://rounderr21.github.io/City_weather/',
        repo: 'https://github.com/Rounderr21/City_weather',
        description:
            "A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.",
    },
    {
     id: 5,
        title: 'PWA-Text-Editor',
        src: project5,
        link: 'https://github.com/Rounderr21/PWA-Text-Editor',
        repo: 'https://github.com/Rounderr21/PWA-Text-Editor',
        description:
            "A simple text editor that can be used offline.",
    },
    {
        id: 6,
        title: 'Plan for the future Planner',
        src: project6,
        link: 'https://rounderr21.github.io/Plan_for_the_future_planner/',
        repo: 'https://github.com/Rounderr21/Plan_for_the_future_planner',
        description:
            "A simple calendar application that allows a user to save events for each hour of the day.",
    },
];


const Projects = () => {
    return (
      <>
        <section id='portfolio'>
          <div className="portfolio">
            <div className='card-container'>
              {projectItems.map((item) => (
                <div key={item.id} className='card'>
                  <div className='img-content'>
                    <img className="source" src={item.src} alt={item.title} />
                    <div className='content'>
                      <div className='heading'>{item.title}</div>
                      <div className='card-links'>
                        <a href={item.link} className='btn btn-primary'>Live Site</a>
                        <a href={item.repo} className='btn'><img id="github" src={githubImage} alt="Github account" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Projects;