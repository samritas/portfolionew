import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nilestream from "../../Assets/Projects/nilestream.png";
import pageNpen from "../../Assets/Projects/pageNpen.png";
import shega from "../../Assets/Projects/shega.png";
import eldelicios from "../../Assets/Projects/eldelicios.png";
import amazon from "../../Assets/Projects/amazon.jpg"
import netflix from "../../Assets/Projects/netflix.jpg"
import snake from "../../Assets/Projects/snake.jpg"
import leanding from "../../Assets/Projects/leanding.jpeg"
import qr from "../../Assets/Projects/qr.jpg"
import apple from "../../Assets/Projects/apple.jpg"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leanding}
              isBlog={false}
              title="Leander"
              description="A system to control there transaction and customers"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon Clone"
              description="A full stack clone of amazon.com"
              demoLink="https://samritas.github.io/Amazon_clone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake Game"
              description="A simple snake game using vaniala javascrpt and pure HTML and CSS"
              demoLink="https://snakeegameee.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix"
              description="A full stacke clone of the actual Netflix"
              demoLink="https://samritas.github.io/Netflix_clone/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qr}
              isBlog={false}
              title="QR code Generator"
              description="QR code generator for  link"sny
              demoLink="https://qrcodegeneratorrrr.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apple}
              isBlog={false}
              title="Apple.com home page"
              description="The apple.come home page using react"sny
              demoLink="https://qrcodegeneratorrrr.netlify.app/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
