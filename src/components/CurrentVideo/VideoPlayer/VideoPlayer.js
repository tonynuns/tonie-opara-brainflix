import json from "../../../data/video-details.json";
import "./VideoPlayer.scss";

function VideoPlayer() {
	const videoPoster = json[0].image;
	return (
		<div className="current-video__player-container">
			<video
				className="current-video__player"
				controls
				src=""
				poster={videoPoster}></video>
		</div>
	);
}

export default VideoPlayer;
