import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const [showNumber, setShowNumber] = useState(false);
  const [isIconVisible, setIsIconVisible] = useState(true);
  const phoneNumber = "+923061232852";

  const handlePhoneClick = () => {
    setShowNumber(true);
    setIsIconVisible(false);
  };

  useEffect(() => {
    if (showNumber) {
      const timer = setTimeout(() => {
        setShowNumber(false);
        setIsIconVisible(true);
      }, 6000); // 6 seconds

      return () => clearTimeout(timer);
    }
  }, [showNumber]);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple">M Hamza Shabbir</span>{" "}
              from
              <span className="purple"> Lahore, Pakistan</span>. I am an
              experienced <span className="purple">DevOps Engineer</span> with
              a strong background in automating, configuring, and optimizing
              cloud-based infrastructures. My expertise spans across leading
              cloud platforms including <span className="purple">GCP, AWS </span> and <span className="purple">Azure</span>. I am proficient in
              implementing containerization with Docker and Kubernetes and
              deploying serverless functions to enhance operational
              efficiencies. My professional journey includes significant
              contributions to CI/CD pipelines, leveraging Terraform for
              infrastructure management, and optimizing GCP-based workflows
              through Google Kubernetes Engine (GKE) deployments. I have
              successfully managed scalable containerized applications in AWS
              ECS and have deployed <span className="purple">infrastructures</span> on Kubernetes using Azure
              DevOps.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mhamza-shabbir/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/852hamza"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:hamzaarain852sba@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              {isIconVisible && (
                <li className="social-icons">
                  <a
                    // href="#"
                    onClick={handlePhoneClick}
                    className="icon-colour home-social-icons"
                  >
                    <AiOutlinePhone />
                  </a>
                </li>
              )}
              {showNumber && (
                <li className="social-icons">
                  <span className="purple">{phoneNumber}</span>
                </li>
              )}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
