import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCard";
import Particle from "../Particle";

// Import your certificate images
import azureCert1 from "../../Assets/Certificates/azure_cert1.png";
import azureCert from "../../Assets/Certificates/azure_cert.png";
import gcpCert from "../../Assets/Certificates/gcp_cert.png";
import k8s from "../../Assets/Certificates/k8s.png";
import aws_vpc from "../../Assets/Certificates/aws-vpc.png";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the certifications I have completed.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={gcpCert}
              title="Google Professional Cloud Architect"
              link="https://www.credly.com/badges/b82538bd-5895-479b-9114-44edb15ee18e/public_url"
              buttonLabel="View Certificate"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={azureCert}
              title="Microsoft DevOps Engineer Expert"
              link="https://learn.microsoft.com/api/credentials/share/en-us/MuhammadHamzaShabbir-0240/F58098BFBF2D251E?sharingId=1170CD3045B0E99E"
              buttonLabel="View Certificate"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={azureCert1}
              title="Microsoft Azure Administrator Associate"
              link="https://learn.microsoft.com/api/credentials/share/en-us/MuhammadHamzaShabbir-0240/4B1617C1B7F90AC9?sharingId=1170CD3045B0E99E"
              buttonLabel="View Certificate"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={aws_vpc}
              title="AWS Multi-Tier VPC Architecture"
              link="https://www.coursera.org/account/accomplishments/certificate/DE6X55PNTCFM"
              buttonLabel="View Certificate"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={k8s}
              title="Fundamentals of Kubernetes Deployment"
              link="https://www.coursera.org/account/accomplishments/certificate/D6S27QKRPHZR"
              buttonLabel="View Certificate"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
