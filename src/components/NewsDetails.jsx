import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NewsDetails = ({ newsData }) => {
  const { title, _id, image_url, details,category_id } = newsData;
  return (
    <div>
      <div className="card bg-base-100 rounded-non ">
        <figure className="px-10 pt-10">
          <img
            src={image_url}
            alt="news detail image"
            className=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions">
          
            <Link to={`/category/${category_id}`} className="btn bg-red-500 text-white mt-4"><FaArrowLeftLong />All news in the Category </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
