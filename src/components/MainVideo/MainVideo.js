import VideoDescription from "./VideoDescription/VideoDescription";
import VideoComments from "./VideoComments/VideoComments";

function MainVideo({ mainVideo }) {
	return (
		<main className="main-video">
			<VideoDescription mainVideo={mainVideo} />
			<VideoComments comments={mainVideo.comments} />
		</main>
	);
}

export default MainVideo;
