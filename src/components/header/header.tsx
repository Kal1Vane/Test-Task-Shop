import { AppRoute } from "../../const";
import Logo from "../logo/logo";
import './header.css';

function Header() : JSX.Element {

return (
<div className="header__container">
  <header className="header">
    <div className="header__left">
      <Logo />
    </div>
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <a className="header__nav-link" href={AppRoute.About}>
            About
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href={AppRoute.Services}>
           Services
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href={AppRoute.Pricing}>
           Pricing
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href={AppRoute.Blog}>
           Blog
          </a>
        </li>
      </ul>
    </nav>
    <div className="header__right">
      <button className="header__right-button">Contact</button>
    </div>
  </header>
</div>
)
}

export default Header;