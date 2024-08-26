import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython } from "react-icons/di";
import { SiFiles, SiGnubash, SiHtml5, SiCss3 } from "react-icons/si";

function Programstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFiles />
        <p>Yaml</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
        <p>Bash</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <p>CSS</p>
      </Col>
    </Row>
  );
}

export default Programstack;
