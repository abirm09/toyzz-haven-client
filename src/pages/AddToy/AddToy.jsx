import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const AddToy = () => {
  const { user, apiDomain } = useContext(AuthContext);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`${apiDomain}categories`)
      .then(res => res.json())
      .then(data => setCategory(data));
  }, [apiDomain]);
  const handleAddToy = event => {
    event.preventDefault();
    const form = event.target;
    const sellerName = user?.displayName;
    const email = user?.email;
    const toyName = form.toy_name.value;
    const photo = form.photo.value;
    const category = form.Category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const toyDetails = {
      sellerName,
      email,
      toyName,
      photo,
      category,
      price,
      rating,
      quantity,
      description,
    };
    console.log(toyDetails);
  };
  return (
    <section className="cs-container py-5">
      <div className="border p-3 max-w-6xl mx-auto">
        <h2 className="font-poppins text-xl  font-semibold my-5 cs-text-gradient">
          Add a toy
        </h2>
        <form onSubmit={handleAddToy}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-poppins">
            <div className="cs-form">
              <label htmlFor="seller_name">Seller name</label>
              <input
                type="text"
                name="seller_name"
                readOnly
                defaultValue={user?.displayName}
              />
            </div>
            <div className="cs-form">
              <label htmlFor="email">Seller email</label>
              <input
                type="text"
                name="email"
                readOnly
                defaultValue={user?.email}
              />
            </div>
            <div className="cs-form">
              <label htmlFor="toy_name">Type toy name</label>
              <input type="text" name="toy_name" placeholder="toy name" />
            </div>
            <div className="cs-form">
              <label htmlFor="photo">Toy photo url</label>
              <input
                type="text"
                name="photo"
                placeholder="http://www.example.com/image.jpg"
              />
            </div>
            <div className="cs-form">
              <label htmlFor="Category">Category</label>
              <select name="Category">
                {category.map((cate, index) => (
                  <option key={index}>{cate}</option>
                ))}
              </select>
            </div>
            <div className="cs-form">
              <label htmlFor="price">Price</label>
              <input type="number" name="price" placeholder="$ 20.99" />
            </div>
            <div className="cs-form">
              <label htmlFor="rating">Rating</label>
              <input type="number" name="rating" placeholder="4.9" />
            </div>
            <div className="cs-form">
              <label htmlFor="Quantity">Available Quantity</label>
              <input type="number" name="quantity" placeholder="20" />
            </div>
            <div className="cs-form col-span-1 md:col-span-2">
              <label htmlFor="Description">Description</label>
              <textarea
                name="description"
                placeholder="Short description"
              ></textarea>
            </div>
          </div>
          <input type="submit" value="Add toy" className="cs-btn-primary" />
        </form>
      </div>
    </section>
  );
};

export default AddToy;
