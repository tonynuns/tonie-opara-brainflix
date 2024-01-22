import { useState } from "react";
import videoDetailsArr from "./data/video-details.json";
import Navigation from "./components/Navigation/Navigation";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import "./App.scss";

function App() {
	const initialVideoObj = videoDetailsArr[0];
	const [currentVideoObj, setCurrentVideoObj] = useState(initialVideoObj);

	return (
		<>
			<Navigation />
			<CurrentVideo {...currentVideoObj} />
		</>
	);
}

export default App;
