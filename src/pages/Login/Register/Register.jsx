import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import "./Register.css";
import Terms from "../Terms/Terms";

const Register = () => {
  const { setError, error, setUser, googleSignIn, createUser } =
    useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 8) {
      setError("password must be at least 8 characters");
    }
    // console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        createdUser.displayName = name;
        createdUser.photoURL = photo;
        console.log(createdUser);
        setUser(createdUser);
        form.reset();
      })
      .catch((error) => {
        setError(error);
      });

    alert("Registered successfully");
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        navigate("/category/0");
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <Container className="w-50 p-5 mx-auto login-box">
      <h2 className="text-center login-heading">Create Your Account</h2>
      <Form className="" onSubmit={handleRegister}>
        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
          <Form.Label>Enter Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter Your PhotoURL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Your email address"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter Your Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onClick={handleAccepted}
            name="accept"
            label={
              <>
                <Link
                  className="text-decoration-none w-100"
                  onClick={() => setModalShow(true)}
                >
                  Accept Terms & Conditions
                </Link>

                <Terms show={modalShow} onHide={() => setModalShow(false)} />
              </>
            }
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onClick={handleAccepted}
            name="accept"
            label={
              <>
                Accept{" "}
                <Link className="text-decoration-none text-primary" to="/terms">
                  Terms & Conditions
                </Link>{" "}
              </>
            }
          />
        </Form.Group> */}
        {error && <p className="text-danger my-2">{error}</p>}
        <Button
          className="w-100"
          variant="dark"
          disabled={!accepted}
          type="submit"
        >
          Register
        </Button>
        <p className="mt-4 mb-5 text-center">
          Already Have An Account?{" "}
          <Link className="text-decoration-none text-warning" to="/login">
            Login
          </Link>{" "}
          <br />
          <button
            onClick={handleGoogleLogin}
            className="text-black w-50 rounded p-1 mb-4 google-btn"
          >
            <FcGoogle /> Google Sign In
          </button>
        </p>
      </Form>
    </Container>
  );
};

export default Register;
