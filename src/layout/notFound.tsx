import { useNavigate } from "react-router-dom";
import Link from "antd/es/typography/Link";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1 className="text-7xl font-bold text-center mt-10">
          Page not found!!!
        </h1>
        <div className="text-center mt-32">
          <Link
            className="py-2 px-20 bg-gray-100 font-bold text-2xl rounded-12"
            onClick={() => navigate(-1)}
          >
            Go to previous one
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
