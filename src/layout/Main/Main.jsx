import Header from "../../pages/Header/Header";
import Footer from "../../pages/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../../shared/LeftNav/LeftNav";
import RightNav from "../../shared/RightNav/RightNav";
import TopNav from "../../shared/TopNav/TopNav";
import Headline from "../../shared/Headline/Headline";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Main = () => {
  const handleSearch = () => {
    // const [searchText, setSearchText] = useState("");
    const searchInput = document.querySelector("#search-input");

    console.log(searchInput.innerText);
  };
  return (
    <>
      <Header></Header>
      <Headline></Headline>
      <TopNav></TopNav>
      <div className="text-center">
        <input
          onKeyDown={handleSearch}
          className="w-75 p-2 rounded my-2"
          type="text"
          name="search"
          id="search-input"
          placeholder="Please Search Here"
        />
      </div>
      <Container>
        <Row className="d-flex ms-2">
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <Outlet></Outlet>
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
