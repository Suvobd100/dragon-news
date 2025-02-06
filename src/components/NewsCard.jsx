import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  // const {title,details}=news
  return (
    <div className="card w-full bg-base-100 shadow-xl rounded-lg border">
      {/* Header Section */}
      <div className="p-4 flex justify-between items-center bg-stone-100">
        <div className="flex items-center gap-3">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <h2 className="font-semibold">{news.author.name || "Unknown"}</h2>
            <p className="text-sm text-gray-500">
              {new Date(news.author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer hover:text-gray-700" />
          <FaShareAlt className="cursor-pointer hover:text-gray-700" />
        </div>
      </div>

      <div className="p-4">
        {/* Title */}
        <div className="px-4">
          <h2 className="font-bold text-lg">{news.title}</h2>
        </div>

        {/* Image */}
        <div className="aspect-[3/2]">
          <img
            src={news.thumbnail_url}
            alt={news.title}
            className="w-full h-full
            transform scale-x-100 scale-y-70 rounded-lg"
          />
        </div>

        {/* Description */}
        <div className="p-4">
          <p className="text-sm text-gray-500">
            {news.details.length > 100
              ? `${news.details.substring(0, 100)}...`
              : news.details}
          </p>
          <button className="text-red-500 font-semibold mt-2">Read More</button>
        </div>

        {/* Footer Section */}
        <div className="p-4 flex justify-between items-center border-t">
          {/* Star Rating Section */}
          <div className="flex items-center text-yellow-500">
            {Array.from(
              { length: Math.floor(news.rating.number) },
              (_, index) => (
                <FaStar key={index} />
              )
            )}
            <span className="ml-2 font-bold text-gray-700">
              {news.rating.number}
            </span>
          </div>

          {/* Views Section */}
          <div className="flex items-center text-gray-500">
            <FaEye />
            <span className="ml-1">{news.total_view || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
