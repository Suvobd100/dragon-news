import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-[#D72050] text-white px-3 py-1">LatestNews</p>
      <Marquee pauseOnHover={true} speed={50} className="space-x-10">
        <Link to="/news">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, explicabo.
        </Link>
        <Link to="/news">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, explicabo.
        </Link>
        <Link to="/news">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, explicabo.
        </Link>
      </Marquee>
    </div>

  );
};

export default LatestNews;
