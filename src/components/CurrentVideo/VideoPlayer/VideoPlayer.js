import "./VideoPlayer.scss";

function VideoPlayer({ video, image }) {
	return (
		<section className="video-player">
			<video
				className="video-player__video"
				controls
				src={video}
				poster={image}></video>
		</section>
	);
}

export default VideoPlayer;
