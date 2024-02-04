import { useState } from "react";
import mainVideosArr from "./data/video-details.json";
import sideVideosArr from "./data/videos.json";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import SideVideos from "./components/SideVideos/SideVideos";
import "./App.scss";

function App() {
	const [mainVideoObj, setMainVideoObj] = useState(mainVideosArr[0]);
	const [sideVideosList] = useState(sideVideosArr);

	const handleVideoClick = (id) => {
		const newMainVideoArr = mainVideosArr.filter((video) => video.id === id);
		setMainVideoObj(newMainVideoArr[0]);
	};

	return (
		<>
			<Header />
			<MainVideo mainVideo={mainVideoObj} />
			<SideVideos
				sideVideosList={sideVideosList}
				mainVideo={mainVideoObj}
				handleVideoClick={handleVideoClick}
			/>
		</>
	);
}

export default App;
