import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h4>About Cosmic Voyage</h4>
            <p>
              Welcome to Cosmic Voyage, your ultimate destination for exploring
              the wonders of the universe. Join us on this cosmic journey!
            </p>
          </div>
          <div className="footer-links">
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Connect</h4>
            <ul className="">
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
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Cosmic Voyage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
