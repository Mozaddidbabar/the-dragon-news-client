import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import insight1 from "../../../assets/editorsInsight1.png";
import insight2 from "../../../assets/editorsInsight2.png";
import insight3 from "../../../assets/editorsInsight3.png";
import { AiOutlineCalendar } from "react-icons/ai";

const EditorsInsights = () => {
  return (
    <Container className="mt-5">
      <h3 className="">Editors Insights</h3>
      <CardGroup className="gap-2">
        <Card>
          <Card.Img variant="top" src={insight1} />
          <Card.Body>
            <Card.Title
              style={{
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
              }}
            >
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {" "}
              <AiOutlineCalendar /> Jan 4, 2022
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={insight2} />
          <Card.Body>
            <Card.Title
              style={{
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
              }}
            >
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {" "}
              <AiOutlineCalendar /> Jan 4, 2022
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={insight3} />
          <Card.Body>
            <Card.Title
              style={{
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
              }}
            >
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {" "}
              <AiOutlineCalendar /> Jan 4, 2022
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default EditorsInsights;
