import logo from "../../../assets/common/logo.png";
import { FaTwitter, FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="mt-20 bg-slate-100">
      <div className="cs-container">
        <div className="footer pt-10 pb-3 text-base-content grid-cols-1 lg:grid-cols-6">
          <div className="col-span-1 font-poppins">
            <span className="footer-title">Contacts</span>
            <a href="mailto:mdabirm2004@gmail.com">mdabirm2004@gmail.com</a>
            <a href="tel:+8801789-699367">+8801789-699367</a>
            <span className="footer-title">Address</span>
            <p>88 Bankra, Assasuni, Satkhira, Bangladesh.</p>
          </div>
          <div className="col-span-1">
            <span className="footer-title">Social</span>
            <ul className="text-xl flex items-center gap-5">
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <img src={logo} alt="logo" className="max-w-[200px]" />
            <p className="text-justify font-poppins text-slate-600">
              Discover endless joy and excitement at our online toy shop.
              Explore a world of imagination and play with our wide selection of
              high-quality toys for all ages. From classic favorites to the
              latest trends, find the perfect toy to inspire laughter, learning,
              and unforgettable memories. Shop now and bring smiles to every
              child&#39;s face!
            </p>
          </div>
          <div className="col-span-1 lg:col-span-2 font-poppins">
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="cs-btn-primary absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs-bg-gradient py-2">
        <div className="cs-container">
          <p className="text-white text-center font-poppins font-semibold text-sm">
            <span>&copy;</span> Md. Abir mahmud | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
