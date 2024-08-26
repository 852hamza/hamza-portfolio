import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiLinux,
  SiCentos,
  SiHashnode,
  SiPycharm,
  SiWireguard, // Used for VPN representation
  SiRemix // Used for Remmina representation
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <p>macOS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p>Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p>Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <p>PyCharm</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCentos />
        <p>CentOS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWireguard />
        <p>VPN</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRemix />
        <p>Remmina</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHashnode />
        <p>Hashnode</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
