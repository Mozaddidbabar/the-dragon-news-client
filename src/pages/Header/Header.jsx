import moment from "moment/moment";
import logo from "../../assets/logo.png";

const Header = () => {
  // console.log("From Header");
  return (
    <div>
      <div className="text-center mt-5">
        <img src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
    </div>
  );
};

export default Header;
