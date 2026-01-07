import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple">ME</span>
            </h1>

            <p className="home-about-body">
              Hi, I’m <span className="purple">Tamil Vendhan</span>, a
              <span className="purple"> Full Stack Developer</span> from
              <span className="purple"> Tamil Nadu, India</span>.
              <br />
              <br />I am a{" "}
              <b className="purple">
                Full Stack Developer with 1 year of hands-on experience
              </b>{" "}
              in building, deploying, and maintaining real-world web
              applications.
              <br />
              <br />I currently work as a{" "}
              <b className="purple">Software Developer</b> at
              <b className="purple"> Holy Cross College (Autonomous), Trichy</b>
              , where I develop academic and administrative systems used by
              <b className="purple"> 5,000+ users</b>.
              <br />
              <br />I have strong experience with
              <b className="purple"> MERN and MEAN stacks</b>, implementing
              secure authentication, role-based access control (RBAC), and
              scalable REST APIs.
              <br />
              <br />
              My primary interests are building
              <b className="purple">
                {" "}
                scalable, user-centric web applications
              </b>{" "}
              using modern technologies such as
              <b className="purple">
                {" "}
                React, Angular, Node.js, Express and PHP
              </b>
              and databases like <b className="purple"> MongoDB and MySQL</b>.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
