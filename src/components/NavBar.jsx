import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
  return (
    <nav className="nav-bar-container">
      <div className="logo">
        <FontAwesomeIcon className="logo-icon" icon={faInfinity} />
        <span>Cosmic Voyage</span>
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <a href="">Home</a>
        </li>
        <li className="nav-link">
          <a href="#">Gallery</a>
        </li>
        <li className="nav-link">
          <a href="#">About</a>
        </li>
        <li className="nav-link">
          <a href="#contact">Contact</a>
        </li>
        <li className="nav-link">
          <ul className="social-links">
            <li>
              <a href="https://www.linkedin.com/in/yassinenajmi/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://github.com/Yassine-Najmi">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/YassineNajmi_">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
