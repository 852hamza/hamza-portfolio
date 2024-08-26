import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiDigitalocean,
  SiIbm,
  SiCloudflare,
  SiOracle,
} from "react-icons/si";

function CloudStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <p>AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
        <p>Azure</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
        <p>Google Cloud</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDigitalocean />
        <p>DigitalOcean</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIbm />
        <p>IBM Cloud</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCloudflare />
        <p>Cloudflare</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
        <p>Oracle Cloud</p>
      </Col>
    </Row>
  );
}

export default CloudStack;
