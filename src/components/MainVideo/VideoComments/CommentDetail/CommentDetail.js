import {
	deleteComment,
	getMainVideo,
} from "../../../../utils/apiMethods/brainflix-api";
import formatDate from "../../../../utils/helperFunctions/formatDate";
import "./CommentDetail.scss";

function CommentDetail({ comment, videoId, setMainVideo }) {
	const handleCommentDelete = async () => {
		await deleteComment(videoId, comment.id);
		const currentVideo = await getMainVideo(videoId);
		setMainVideo(currentVideo);
	};

	return (
		<div class="main-video__comment">
			<div class="main-video__comment-avatar avatar"></div>
			<div class="main-video__comment-text-wrapper">
				<h3 class="main-video__comment-name">{comment.name}</h3>
				<h3 class="main-video__comment-date">
					{formatDate(comment.timestamp)}
				</h3>
				<p class="main-video__comment-text">{comment.comment}</p>
				<button
					className="main-video__comment-delete-btn btn"
					onClick={handleCommentDelete}>
					DELETE
				</button>
			</div>
		</div>
	);
}

export default CommentDetail;
