import { Rating } from "@smastrom/react-rating";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const SingleRandomToy = ({ toy }) => {
  const { _id, toy_name, rating, price, toy_pic } = toy;
  return (
    <div className="bg-white p-5 space-y-3">
      <figure className="group relative">
        <img
          src={toy_pic}
          alt=""
          className="max-w-[384px] w-full h-full max-h-[256px] mx-auto"
        />
        <div className="absolute w-full h-full top-0 left-0 opacity-0 group-hover:opacity-100">
          <Link
            to={`/toyDetails/${_id}`}
            className="bottom-0 opacity-0 group-hover:bottom-5 group-hover:opacity-100 absolute left-5 w-9 h-9 flex justify-center items-center rounded-full border-2 border-emerald-600 transition-all hover:bg-emerald-600 hover:text-white"
          >
            <FaEye />
          </Link>
        </div>
      </figure>
      <h3 className="font-poppins text-xl font-semibold mt-2">{toy_name}</h3>
      <Rating style={{ maxWidth: 85 }} value={Math.round(rating)} readOnly />
      <p className="font-poppins font-bold cs-text-gradient text-2xl">
        $ : {price}
      </p>
    </div>
  );
};

export default SingleRandomToy;
