import formatDate from "../../../../utils/helperFunctions/formatDate";
import "./CommentDetail.scss";

function CommentDetail({ name, timestamp, comment }) {
	return (
		<div class="main-video__comment">
			<div class="main-video__comment-avatar avatar"></div>
			<div class="main-video__comment-text-wrapper">
				<h3 class="main-video__comment-name">{name}</h3>
				<h3 class="main-video__comment-date">{formatDate(timestamp)}</h3>
				<p class="main-video__comment-text">{comment}</p>
			</div>
		</div>
	);
}

export default CommentDetail;
