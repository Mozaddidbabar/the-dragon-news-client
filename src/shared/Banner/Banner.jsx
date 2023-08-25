import { Button } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="mt-2 banner">
      <h4>Create an Amazing Newspaper</h4>
      <p>
        Discover thousands of options, easy to customize layouts, one-click to
        import demo and much more.
      </p>
      <Button variant="danger">Learn More</Button>
    </div>
  );
};

export default Banner;
