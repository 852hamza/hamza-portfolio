import React, { useState, useEffect } from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf1 from "../../Assets/hamza_resume.pdf";
import pdf2 from "../../Assets/hamza-europe-resume.pdf"; // Add the second CV file here
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(pdf1); // State to manage selected CV
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="secondary"
            onClick={() => {
              setSelectedPdf(pdf1);
              setCurrentPage(1);
            }}
            style={{ maxWidth: "250px", marginRight: "10px" }}
          >
            General CV
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setSelectedPdf(pdf2);
              setCurrentPage(1);
            }}
            style={{ maxWidth: "250px" }}
          >
            Europe CV
          </Button>
        </Row>

        <Row className="resume">
          <Carousel>
            {[...Array(numPages).keys()].map((pageIndex) => (
              <Carousel.Item key={pageIndex}>
                <Document
                  file={selectedPdf}
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="d-flex justify-content-center"
                >
                  <Page
                    pageNumber={pageIndex + 1}
                    scale={width > 786 ? 1.7 : 0.6}
                  />
                </Document>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={selectedPdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
