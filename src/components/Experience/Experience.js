import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCards";
import Particle from "../Particle";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Professional <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few roles I have held recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCard
              companyName="Ozoned Digital"
              designation="DevOps Engineer"
              companyLink="https://ozoneddigital.com/"
              description={[
                "Actively involved in deploying Android and iOS applications as well as PHP deployments, ensuring smooth and efficient release cycles.",
                "Contributed significantly to the CI/CD pipelines for various projects, enhancing the speed and reliability of development workflows.",
                "Leveraged Terraform for infrastructure management."
              ]}
              startDate="March 2024"
              endDate="Present"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              companyName="AxcelerateAI"
              designation="DevOps Engineer"
              companyLink="https://www.axcelerate.ai/"
              description={[
                "Optimized GCP-based workflows by implementing Google Kubernetes Engine (GKE) deployments, achieving a 30% faster deployment speed.",
                "Leveraged Cloud Functions for efficient serverless computing, reducing processing times by 40%.",
                "Managed AWS ECS scalable containerized applications, enhancing operational capabilities."
              ]}
              startDate="October 2023"
              endDate="April 2024"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              companyName="EGI"
              designation="Cloud Engineer"
              companyLink="https://www.eastgateindustries.com/"
              description={[
                "Continuous Integration and Continuous Deployment (CI & CD) using Azure DevOps.",
                "Deployed the Infrastructure on Kubernetes using Docker, Azure Container Registry, and Azure DevOps.",
                "Worked reliably on Azure Kubernetes Service (AKS) for deploying and building Docker images for Micro-services."
              ]}
              startDate="January 2023"
              endDate="October 2023"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              companyName="Youth Tech Solutions"
              designation="Junior Cloud Engineer"
              // companyLink="https://www.youthtechsolutions.com"
              description={[
                "Developed, maintained, and supported a Continuous Integration framework based on AWS Code Deploy and Bitbucket.",
                "Demonstrated expertise in AWS Cloud, including server infrastructure development, VPC configuration, EC2 instances, CloudWatch, Cloud Events, and Security Groups."
              ]}
              startDate="July 2022"
              endDate="November 2022"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
