import "../styles/Footer.css";
import MarqueeNewsStyle from './marquee'

function Footer() {
  return (
    <>
    <div className="container-marquee">
      <MarqueeNewsStyle />
    </div>
    <div className="container-footer">
      <div className="footer-flex">
        <div className="footer-items-logo">
          <img src="images/logo_MyApp_Travel.png" alt="MyAppTravel-logoFooter" useMap="#logo-footer" />
          <map name="logo-footer">
            <area shape="rect" coords="0,0,157,100" href="/" alt="MyAppTravel-logoFooter" />
          </map>
        </div>
        <div className="footer-items-text">
          <p>Copyright &copy; {new Date().getFullYear()}. All Right Reserved.</p>
          <p>*Apple Street, No.1, LA,</p>
          <p>California 90001 - USA*.</p>
          <p>*(ADDRESS ONLY A TEMPLATE)*</p>
          <br />
          <div className="icons">
            <a href="#facebook">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
            <a href="#whatsapp">
              <FontAwesomeIcon icon={["fab", "whatsapp"]} />
            </a>
            <a href="#instagram">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a href="#linkedin">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a href="#youtube">
              <FontAwesomeIcon icon={["fab", "youtube"]} />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;

// FONT AWESOME AREA //

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons"; // For all brand icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab); // Adds all brand icons
// FONT AWESOME AREA //
