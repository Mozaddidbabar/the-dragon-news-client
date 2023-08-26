import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const { setUser, googleSignIn, setError, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // console.log(location);
  const from = location?.state?.from?.pathname || "category/0";
  const ifALreadyInLogin = location?.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error);
      });
    // console.log(user);
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        // console.log(from);
        navigate(ifALreadyInLogin, { replace: true });
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <Container className="w-50 p-5 mx-auto login-box">
      <h2 className="text-center login-heading">Login Your Account</h2>
      <Form className="" onSubmit={handleLogin}>
        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Your email address"
          />
        </Form.Group>

        <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button className="w-100" variant="dark" type="submit">
          Login
        </Button>
        <p className="mt-4 mb-5 text-center">
          Dont’t Have An Account?{" "}
          <Link className="text-decoration-none text-warning" to="/register">
            Register
          </Link>{" "}
          <br />
          <button
            onClick={handleGoogleLogin}
            className="text-black w-50 rounded p-1 google-btn"
          >
            <FcGoogle /> Google Sign In
          </button>
        </p>
      </Form>
    </Container>
  );
};

export default Login;
