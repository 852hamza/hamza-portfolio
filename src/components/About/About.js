import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import DatabaseStack from "./Databases";
import CloudStack from "./Cloud";
import Programstack from "./Programing";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">DevOps</strong> Skillset
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Cloud</strong> Platforms I've Worked With
        </h1>
        <CloudStack />

        <h1 className="project-heading">
          <strong className="purple">Databases</strong> I Use
        </h1>
        <DatabaseStack />

        <h1 className="project-heading">
          <strong className="purple">Programming Languages</strong> I Use
        </h1>
        <Programstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I Use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
