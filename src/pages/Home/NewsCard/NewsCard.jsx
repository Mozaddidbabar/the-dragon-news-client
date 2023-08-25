import { useState } from "react";
import { BsBookmark, BsShare } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./NewsCard.css";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const NewsCard = ({ article }) => {
  const {
    _id,
    author,
    title,
    image_url,
    total_view,
    details,
    thumbnail_url,
    rating,
  } = article;

  const [expanded, setExpanded] = useState(false);

  const maxChars = 300;

  const formattedDate = author.published_date
    ? author.published_date.split(" ")[0]
    : null;

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  // console.log(thumbnail_url);
  return (
    <div>
      <div className="news-header mb-2">
        <div className="authors-detail">
          <div>
            <img
              width="40px"
              height="40px"
              className="pill"
              src={author?.img}
              alt=""
            />
          </div>
          <div className="">
            <h6 className="author-name">{author?.name}</h6>
            <p>{formattedDate}</p>
          </div>
        </div>
        <div>
          <BsBookmark className="me-2" />
          <BsShare className="me-2" />
        </div>
      </div>
      <div className="news-body">
        <p className="news-title">{article.title}</p>
        <img className="news-img" src={image_url} alt="" />
        {details.length < 250 ? (
          <p>{details}</p>
        ) : (
          <>
            {details.slice(0, 250)}...
            <Link
              className="text-decoration-none text-warning"
              to={`/news/${_id}`}
            >
              {" "}
              <br />
              Read More
            </Link>{" "}
          </>
        )}

        {/* <div className="news-details">
          <div className={`content-box ${expanded ? "expanded" : ""}`}>
            <p>{expanded ? details : details.slice(0, maxChars)}</p>
          </div>
          {details.length > maxChars && (
            <button className="read-more-btn" onClick={toggleExpansion}>
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div> */}
        <hr />
        <div className="ratings d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Rating
              className="me-2"
              style={{ maxWidth: 150 }}
              value={Math.round(rating?.number)}
              readonly
            />
            <span className="rating-number">{rating?.number}</span>
          </div>
          <div className="view-icons">
            <AiFillEye className="eye-icon" />
            <p className="ms-2">{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
