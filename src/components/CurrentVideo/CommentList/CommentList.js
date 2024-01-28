import Comments from "./Comments/Comments";
import "./CommentList.scss";
import formatDate from "../../../helperFunctions/formatDate";

function CommentList({ mainVideo }) {
	return (
		<section className="comment-list">
			{mainVideo.comments.map((comment) => (
				<Comments
					key={comment.id}
					name={comment.name}
					date={formatDate(comment.timestamp)}
					comment={comment.comment}
				/>
			))}
		</section>
	);
}

export default CommentList;
