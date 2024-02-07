import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import MainVideo from "../../components/MainVideo/MainVideo";
import SideVideos from "../../components/SideVideos/SideVideos";
import {
	getMainVideo,
	getSideVideos,
} from "../../utils/apiMethods/brainflix-api";

function HomePage() {
	let { videoId } = useParams();
	const [mainVideoObj, setMainVideoObj] = useState({});
	const [sideVideosList, setSideVideosList] = useState([]);

	const getVideos = async () => {
		const sideVideos = await getSideVideos();
		const mainVideo = await getMainVideo(videoId ? videoId : sideVideos[0].id);
		setMainVideoObj(mainVideo);
		setSideVideosList(sideVideos);
	};

	useEffect(() => {
		getVideos();
	}, [videoId]);

	if (videoId && !sideVideosList.find((video) => video.id === videoId)) {
		return <Navigate to="*" />;
	}

	return (
		<>
			<MainVideo mainVideo={mainVideoObj} />
			<SideVideos
				sideVideos={sideVideosList}
				mainVideo={mainVideoObj}
				setMainVideo={setMainVideoObj}
				setSideVideos={setSideVideosList}
			/>
		</>
	);
}

export default HomePage;
