import "./VideoPlayer.scss";

function VideoPlayer({ video, image }) {
	return (
		<div className="video-player">
			<video
				className="video-player__video"
				controls
				src={video}
				poster={image}></video>
		</div>
	);
}

export default VideoPlayer;
