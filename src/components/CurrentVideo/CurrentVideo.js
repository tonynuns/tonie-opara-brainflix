import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoDescription from "./VideoDescription/VideoDescription";
import CommentForm from "./CommentForm/CommentForm";
import "./CurrentVideo.scss";

function CurrentVideo() {
	return (
		<section className="current-video">
			<VideoPlayer />
			<VideoDescription />
			<CommentForm />
		</section>
	);
}
CurrentVideo();

export default CurrentVideo;
