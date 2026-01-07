import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Tamil Vendhan</span>, a
            <span className="purple"> Full Stack Developer</span> based in
            <span className="purple"> Tamil Nadu, India</span>.
            <br />
            <br />I have{" "}
            <span className="purple">1 year of hands-on experience</span> in
            building and maintaining real-world web applications using modern
            JavaScript technologies.
            <br />
            <br />I am currently working as a
            <span className="purple"> Software Developer</span> at
            <span className="purple">
              {" "}
              Holy Cross College (Autonomous), Trichy
            </span>
            , where I develop scalable academic and administrative systems.
            <br />
            <br />I hold a{" "}
            <span className="purple">
              Bachelor of Computer Applications (BCA)
            </span>{" "}
            from <span className="purple">Bishop Heber College, Trichy</span>.
            <br />
            <br />
            Outside of development, I enjoy activities that help me stay
            creative and focused.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing strategy & competitive games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and discovering new places
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
