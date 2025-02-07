import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsDetails from "./NewsDetails";
import Header from "./Header";
import RightNavbar from "./RightNavbar";

const News = () => {
  const { id } = useParams(); // Get the category ID from the URL
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          // `https://openapi.programming-hero.com/api/news/category/${id}`
          `https://openapi.programming-hero.com/api/news/${id}`
          // https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a
        );
        if (!res.ok) throw new Error("Failed to fetch data");
        const result = await res.json();
        // console.log("news detail:---", result.data[0]);
        setNewsData(result.data[0]);
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
  // console.log(newsData);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9" >
          
          <NewsDetails newsData={newsData} />
         
        </section>
        <aside className="col-span-3">
            <RightNavbar/>
          </aside>
      </main>
    </div>
  );
};

export default News;
