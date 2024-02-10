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

	// Retrieve side videos array from the browser storage
	const sideVideosData = () => {
		const sideVideosStr = sessionStorage.getItem("sideVideos");
		return JSON.parse(sideVideosStr);
	};

	const fetchSideVideos = async () => {
		const sideVideos = await getSideVideos();
		setSideVideosList(sideVideos);
		sessionStorage.setItem("sideVideos", JSON.stringify(sideVideos)); // Store side vide array in browser session storage
	};

	const fetchMainVideo = async () => {
		const sideVideos = sideVideosData();
		const mainVideo = await getMainVideo(videoId ? videoId : sideVideos[0].id);
		setMainVideoObj(mainVideo);
	};

	useEffect(() => {
		fetchSideVideos();
	}, []);

	useEffect(() => {
		fetchMainVideo();
	}, [videoId]);

	if (videoId && !sideVideosData().find((video) => video.id === videoId)) {
		return <Navigate to="*" />;
	}

	return (
		<>
			<MainVideo mainVideo={mainVideoObj} />
			<SideVideos sideVideos={sideVideosList} mainVideo={mainVideoObj} />
		</>
	);
}

export default HomePage;
