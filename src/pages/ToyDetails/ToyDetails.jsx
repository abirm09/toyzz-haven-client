import { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";

const ToyDetails = () => {
  const data = useLoaderData();
  useEffect(() => {
    document.title = `Toyzz haven | ${data?.toy_name}`;
  }, [data]);
  console.log(data);
  return (
    <div>
      <h3>fkl</h3>
    </div>
  );
};

export default ToyDetails;
