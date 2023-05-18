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
    fetch(`${apiDomain}toys/categories`)
      .then(res => res.json())
      .then(data => setToy(data));
  }, [apiDomain]);
  return (
    <section className="mt-20">
      <div className="cs-container">
        <h2 className="section-title">Products</h2>
        <p className="section-sub-title">Choose the best for your baby. </p>
        <div>
          {categories.length && (
            <>
              <Tabs>
                <TabList>
                  {categories.map((cate, index) => (
                    <Tab key={index}>{cate}</Tab>
                  ))}
                </TabList>

                {
                  <>
                    <TabPanel>
                      <div className="flex flex-wrap gap-5 justify-center mt-10">
                        {toy?.marvel?.map(toy => (
                          <ToyCard key={toy._id} toy={toy} />
                        ))}
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="flex flex-wrap gap-5 justify-center mt-10">
                        {toy?.avengers?.map(toy => (
                          <ToyCard key={toy._id} toy={toy} />
                        ))}
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="flex flex-wrap gap-5 justify-center mt-10">
                        {toy?.starWars?.map(toy => (
                          <ToyCard key={toy._id} toy={toy} />
                        ))}
                      </div>
                    </TabPanel>
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
