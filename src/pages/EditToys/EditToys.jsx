import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const EditToys = () => {
  const data = useLoaderData();
  const [category, setCategory] = useState([]);
  const { user, apiDomain } = useContext(AuthContext);
  useEffect(() => {
    fetch(`${apiDomain}categories`)
      .then(res => res.json())
      .then(data => setCategory(data));
  }, [apiDomain]);

  const handleAddToy = event => {
    event.preventDefault();
    const form = event.target;
    const seller_name = user?.displayName;
    const email = user?.email;
    const toy_name = form.toy_name.value;
    const toy_pic = form.photo.value;
    const subcategory = form.Category.value;
    const price = parseFloat(form.price.value);
    const rating = form.rating.value;
    const available_quantity = form.quantity.value;
    const short_description = form.description.value;
    const toyDetails = {
      seller_name,
      email,
      toy_name,
      toy_pic,
      subcategory,
      price,
      rating,
      available_quantity,
      short_description,
    };
    const bodyData = { toyDetails, id: data._id, email: user.email };
    fetch(`${apiDomain}toy/update`, {
      method: "PUT",
      headers: {
        authenticate: `Bearer ${localStorage.getItem("access_token")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(bodyData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success("Product updated successfully.");
        }
      });
  };
  return (
    <section className="cs-container pt-20">
      <form onSubmit={handleAddToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-poppins">
          <div className="cs-form">
            <label htmlFor="seller_name">Seller name</label>
            <input
              type="text"
              name="seller_name"
              readOnly
              defaultValue={data?.seller_name}
            />
          </div>
          <div className="cs-form">
            <label htmlFor="email">Seller email</label>
            <input
              type="text"
              name="email"
              readOnly
              defaultValue={data?.email}
            />
          </div>
          <div className="cs-form">
            <label htmlFor="toy_name">Type toy name</label>
            <input
              type="text"
              name="toy_name"
              placeholder="toy name"
              defaultValue={data?.toy_name}
            />
          </div>
          <div className="cs-form">
            <label htmlFor="photo">Toy photo url</label>
            <input
              type="text"
              name="photo"
              placeholder="http://www.example.com/image.jpg"
              defaultValue={data?.toy_pic}
            />
          </div>
          <div className="cs-form">
            <label htmlFor="Category">Category</label>
            <select name="Category" defaultValue={data.subcategory}>
              <option value={data.subcategory} disabled>
                {data.subcategory}
              </option>
              {category.map((cate, index) => (
                <option key={index} value={cate}>
                  {cate}
                </option>
              ))}
            </select>
          </div>
          <div className="cs-form">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              placeholder="$ 20.99"
              defaultValue={data?.price}
            />
          </div>
          <div className="cs-form">
            <label htmlFor="rating">Rating</label>
            <input
              type="text"
              name="rating"
              placeholder="4.9"
              defaultValue={data?.rating}
            />
          </div>
          <div className="cs-form">
            <label htmlFor="Quantity">Available Quantity</label>
            <input
              type="number"
              name="quantity"
              placeholder="20"
              defaultValue={data?.available_quantity}
            />
          </div>
          <div className="cs-form col-span-1 md:col-span-2">
            <label htmlFor="Description">Description</label>
            <textarea
              name="description"
              placeholder="Short description"
              defaultValue={data.short_description}
            ></textarea>
          </div>
        </div>
        <input type="submit" value="Update toy" className="cs-btn-primary" />
      </form>
      <Toaster />
    </section>
  );
};

export default EditToys;
