import { useState } from "react";
import mainVideosArr from "./data/video-details.json";
import sideVideosArr from "./data/videos.json";
import Navigation from "./components/Navigation/Navigation";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import VideoList from "./components/VideoList/VideoList";
import "./App.scss";

function App() {
	const [mainVideoObj, setMainVideoObj] = useState(mainVideosArr[0]);
	const [sideVideosList, setSideVideosList] = useState(sideVideosArr);

	const clickHandler = (event) => {
		const newMainVideoArr = mainVideosArr.filter((video) =>
			event.target.className.includes(video.id)
		);
		setMainVideoObj(newMainVideoArr[0]);
	};

	return (
		<>
			<Navigation />
			<CurrentVideo {...mainVideoObj} />
			<VideoList
				sideVideosList={sideVideosList}
				mainVideoObj={mainVideoObj}
				clickHandler={clickHandler}
			/>
		</>
	);
}

export default App;
