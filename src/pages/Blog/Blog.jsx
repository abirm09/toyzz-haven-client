import { useEffect, useState } from "react";

const Blog = () => {
  const [questionAns, setQuestionAns] = useState([]);
  useEffect(() => {
    fetch("/blog.json")
      .then(res => res.json())
      .then(data => setQuestionAns(data));
  }, []);
  return (
    <section className="cs-container py-10">
      <h2 className="section-title">Question answers</h2>
      <div className="space-y-5 font-poppins">
        {questionAns.map((blog, index) => (
          <div key={index}>
            <h2 className="font-bold">
              <span>{index + 1}. </span>
              <span>{blog.question}</span>
            </h2>
            {blog.answer.split("/").map((ans, index) => (
              <p key={index} className="mt-2">
                {ans}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
