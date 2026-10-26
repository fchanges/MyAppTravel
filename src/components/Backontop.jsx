import "../styles/Backontop.css";

const BackOnTop = () => {
  return (
    <div className="container-ontop">
      <a href="#">
        <span className="material-symbols-outlined">
          keyboard_double_arrow_up
        </span>
        <br />
        Back to top
      </a>
    </div>
  );
};

export default BackOnTop;

// FONT AWESOME AREA //

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons"; // For all brand icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab); // Adds all brand icons
// FONT AWESOME AREA //
