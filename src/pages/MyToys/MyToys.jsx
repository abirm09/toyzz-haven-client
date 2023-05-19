import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
const MyToys = () => {
  const { apiDomain, user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    const email = { email: user?.email };
    fetch(`${apiDomain}toy/getMyToy`, {
      method: "POST",
      headers: {
        authenticate: `Bearer ${localStorage.getItem("access_token")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then(res => res.json())
      .then(data => setMyToys(data))
      .catch(err => console.log(err));
  }, [apiDomain, user]);
  console.log(myToys);
  return (
    <section className="cs-container py-10">
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Rating</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((myToy, index) => (
                <tr key={myToy._id} className="font-poppins">
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={myToy.toy_pic}
                      alt={myToy.toy_name}
                      className="w-12 h-12 rounded-full"
                    />
                  </td>
                  <td>{myToy.toy_name}</td>
                  <td>{myToy.price}</td>
                  <td>{myToy.available_quantity}</td>
                  <td>
                    <button className="btn btn-ghost">
                      <FiEdit2 />
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-ghost">
                      <FaTrashAlt />
                    </button>
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

export default MyToys;
