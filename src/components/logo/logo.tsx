import { AppRoute } from "../../const";

function Logo() : JSX.Element {
  return (
    <a href={AppRoute.Main} className="header__logo-link" onClick={(evt) => evt.preventDefault()}>
      <img 
      className="header__logo"
      src="img/logo.svg"
      alt="Agency logo"
      width={140}
      height={45}
      />
    </a>
  )
}
export default Logo;
