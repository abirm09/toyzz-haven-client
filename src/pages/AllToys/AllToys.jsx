import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const AllToys = () => {
  const toysFromLoader = useLoaderData();
  const [toys, setToys] = useState(toysFromLoader);
  const { apiDomain } = useContext(AuthContext);
  const handleSearch = event => {
    event.preventDefault();
    const form = event.target;
    const text = form.search.value;
    fetch(`${apiDomain}toys/search?search=${text}`)
      .then(res => res.json())
      .then(data => {
        setToys(data);
        console.log(data);
      });
  };
  return (
    <section className="cs-container">
      <div className="mt-5">
        <form onSubmit={handleSearch}>
          <div className="max-w-md border rounded-lg">
            <input
              type="text"
              name="search"
              className="w-[75%] outline-none px-2 py-3 rounded-lg"
              placeholder="search..."
            />
            <input
              type="submit"
              value="search"
              className="w-[25%] cs-btn-primary"
            />
          </div>
        </form>
      </div>
      <div className="mt-10">
        <p className="py-3 font-poppins font-semibold">
          Available toys : {toys.length}
        </p>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Seller</th>
                <th>Toy name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy, index) => (
                <tr key={toy._id}>
                  <td>{index + 1}</td>
                  <td>{toy.seller_name}</td>
                  <td>{toy.toy_name}</td>
                  <td>{toy.subcategory}</td>
                  <td>$ {toy.price}</td>
                  <td>{toy.available_quantity}</td>
                  <td>
                    <Link
                      to={`/toyDetails/${toy._id}`}
                      className="cs-btn-primary"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllToys;
