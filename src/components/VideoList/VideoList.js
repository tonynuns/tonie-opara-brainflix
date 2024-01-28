import Videos from "./Videos/Videos";
import "./VideoList.scss";

function VideoList({ sideVideosList, mainVideo, handleVideoClick }) {
	return (
		<section className="video-list">
			<h1 className="video-list__heading">NEXT VIDEOS</h1>
			{sideVideosList
				.filter((sideVideo) => sideVideo.id !== mainVideo.id)
				.map((video) => (
					<Videos
						key={video.id}
						id={video.id}
						image={video.image}
						title={video.title}
						channel={video.channel}
						handleVideoClick={handleVideoClick}
					/>
				))}
		</section>
	);
}

export default VideoList;
