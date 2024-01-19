import VideoPlayer from "./VideoPlayer/VideoPlayer";
import "./CurrentVideo.scss";

function CurrentVideo() {
	return (
		<section className="current-video">
			<VideoPlayer />
		</section>
	);
}
CurrentVideo();

export default CurrentVideo;
