import { Link } from "react-router-dom";
import errorImg from "../../assets/Error-page/page-404.svg";
const Error = () => {
  return (
    <section>
      <div className="space-y-10">
        <img className="max-w-lg mx-auto mt-20" src={errorImg} alt="404" />
        <div className="flex justify-center">
          <Link to="/" className="cs-btn-primary ">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
