import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Socialize() {
  return (
    <div className="socialize" id="contacts">
      <form action="#email" id="email" autoComplete="off">
        <input
          className="socialize_email"
          type="email"
          placeholder="Email pt noutati"
          name="Email for newsletter"
          required
        />
        <button className="socialize_send" type="submit">
          <FontAwesomeIcon icon={faGreaterThan} />
        </button>
      </form>
      <div className="socialize_social-cont">
        <a
          href="https://www.facebook.com/CDPROJEKTRED/"
          aria-label="See our facebook page"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          href="https://twitter.com/witchergame"
          aria-label="See our twitter page"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="www.google.com"
          aria-label="See our instagram page"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}

export default Socialize;
