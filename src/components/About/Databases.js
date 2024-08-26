import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPostgresql, SiMysql, SiMicrosoftsqlserver, SiMongodb, SiSqlite, SiPhpmyadmin } from "react-icons/si";

function DatabaseStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
        <p>Microsoft SQL Server</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <p>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
        <p>SQLite</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhpmyadmin />
        <p>phpMyAdmin</p>
      </Col>
    </Row>
  );
}

export default DatabaseStack;
