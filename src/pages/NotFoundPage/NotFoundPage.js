import { Link } from "react-router-dom";
function NotFoundPage() {
	return (
		<>
			<h1>404 😉 Page Not Found</h1>
			<p>Sorry, the page you are looking for could not be found.</p>
			<br />
			<p>
				Go to <Link to="/">Home Page</Link>.
			</p>
		</>
	);
}

export default NotFoundPage;
