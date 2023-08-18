import Header from "../pages/Header/Header";
import Footer from "../pages/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../shared/LeftNav/LeftNav";
import RightNav from "../shared/RightNav/RightNav";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Row className="d-flex ms-2">
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <h2>Main Content</h2>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Main;
