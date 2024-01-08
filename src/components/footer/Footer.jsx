//importing images and css styling into the footer part of the page
import githubImage from "../../assets/Images/Github.png";
import linkedinImage from "../../assets/Images/linkedin.png";
import instagramImage from "../../assets/Images/Instagram.png";
import facebookImage from "../../assets/Images/Facebook.png";
import bloodhavenImage from "../../assets/Images/BloodHaven_Productions.png";
import "./footer.scss";


export default function Footer() {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
<div className="Footer">
<div className="Foot">
    <ol className="neonText flicker"> Find me on other platforms:
<ul><a href="https://github.com/Rounderr21"><img className="github-image" src={githubImage} alt="Github account" /></a></ul>
<ul><a href="https://www.linkedin.com/in/cody-schwengler/"><img className="linkedin-image" src={linkedinImage} alt="Linkedin account" /></a></ul>
<ul><a href="https://www.instagram.com/bloodhaven_productions/"><img className="instagram-image" src={instagramImage} alt="Instagram account" /></a></ul>
<ul><a href="https://www.facebook.com/profile.php?id=100083051096158"><img className="facebook-image" src={facebookImage} alt="Facebook Profile" /></a></ul>
<ul><a href="https://bloodhavenproductions.com/"><img className="bloodhaven-image" src={bloodhavenImage} alt="Bloodhaven Productions Website" /></a></ul>

    </ol>
</div>
</div>

    );
}