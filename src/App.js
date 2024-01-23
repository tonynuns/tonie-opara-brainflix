import { useState } from "react";
import videoDetailsArr from "./data/video-details.json";
import videoListArr from "./data/videos.json";
import Navigation from "./components/Navigation/Navigation";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import VideoList from "./components/VideoList/VideoList";
import "./App.scss";

function App() {
	const initialVideoObj = videoDetailsArr[0];
	const [currentVideoObj, setCurrentVideoObj] = useState(initialVideoObj);
	const [videoList, setVideoList] = useState(videoListArr);

	const clickHandler = (event) => {
		const newVideoObj = videoDetailsArr.filter(
			(video) => video.id === event.target.id
		);
		setCurrentVideoObj(newVideoObj[0]);
	};

	return (
		<>
			<Navigation />
			<CurrentVideo {...currentVideoObj} />
			<VideoList
				videoList={videoList}
				currentVideoObj={currentVideoObj}
				clickHandler={clickHandler}
			/>
		</>
	);
}

export default App;
