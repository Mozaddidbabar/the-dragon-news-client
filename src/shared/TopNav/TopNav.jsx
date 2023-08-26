import { Container, Nav, Navbar } from "react-bootstrap";
import "./TopNav.css";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const TopNav = () => {
  const { user, setUser, logOut, setError } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        setUser(null);
        alert("User logged out Successfully");
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link
                className="text-decoration-none text-dark me-2"
                to="/category/0"
              >
                Home
              </Link>
              <Link className="text-decoration-none text-dark me-2" to="/about">
                About
              </Link>
              <Link className="text-decoration-none text-dark" to="/career">
                Career
              </Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              {user?.photoURL ? (
                <>
                  <span className="profile-box">
                    <img
                      className="profile-photo"
                      src={user?.photoURL}
                      alt=""
                    />
                    <span>{user?.displayName}</span>{" "}
                  </span>
                </>
              ) : (
                <CgProfile className="fs-3 me-2"></CgProfile>
              )}
              {user ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="bg-dark ms-2 text-decoration-none px-4 py-2 text-white rounded"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="bg-black text-decoration-none px-4 py-2 text-white rounded"
                >
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNav;
