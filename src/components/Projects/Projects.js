import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import worldwise from "../../Assets/Projects/worldwise.png";
import eat_n_split from "../../Assets/Projects/eat_n_split.png";
import usepopcorn from "../../Assets/Projects/usepopcorn.png";
import faraway from "../../Assets/Projects/faraway.png";
import pizzamenu from "../../Assets/Projects/pizzamenu.png";
import omnifood from "../../Assets/Projects/omnifood.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Personal <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Personal and learning projects demonstrating frontend and React
          skills.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worldwise}
              title="WorldWise"
              description="City tracking application built with React, Context API, React Router v6, and React Query."
              ghLink="https://github.com/TamillVendhan/Worldwise"
              demoLink="https://worldwise-tamil.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eat_n_split}
              title="Eat & Split"
              description="React application to split expenses and track balances among friends."
              ghLink="https://github.com/TamillVendhan/eat-and-split"
              demoLink="https://eat-and-split-tamil.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={usepopcorn}
              title="UsePopcorn"
              description="Movie discovery and rating app built using React and the OMDB API."
              ghLink="https://github.com/TamillVendhan/usepopcorn"
              demoLink="https://usepopcorn-tamil.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faraway}
              title="Far Away"
              description="Travel packing list application with sorting and state management."
              ghLink="https://github.com/TamillVendhan/Far-away"
              demoLink="https://travel-list-tamil.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizzamenu}
              title="Pizza Menu"
              description="Simple React app showcasing a static pizza menu using reusable components."
              ghLink="https://github.com/TamillVendhan/pizza-menu"
              demoLink="https://pizza-menu-tamil.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={omnifood}
              title="Omnifood"
              description="Responsive food delivery landing page built with HTML and CSS."
              ghLink="https://github.com/TamillVendhan/Omnifood-"
              demoLink="https://omnifood-tamilvendhan.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
