import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../../pages/Home/NewsCard/NewsCard";

const Category = () => {
  const { id } = useParams();
  const category = useLoaderData();

  return (
    <div>
      <h3>Dragon News Home</h3>
      <h4>This Category total Cards: {category.length}</h4>
      <section className="all-news">
        {category.map((article) => (
          <NewsCard key={article._id} article={article}></NewsCard>
        ))}
      </section>
    </div>
  );
};

export default Category;
