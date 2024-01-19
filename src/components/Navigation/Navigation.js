import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import UploadBtn from "./UploadBtn/UploadBtn";
import Avatar from "./Avatar/Avatar";
import "./Navigation.scss";

function Navigation() {
	return (
		<header className="nav">
			<Logo />
			<SearchBar />
			<UploadBtn />
			<Avatar />
		</header>
	);
}

export default Navigation;
