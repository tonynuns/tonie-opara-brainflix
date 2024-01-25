import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoDescription from "./VideoDescription/VideoDescription";
import CommentForm from "./CommentForm/CommentForm";
import CommentList from "./CommentList/CommentList";
import "./CurrentVideo.scss";

function CurrentVideo(mainVideoObj) {
	return (
		<section className="current-video">
			<VideoPlayer {...mainVideoObj} />
			<VideoDescription {...mainVideoObj} />
			<CommentForm />
			<CommentList {...mainVideoObj} />
		</section>
	);
}

export default CurrentVideo;
