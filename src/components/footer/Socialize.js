import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Socialize() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const newsletterPlaceholderMessage = "Email pt noutati";
  const facebookLink = "https://www.facebook.com/CDPROJEKTRED/";
  const twitterLink = "https://twitter.com/witchergame";
  const instagramLink = "https://www.google.com";

  return (
    <div className="socialize" id="contacts">
      <form action="#email" id="email" autoComplete="off">
        <input
          className="socialize_email"
          type="email"
          placeholder={newsletterPlaceholderMessage}
          name={newsletterPlaceholderMessage}
          maxLength="256"
          onChange={e => setNewsletterEmail(e.target.value)}
          value={newsletterEmail}
          required
        />
        <button className="socialize_send" type="submit">
          <FontAwesomeIcon icon={faGreaterThan} />
        </button>
      </form>
      <div className="socialize_social-cont">
        <a
          href={facebookLink}
          aria-label="See our facebook page"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          href={twitterLink}
          aria-label="See our twitter page"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href={instagramLink}
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
