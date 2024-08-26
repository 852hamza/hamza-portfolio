import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiDocker, DiJenkins, DiGit } from "react-icons/di";
import {
  SiTerraform,
  SiKubernetes,
  SiAnsible,
  SiNginx,
  SiLinux,
  SiPrometheus,
  SiJira,
  SiCircleci,
  SiApachejmeter,
  SiGrafana,
  SiGitlab,
  SiServerless,
  SiApachemaven,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
        <p>Terraform</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
        <p>Kubernetes</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <p>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible />
        <p>Ansible</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNginx />
        <p>Nginx</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p>Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJenkins />
        <p>Jenkins</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus />
        <p>Prometheus</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <p>Jira</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCircleci />
        <p>CircleCI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachejmeter />
        <p>JMeter</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana />
        <p>Grafana</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
        <p>GitLab CI/CD</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiServerless />
        <p>Serverless</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachemaven />
        <p>Maven</p>
      </Col>
    </Row>
  );
}

export default Techstack;
