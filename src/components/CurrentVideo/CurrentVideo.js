import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoDescription from "./VideoDescription/VideoDescription";
import CommentForm from "./CommentForm/CommentForm";
import CommentList from "./CommentList/CommentList";
import "./CurrentVideo.scss";

function CurrentVideo(currentVideoObj) {
	return (
		<section className="current-video">
			<VideoPlayer {...currentVideoObj} />
			<VideoDescription {...currentVideoObj} />
			<CommentForm />
			<CommentList {...currentVideoObj} />
		</section>
	);
}

export default CurrentVideo;
