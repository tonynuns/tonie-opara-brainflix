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

	const handleVideoClick = (id) => {
		const newMainVideoArr = mainVideosArr.filter((video) => video.id === id);
		setMainVideoObj(newMainVideoArr[0]);
	};

	return (
		<>
			<Navigation />
			<CurrentVideo mainVideo={mainVideoObj} />
			<VideoList
				sideVideosList={sideVideosList}
				mainVideo={mainVideoObj}
				handleVideoClick={handleVideoClick}
			/>
		</>
	);
}

export default App;
