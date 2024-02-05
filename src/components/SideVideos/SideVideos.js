import { useState, useEffect } from "react";
import { getMainVideo } from "../../utils/apiMethods/brainflix-api";
import VideoDetail from "./VideoDetail/VideoDetail";
import "./SideVideos.scss";

function SideVideos({ sideVideos, mainVideo, setMainVideo }) {
	const [id, setId] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			if (id) {
				const mainVideo = await getMainVideo(id);
				setMainVideo(mainVideo);
			}
		};
		fetchData();
	}, [id]);

	const handleVideoClick = (id) => {
		setId(id);
	};

	return (
		<aside className="side-videos">
			<h1 className="side-videos__heading">NEXT VIDEOS</h1>
			{sideVideos
				.filter((sideVideo) => sideVideo.id !== mainVideo.id)
				.map((video) => (
					<VideoDetail
						key={video.id}
						id={video.id}
						image={video.image}
						title={video.title}
						channel={video.channel}
						handleVideoClick={handleVideoClick}
					/>
				))}
		</aside>
	);
}

export default SideVideos;
