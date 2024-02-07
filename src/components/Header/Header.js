import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import "./Header.scss";

function Header() {
	return (
		<header className="header">
			<Link className="header__logo" to="/">
				<img src={logo} alt="BrainFlix Logo" />
			</Link>
			<input
				className="header__search"
				type="text"
				id="search"
				placeholder="Search"></input>
			<button className="header__btn btn">UPLOAD</button>
			<div className="header__avatar avatar"></div>
		</header>
	);
}

export default Header;
