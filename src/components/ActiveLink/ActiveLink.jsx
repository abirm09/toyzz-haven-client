import { NavLink } from "react-router-dom";
const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "text-red-700" : "")}
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
