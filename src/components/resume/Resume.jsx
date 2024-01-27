import ResumeImg from "../../assets/Images/ResumeImg.png";
import "./resume.scss";

export default function Resume() {
  return (
    <div className="resumePage">
      <div className="resumeContent">
        <div className="textSection">
          <h1>Welcome!</h1>
          <p>Enclosed is a snapshot of my professional resume. For a comprehensive overview of my credentials and experience, please click on the image provided.</p>
          <ul>
            <ol className="skills">Skills:</ol>
            <ol className="list">Programming Languages: Node.js, REACT, Express, Python, HTML, CSS, JavaScript, Next.js</ol>
            <ol className="list">Database: MySQL, MongoDB, NoSQL, DynamoDB</ol>
            <ol className="list">Frameworks & Libraries: Bootstap, Tailwind, jQuery, Handlebars</ol>
            <ol className="list">API's & Technlology: GraphQL, Heroku</ol>
            <ol className="list">Cloud Services: AWS (Amazon Web Services)</ol>
            <ol className="list">Artificial Intelligence: AI Applications and Prompt Engineering</ol>
          </ul>
        </div>
        <div className="imageSection">
          <a href="https://docs.google.com/document/d/1AYQGocHNYthJoegaORFkPeB7ow2b9Vhy/edit?usp=sharing&ouid=113693766888778622789&rtpof=true&sd=true"> 
            <img src={ResumeImg} alt="resume" style={{ width: "500px", height: "550px" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
