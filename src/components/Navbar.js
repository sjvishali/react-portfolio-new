import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { Link as Li } from "react-scroll";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          {/* <h1 className="font-signature text-2xl cursor-pointer">T</h1> */}
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Li
                to="home"
                smooth
                duration={500}
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Li>
            </Nav.Item>

            <Nav.Item>
              <Li
                to="about"
                smooth
                duration={500}
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Li>
            </Nav.Item>

            <Nav.Item>
              <Li
                to="skillset"
                smooth
                duration={500}
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                <AiFillStar style={{ marginBottom: "2px" }} /> SkillSet
              </Li>
            </Nav.Item>

            <Nav.Item>
              <Li
                to="projects"
                smooth
                duration={500}
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Li>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1JlihXs3YeeXSQGeJ3jofWIR_ypYC-JRl/view?usp=drivesdk"
                className="fork-btn-inner nav-link"
                rel="noreferrer"
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
