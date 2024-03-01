import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoDescription from "../../components/MainVideo/VideoDescription/VideoDescription";
import VideoComments from "../../components/MainVideo/VideoComments/VideoComments";
import SideVideos from "../../components/SideVideos/SideVideos";
import {
	getMainVideo,
	getSideVideos,
} from "../../utils/apiMethods/brainflix-api";

function HomePage() {
	const { videoId } = useParams();
	const navigate = useNavigate();
	const [mainVideoObj, setMainVideoObj] = useState({});
	const [sideVideosList, setSideVideosList] = useState([]);

	useEffect(() => {
		const fetchVideos = async () => {
			// getSideVideos API call only runs on initial render or page refresh when sideVideosList = []
			const sideVideos =
				sideVideosList.length > 0 ? sideVideosList : await getSideVideos();
			setSideVideosList(sideVideos);

			// if invalid videoId is inputted to URL, navigate to NotFoundPage
			if (videoId && !sideVideos.find((video) => video.id === videoId)) {
				navigate("*");
			} else {
				const mainVideoId = videoId ? videoId : sideVideos[0].id;
				const mainVideo = await getMainVideo(mainVideoId);
				setMainVideoObj(mainVideo);
			}
		};
		fetchVideos();
	}, [videoId]);

	return (
		<>
			<MainVideo>
				<VideoDescription mainVideo={mainVideoObj} />
				<VideoComments
					videoId={mainVideoObj.id}
					comments={mainVideoObj.comments}
					setMainVideo={setMainVideoObj}
				/>
			</MainVideo>
			<SideVideos sideVideos={sideVideosList} mainVideo={mainVideoObj} />
		</>
	);
}

export default HomePage;
