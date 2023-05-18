import logo from "../../../assets/common/logo.png";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
const Header = () => {
  const navLinks = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/allToys">All Toys</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/myToys">My Toys</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/addAToy">Add a Toy</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/blog">Blog</ActiveLink>
      </li>
    </>
    // Home, All Toys, My Toys, Add A Toy, Blogs,
  );
  return (
    <header className="bg-slate-100">
      <div className="cs-container">
        <div className="navbar">
          <div className="navbar-start w-full">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-montserrat font-semibold"
              >
                {navLinks}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl ml-auto lg:ml-0">
              <img
                src={logo}
                alt="logo"
                className="max-w-[150px] md:max-w-[200px]"
              />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-montserrat font-semibold">
              {navLinks}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
