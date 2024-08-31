import "./Header.scss";
import logo from "../../assets/images/diamond-keeper.png";

import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <>
      <header>
        <div className="header__logo">
          <img src={logo}></img>
        </div>
      </header>
    </>
  );
}

export default Header;
