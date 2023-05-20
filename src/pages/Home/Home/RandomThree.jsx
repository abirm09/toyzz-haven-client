import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import SingleRandomToy from "./singleRandomToy";

const RandomThree = () => {
  const { apiDomain } = useContext(AuthContext);
  const [randomToy, setRandomToy] = useState([]);
  useEffect(() => {
    fetch(`${apiDomain}toys/randomThree`)
      .then(res => res.json())
      .then(data => setRandomToy(data));
  }, [apiDomain]);
  return (
    <section className="bg-slate-100 mt-20 py-10">
      <div className="cs-container">
        <h2 className="section-title">Random toy</h2>
        <p className="section-sub-title">
          Choose your toy from random.{" "}
          <span
            onClick={() => location.reload()}
            className="text-green-600 font-bold cursor-pointer"
          >
            Reload
          </span>{" "}
          the page to get new.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {randomToy.map(toy => (
            <SingleRandomToy key={toy._id} toy={toy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomThree;
