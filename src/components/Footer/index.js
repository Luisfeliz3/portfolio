import React from "react";
import "./style.css";
import Col from "../Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div>
      <footer id="sticky-footer" className=" bg-dark rounded-lg">
        <Col size="12">
          <a
            href="https://www.facebook.com/profile.php?id=100000519272654"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icons" icon={["fab", "facebook"]} />
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            className="fab fa-twitter"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icons" icon={["fab", "twitter"]} />
          </a>

          <a
            href="https://www.linkedin.com/in/luis-feliz-465b14192/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icons" icon={["fab", "linkedin"]} />
          </a>

          <a
            href="https://github.com/Luisfeliz3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icons" icon={["fab", "github"]} />
          </a>
        </Col>
      </footer>
    </div>
  );
}

export default Footer;
