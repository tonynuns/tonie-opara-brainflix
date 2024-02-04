// import Videos from "./Videos/Videos";
import "./SideVideos.scss";

function SideVideos({ sideVideosList, mainVideo, handleVideoClick }) {
	return (
		<aside className="side-videos">
			<h1 className="side-videos__heading">NEXT VIDEOS</h1>
			{sideVideosList
				.filter((sideVideo) => sideVideo.id !== mainVideo.id)
				.map((video) => (
					<div
						key={video.id}
						onClick={() => handleVideoClick(video.id)}
						className="side-videos__video">
						<div className="side-videos__video-img-wrapper">
							<img
								className="side-videos__video-img"
								src={video.image}
								alt="Video Thumbnail"></img>
						</div>
						<div className="side-videos__video-text-wrapper">
							<h1 className="side-videos__video-title">{video.title}</h1>
							<p className="side-videos__video-channel">{video.channel}</p>
						</div>
					</div>
				))}
		</aside>
	);
}

export default SideVideos;
