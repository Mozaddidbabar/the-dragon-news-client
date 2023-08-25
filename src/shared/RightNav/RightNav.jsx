import { Button, ListGroup } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import QZone from "../QZone/QZone";
import Banner from "../Banner/Banner";
import "./RightNav.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const RightNav = () => {
  const { googleSignIn, setUser, setError, githubSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const ifALreadyInLogin = location?.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        // console.log(result.user);
        setUser(result.user);
        // console.log(from);
        navigate(ifALreadyInLogin, { replace: true });
      })
      .catch((error) => {
        setError(error);
      });
  };
  const handleGitHubLogin = () => {
    githubSignIn()
      .then((result) => {
        // console.log(result.user);
        setUser(result.user);
        // console.log(from);
        navigate(ifALreadyInLogin, { replace: true });
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <div>
      <div className="google-btns">
        <h5>Login With</h5>
        <Button
          onClick={handleGoogleLogin}
          variant="outline-primary"
          className="mb-2 w-100"
        >
          <FcGoogle></FcGoogle> Login with Google
        </Button>

        <Button
          onClick={handleGitHubLogin}
          variant="outline-dark"
          className="mb-2 w-100"
        >
          <AiFillGithub></AiFillGithub> Login with Github
        </Button>
      </div>
      <div className="mt-1 mb-3 find-us-on">
        <h5>Find Us on</h5>
        <ListGroup>
          <ListGroup.Item>
            <BsFacebook className="me-2" />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <BsTwitter className="me-2" />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <BsInstagram className="me-2" />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <Banner></Banner>
    </div>
  );
};

export default RightNav;
