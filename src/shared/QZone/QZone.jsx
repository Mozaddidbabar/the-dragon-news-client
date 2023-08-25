import qzone1 from "../../assets/qZone1.png";
import qzone2 from "../../assets/qZone2.png";
import qzone3 from "../../assets/qZone3.png";
const QZone = () => {
  return (
    <div className="bg-body-tertiary p-2">
      <h5>QZone</h5>
      <img className="w-75 ms-4" src={qzone1} alt="" />
      <img className="w-75 ms-4" src={qzone2} alt="" />
      <img className="w-75 ms-4" src={qzone3} alt="" />
    </div>
  );
};

export default QZone;
