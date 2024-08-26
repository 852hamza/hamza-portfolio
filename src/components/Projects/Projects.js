import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import keycloak from "../../Assets/Projects/keycloak.png";  // Assuming you have appropriate images
import jenkins from "../../Assets/Projects/jenkins.png";
import loadBalancer from "../../Assets/Projects/loadBalancer.png";
import dockerNetworking from "../../Assets/Projects/dockerNetworking.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jenkins}
              isBlog={false}
              title="Jenkins Declarative Pipeline"
              description="Deployment of a to-do application from GitHub to AWS using Jenkins Declarative Pipeline, ensuring automated, efficient, and reliable CI/CD workflows, allowing you to easily write, organize, and manage your daily notes and tasks"
              ghLink="https://github.com/852hamza/jenkins-Declarative-Pipeline-note-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keycloak}
              isBlog={false}
              title="Integration and Setup of Keycloak, Jira, SonarQube, and Amplication"
              description="Comprehensive setup and integration of Keycloak for identity management, Jira for project tracking, SonarQube for code quality analysis, and Amplication for development automation."
              ghLink="https://github.com/852hamza/keycloak-jira-sonarqube-amplication-setup"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loadBalancer}
              isBlog={false}
              title="Custom Domain Configuration on AWS Load Balancer"
              description="Configuration of a custom domain to an AWS Load Balancer, facilitating the management of incoming traffic and enhancing the scalability and security of applications."
              ghLink="https://github.com/852hamza/aws-load-balancer-domain-configuration"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dockerNetworking}
              isBlog={false}
              title="Azure VM Networking for Docker Issue Resolution"
              description="Specialist in configuring Azure VM networking to resolve Docker-related issues, optimizing the performance and stability of containerized applications."
              ghLink="https://github.com/852hamza/azure-vm-docker-networking"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
