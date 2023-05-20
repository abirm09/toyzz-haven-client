import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const ToyCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const { _id, toy_pic, toy_name, rating, price } = toy;
  const navigate = useNavigate();
  const handleViewDetails = id => {
    if (user) {
      navigate(`/toyDetails/${id}`);
    } else {
      toast.error("Please login first.");
      setTimeout(() => {
        navigate(`/toyDetails/${id}`);
      }, 3500);
    }
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={toy_pic} alt="Shoes" className="w-[384px] h-[256px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toy_name}</h2>
        <div className="space-y-2">
          <Rating
            style={{ maxWidth: 85 }}
            value={Math.round(rating)}
            readOnly
          />
          <p className="font-montserrat font-semibold">{price} $</p>
        </div>
        <div className="card-actions justify-end">
          <button
            className="cs-btn-primary"
            onClick={() => handleViewDetails(_id)}
          >
            View details
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ToyCard;
