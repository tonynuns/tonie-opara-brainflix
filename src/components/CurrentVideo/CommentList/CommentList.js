import Comments from "./Comments/Comments";
import "./CommentList.scss";
import formatDate from "../../../helperFunctions/formatDate";

function CommentList({ comments }) {
	return (
		<section className="comment-list">
			{comments.map((comment) => (
				<Comments
					name={comment.name}
					date={formatDate(comment.timestamp)}
					comment={comment.comment}
				/>
			))}
		</section>
	);
}

export default CommentList;
