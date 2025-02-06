import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../NewsCard";

const CategoryNews = () => {
  const { id } = useParams(); // Get the category ID from the URL
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://openapi.programming-hero.com/api/news/category/${id}`
        );
        if (!res.ok) throw new Error("Failed to fetch data");
        const result = await res.json();
        console.log(result.data);
        setNewsData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log(newsData);

  return <div>

<h1>Category News No:{newsData.length}</h1>
{
    newsData.map((news)=><NewsCard key={news._id} news={news}/>)
}

  </div>;
};

export default CategoryNews;
