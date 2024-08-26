import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCards(props) {
  // The description is already passed as an array of points
  const descriptionPoints = props.description;

  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>
          <strong className="purple">{props.companyName}</strong>
        </Card.Title>
        < br />
        {props.designation && (
          <Card.Subtitle className="mb-3 designation ">
            {/* {props.designation} */}
            <strong className="white">{props.designation}</strong>
          </Card.Subtitle>
        )}
        {props.companyLink && (
          <Card.Subtitle className="mb-2 text-muted">
            <a href={props.companyLink} target="_blank" rel="noopener noreferrer">
              {props.companyLink}
            </a>
          </Card.Subtitle>
        )}
        <Card.Text style={{ textAlign: "justify" }}>
          <ul>
            {descriptionPoints.map((point, index) => (
              <li key={index}>{point.trim()}</li>
            ))}
          </ul>
        </Card.Text>
        <br />
        <Card.Text className="project-date" style={{ color: "white" , fontSize:"large" }}>
          {props.startDate} - {props.endDate}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCards;
