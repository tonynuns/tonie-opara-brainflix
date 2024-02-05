import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import SideVideos from "./components/SideVideos/SideVideos";
import { getMainVideo, getSideVideos } from "./utils/apiMethods/brainflix-api";
import "./App.scss";

function App() {
	const [mainVideoObj, setMainVideoObj] = useState({});
	const [sideVideosList, setSideVideosList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const sideVideos = await getSideVideos();
			const mainVideo = await getMainVideo(sideVideos[0].id);
			setSideVideosList(sideVideos);
			setMainVideoObj(mainVideo);
		};
		fetchData();
	}, []);

	return (
		<>
			<Header />
			<MainVideo mainVideo={mainVideoObj} />
			<SideVideos
				sideVideos={sideVideosList}
				mainVideo={mainVideoObj}
				setMainVideo={setMainVideoObj}
			/>
		</>
	);
}

export default App;
