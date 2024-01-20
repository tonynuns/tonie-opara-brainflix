import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoDescription from "./VideoDescription/VideoDescription";
import "./CurrentVideo.scss";

function CurrentVideo() {
	return (
		<section className="current-video">
			<VideoPlayer />
			<VideoDescription />
		</section>
	);
}
CurrentVideo();

export default CurrentVideo;
