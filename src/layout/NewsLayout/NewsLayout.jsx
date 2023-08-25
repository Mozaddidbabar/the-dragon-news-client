import Header from "../../pages/Header/Header";
import Footer from "../../pages/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../../shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row className="d-flex ms-2">
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
