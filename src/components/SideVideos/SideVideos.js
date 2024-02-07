import VideoDetail from "./VideoDetail/VideoDetail";
import "./SideVideos.scss";

function SideVideos({ sideVideos, mainVideo }) {
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
					/>
				))}
		</aside>
	);
}

export default SideVideos;
