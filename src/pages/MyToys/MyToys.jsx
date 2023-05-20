import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Toaster, toast } from "react-hot-toast";
import { IoMdArrowDropdown } from "react-icons/io";
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

  const handleDeleteToys = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`${apiDomain}toy/delete?id=${id}`, {
          method: "DELETE",
          headers: {
            authenticate: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
          .then(res => res.json())
          .then(data => {
            if (data.acknowledged) {
              const restToy = myToys.filter(myToy => myToy._id !== id);
              setMyToys(restToy);
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            }
          })
          .catch(err => {
            toast.error("Some thing went wrong");
            console.log(err);
          });
      }
    });
  };
  const handleSort = value => {
    const email = { email: user?.email };
    fetch(`${apiDomain}toy/sort`, {
      method: "POST",
      headers: {
        authenticate: `Bearer ${localStorage.getItem("access_token")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, value }),
    })
      .then(res => res.json())
      .then(data => setMyToys(data))
      .catch(err => console.log(err));
  };
  return (
    <section className="cs-container py-10">
      <div>
        <div>
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost normal-case m-1 border border-slate-300"
            >
              Sort by
              <span className="ml-2">
                <IoMdArrowDropdown />
              </span>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={() => handleSort(1)}>
                <a>Ascending</a>
              </li>
              <li onClick={() => handleSort(-1)}>
                <a>Descending</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
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
                  <td>{myToy.available_quantity}</td>
                  <td>{myToy.price}</td>
                  <td>
                    <Link
                      to={`/editToy/${myToy._id}`}
                      className="btn btn-ghost"
                    >
                      <FiEdit2 />
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteToys(myToy._id)}
                      className="btn btn-ghost"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default MyToys;
