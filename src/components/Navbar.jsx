import { useState } from "react";

import { MdClose, MdMenu } from "react-icons/md";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { Links } from "../constants/links";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <nav className="relative">
      <div className="flex justify-between alignment py-8">
        <div className="flex items-center space-x-10">
          <Logo color="#35323E" />

          <ul className="lg:flex items-center space-x-5 hidden">
            {Links.map((link, index) => {
              return (
                <li key={index} className="link-item">
                  {link.title}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:flex items-center space-x-5 font-medium hidden">
          <button className="link-item">Login</button>
          <button className="primary-btn">Sign Up</button>
        </div>

        {/* Toggle Button */}
        <button
          className="link-item lg:hidden"
          aria-label="Menu"
          onClick={() => {
            setIsMenuActive((prevState) => !prevState);
          }}
        >
          {isMenuActive ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuActive && <MobileMenu />}
    </nav>
  );
};

export default Navbar;
