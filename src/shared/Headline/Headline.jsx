import React from "react";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Headline = () => {
  return (
    <Container className="d-flex p-2 my-3 bg-body-tertiary rounded">
      <Button className="px-2" variant="danger">
        Latest
      </Button>
      <Marquee speed={100} pauseOnHover>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </Container>
  );
};

export default Headline;
