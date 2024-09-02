import "./Header.scss";
import logo from "../../assets/images/diamond-keeper.png";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div>
          <NavLink to="/">
            <img className="header__logo" src={logo} alt="logo" />
          </NavLink>
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__list-item">
              <NavLink to="/games" className="header__link">
                Games
              </NavLink>
            </li>
            <hr className="header__list-divider" />
            <li className="header__list-item">
              <NavLink to="/team" className="header__link">
                Team
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
