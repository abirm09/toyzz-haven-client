import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import ToyCard from "./ToyCard";
const Category = () => {
  const [categories, setCategories] = useState([]);
  const [toy, setToy] = useState({});
  const { apiDomain } = useContext(AuthContext);
  useEffect(() => {
    fetch(`${apiDomain}categories`)
      .then(res => res.json())
      .then(data => setCategories(data));
  }, [apiDomain]);
  useEffect(() => {
    fetch(`${apiDomain}toy/category?category=Marvel`)
      .then(res => res.json())
      .then(data => setToy(data));
  }, [apiDomain]);

  const handleTab = category => {
    fetch(`${apiDomain}toy/category?category=${category}`)
      .then(res => res.json())
      .then(data => setToy(data));
  };
  return (
    <section className="mt-20">
      <div className="cs-container">
        <h2 className="section-title">Products</h2>
        <p className="section-sub-title">Choose the best for your baby. </p>
        <div>
          {toy.length && (
            <>
              <Tabs>
                <TabList>
                  {categories.map((cate, index) => (
                    <Tab key={index} onClick={() => handleTab(cate)}>
                      {cate}
                    </Tab>
                  ))}
                </TabList>
                {
                  <>
                    {categories.map((cate, index) => (
                      <TabPanel key={index}>
                        <div className="flex gap-5 justify-center flex-wrap mt-10">
                          {toy.map(tt => (
                            <ToyCard key={tt._id} toy={tt} />
                          ))}
                        </div>
                      </TabPanel>
                    ))}
                  </>
                }
              </Tabs>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Category;
