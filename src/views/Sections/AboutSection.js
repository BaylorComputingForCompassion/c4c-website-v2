/**
 * @TODO Extract strings from this page into resource file
 */

import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function AboutSection() {
  return (
    <div className="section section-about-us">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <div>
              <img
                alt="Logo"
                className="img-fluid"
                style={{ maxWidth: "10vw" }}
                src={require("assets/img/C4C_Logo.png")}
              />
            </div>
            <h2 className="title">Who are we?</h2>
            <p>
              <b>
                Computing for Compassion is a student-led organization whose
                mission is to serve compassion-based organizations through the
                appropriate application of technology. We help provide technological
                solutions and education to local schools, non-profits, and churches
                in the Waco, TX community.
              </b>
            </p>
            <p>
              <b>
                We are based out of Baylor University in Waco, TX. Our services
                are focused on serving the surrounding communities, but
                we're hoping to expand and establish new chapters in other
                universities around Texas soon.
              </b>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutSection;
