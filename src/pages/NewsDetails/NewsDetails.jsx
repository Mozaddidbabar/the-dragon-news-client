import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import EditorsInsights from "../News/EditorsInsights/EditorsInsights";

const NewsDetails = () => {
  const newsDetails = useLoaderData();

  console.log("News Details");
  const {
    _id,
    category_id,
    author,
    title,
    image_url,
    total_view,
    details,
    thumbnail_url,
    rating,
  } = newsDetails;
  return (
    <div>
      <h4>Dragon News</h4>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button style={{ width: "323px", height: "48px" }} variant="danger">
              <BiLeftArrowAlt style={{ width: "24px", height: "24px" }} /> All
              News in this Category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsights></EditorsInsights>
    </div>
  );
};

export default NewsDetails;
