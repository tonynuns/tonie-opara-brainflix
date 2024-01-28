import "./VideoPlayer.scss";

function VideoPlayer({ mainVideo }) {
	return (
		<section className="video-player">
			<video
				className="video-player__video"
				controls
				src={mainVideo.video}
				poster={mainVideo.image}></video>
		</section>
	);
}

export default VideoPlayer;
