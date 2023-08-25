import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LeftNav.css";
import leftPic1 from "../../assets/1.png";
import leftPic2 from "../../assets/2.png";
import leftPic3 from "../../assets/3.png";
import { AiTwotoneCalendar } from "react-icons/ai";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dragon-news-server-mozaddidbabar.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // console.log(categories);
  return (
    <div>
      <div>
        <h4 className="mb-3">All Category</h4>
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none category-link rounded"
              name={category.name}
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <div>
        <div className="left-bottom-section mb-3">
          <img src={leftPic1} alt="" />
          <h5 className="article-title">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h5>
          <div className="small-div w-75 d-flex justify-content-between align-items-center">
            <span className="keyword">Sports</span>
            <span>
              <AiTwotoneCalendar className="calendar-icon text-body-tertiary"></AiTwotoneCalendar>
            </span>
            <span className="text-body-tertiary">Jan 4, 2022</span>
          </div>
        </div>
        <div className="left-bottom-section mb-3">
          <img src={leftPic2} alt="" />
          <h5 className="article-title">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h5>
          <div className="small-div w-75 d-flex justify-content-between align-items-center">
            <span className="keyword">Sports</span>
            <span>
              <AiTwotoneCalendar className="calendar-icon text-body-tertiary"></AiTwotoneCalendar>
            </span>
            <span className="text-body-tertiary">Jan 4, 2022</span>
          </div>
        </div>
        <div className="left-bottom-section">
          <img src={leftPic3} alt="" />
          <h5 className="article-title">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h5>
          <div className="small-div w-75 d-flex justify-content-between align-items-center">
            <span className="keyword">Sports</span>
            <span>
              <AiTwotoneCalendar className="calendar-icon text-body-tertiary"></AiTwotoneCalendar>
            </span>
            <span className="text-body-tertiary">Jan 4, 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
