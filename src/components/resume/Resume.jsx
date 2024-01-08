import ResumeImg from "../../assets/Images/ResumeImg.png"
import "./resume.scss"

export default function Resume() {
return (
    <div className="resumePage">
        <div>
            <h1>Resume</h1>
            <p>Presented here is a sample of my professional resume. Feel free to click on the image to access the comprehensive version of my credentials and experience</p>
            <a href="https://docs.google.com/document/d/1AYQGocHNYthJoegaORFkPeB7ow2b9Vhy/edit?usp=sharing&ouid=113693766888778622789&rtpof=true&sd=true"> 
            <img src={ResumeImg} alt="resume" /></a>
        </div>
    </div>
)
}