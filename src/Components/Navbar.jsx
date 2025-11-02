import React from "react";
import { Link, NavLink } from "react-router"; 
import { MdOutlineTravelExplore } from "react-icons/md";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#00A4BB] font-semibold" : "text-gray-700 hover:text-[#00A4BB]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/destination"
          className={({ isActive }) =>
            isActive ? "text-[#00A4BB] font-semibold" : "text-gray-700 hover:text-[#00A4BB]"
          }
        >
          Destination
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/packages"
          className={({ isActive }) =>
            isActive ? "text-[#00A4BB] font-semibold" : "text-gray-700 hover:text-[#00A4BB]"
          }
        >
          Packages
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive ? "text-[#00A4BB] font-semibold" : "text-gray-700 hover:text-[#00A4BB]"
          }
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[#00A4BB] font-semibold" : "text-gray-700 hover:text-[#00A4BB]"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-[#00A4BB] font-semibold" : "text-gray-700 hover:text-[#00A4BB]"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
          <MdOutlineTravelExplore className="text-4xl text-[#00A4BB]" />
          Trip Haven
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <Link to="/login" className="btn bg-[#00A4BB] hover:bg-[#007C94] text-white">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
