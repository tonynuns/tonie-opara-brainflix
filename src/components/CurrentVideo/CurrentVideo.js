import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoDescription from "./VideoDescription/VideoDescription";
import CommentForm from "./CommentForm/CommentForm";
import CommentList from "./CommentList/CommentList";
import "./CurrentVideo.scss";

function CurrentVideo({ mainVideo }) {
	return (
		<section className="current-video">
			<VideoPlayer mainVideo={mainVideo} />
			<VideoDescription mainVideo={mainVideo} />
			<CommentForm />
			<CommentList mainVideo={mainVideo} />
		</section>
	);
}

export default CurrentVideo;
