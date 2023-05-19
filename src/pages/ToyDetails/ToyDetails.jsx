import { Rating } from "@smastrom/react-rating";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const data = useLoaderData();
  useEffect(() => {
    document.title = `Toyzz haven | ${data?.toy_name}`;
  }, [data]);
  const {
    toy_name,
    toy_pic,
    email,
    price,
    rating,
    available_quantity,
    short_description,
    seller_name,
  } = data;
  return (
    <section className="cs-container my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <img src={toy_pic} alt="" />
        </div>
        <div>
          <h2 className="text-3xl font-poppins font-semibold">{toy_name}</h2>
          <div className="font-poppins text-sm space-y-3 mt-5 text-slate-600">
            <p>
              Seller : <span>{seller_name}</span>
            </p>
            <p>
              Email : <span> {email}</span>
            </p>
            <p>Available quantity : {available_quantity}</p>
            <h3 className="text-3xl font-semibold cs-text-gradient">
              $ {price} <span className="text-base">tax incl.</span>
            </h3>
            <div>
              <Rating
                style={{ maxWidth: 85 }}
                value={Math.round(rating)}
                readOnly
              />
            </div>
            <p className="text-slate-500 font-poppins font-semibold">
              {short_description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyDetails;
