import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const ToyCard = ({ toy }) => {
  const { toy_pic, toy_name, rating, price } = toy;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={toy_pic} alt="Shoes" />
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
          <button className="cs-btn-primary">View details</button>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
